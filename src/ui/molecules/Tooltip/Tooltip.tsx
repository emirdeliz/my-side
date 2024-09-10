import React, {
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  CSSProperties,
  forwardRef,
  MutableRefObject,
} from 'react';
import { withFloat } from '@atoms';
import * as S from './Tooltip.style';
import { GenericObject } from '@types';
import { AppThemeOptions } from '@theme';

export interface TooltipProps extends AppThemeOptions {
  invisible?: boolean;
  width?: number;
  hoverable?: boolean;
  title: any;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  style?: CSSProperties;
  _floatingElementAnchor?: any;
  _floatingElementStyle?: any;
  children?: any;
  hideArrow?: boolean;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  ref?: MutableRefObject<any>;
}

const TooltipPopup = withFloat((props: TooltipProps) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [arrowLeftPosition, setArrowLeftPosition] = useState<number>(0);
  const [arrowTopPosition, setArrowTopPosition] = useState<number>(0);

  const {
    title,
    hideArrow,
    light,
    top,
    bottom,
    left,
    right,
    _floatingElementAnchor,
    _floatingElementStyle,
    onMouseOver,
    onMouseLeave,
    warn,
    success,
    error,
    info,
  } = props;

  const isArrowVertical = !left && !right;

  useEffect(() => {
    if (_floatingElementStyle.left !== undefined) {
      const containerWidth =
        refContainer.current?.getBoundingClientRect().width || 1;
      const containerHeight =
        refContainer.current?.getBoundingClientRect().height || 1;
      const containerTop =
        refContainer.current?.getBoundingClientRect().top || 1;
      const containerLeft =
        refContainer.current?.getBoundingClientRect().left || 1;

      const anchorLeft = _floatingElementAnchor.getBoundingClientRect().left;
      const anchorTop = _floatingElementAnchor.getBoundingClientRect().top;
      const anchorWidth = _floatingElementAnchor.offsetWidth;
      const anchorHeight = _floatingElementAnchor.offsetHeight;

      if (isArrowVertical) {
        setArrowLeftPosition(anchorLeft - containerLeft + anchorWidth / 2);
        setArrowTopPosition(!bottom ? -9 : 6);
      } else {
        setArrowLeftPosition(left ? containerWidth - 6 : -4);
        setArrowTopPosition(
          anchorTop - containerTop - containerHeight + anchorHeight / 3
        );
      }
    }
  }, [
    _floatingElementAnchor,
    _floatingElementStyle,
    bottom,
    isArrowVertical,
    left,
    right,
    top,
  ]);

  const arrow = (
    <S.Arrow
      {...{
        top,
        bottom,
        left,
        right,
        light,
        arrowTopPosition,
        arrowLeftPosition,
        warn,
        success,
        error,
        info,
      }}
    />
  );
  return (
    <>
      {!hideArrow && bottom && arrow}
      <S.Container
        ref={refContainer}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        {title}
      </S.Container>
      {!hideArrow && !bottom && arrow}
    </>
  );
});

interface TooltipRefObject {
  open: (
    div: HTMLDivElement | null,
    top?: boolean,
    bottom?: boolean,
    left?: boolean,
    right?: boolean
  ) => void;
  close: () => void;
  isOpen: () => boolean;
}

export const Tooltip = forwardRef(
  (props: TooltipProps, ref?: GenericObject) => {
    const refTooltip = useRef<TooltipRefObject>();
    const refDivContents = useRef<HTMLDivElement>(null);
    const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>();
    const { top, bottom, left, right, hoverable, title, invisible, children } =
      props;

    useImperativeHandle(ref, () => ({
      open,
    }));

    const open = () => {
      if (refTooltip.current && !refTooltip.current?.isOpen()) {
        refTooltip.current.open(
          refDivContents.current,
          top,
          bottom,
          left,
          right
        );
      }
    };

    const close = () => {
      if (hoverable) {
        const id = setTimeout(() => {
          if (refTooltip.current && timeOutId) {
            refTooltip.current.close();
          }
        }, 300);
        setTimeOutId(id);
      } else {
        if (refTooltip.current) {
          refTooltip.current.close();
        }
      }
    };

    const extraTooltipProps = {
      onMouseLeave: () => close(),
      onMouseOver: () => {
        if (timeOutId) {
          clearTimeout(timeOutId);
          setTimeOutId(null);
        }
      },
    };

    const isMobile = false;
    return (
      <>
        {title && !invisible && (
          <TooltipPopup {...props} {...extraTooltipProps} ref={refTooltip} />
        )}
        <S.Content
          onMouseOver={() => !isMobile && open()}
          onMouseMove={() => !isMobile && open()}
          onMouseDown={(e) => !isMobile && e.stopPropagation()}
          onMouseLeave={() => !isMobile && close()}
          onTouchEnd={() => open()}
          ref={refDivContents}
        >
          {children}
        </S.Content>
      </>
    );
  }
);
