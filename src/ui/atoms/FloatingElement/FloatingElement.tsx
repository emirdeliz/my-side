import { GenericObject } from '@types';
import React, {
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  cloneElement,
  CSSProperties,
  forwardRef,
  Ref,
  ReactElement,
  JSXElementConstructor,
} from 'react';
import { createPortal } from 'react-dom';
import { FloatingElementContainer as Container } from './FloatingElement.style';

interface FloatingElementProps {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  anchor?: HTMLElement | null;
  opened?: boolean;
  children: ReactElement<
    HTMLElement & { _floatingElementStyle: CSSProperties },
    string | JSXElementConstructor<GenericObject>
  >;
}

const FloatingElement = (props: FloatingElementProps) => {
  const [style, setStyle] = useState<CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const { anchor, opened, top, bottom, left, right } = props;

  useEffect(() => {
    if (!containerRef.current || !anchor || !opened) {
      return;
    }

    const anchorBounds = anchor.getBoundingClientRect();
    const containerBounds = containerRef.current.getBoundingClientRect();
    const tempStyle = getIdealPosition(
      anchorBounds,
      containerBounds,
      top,
      bottom,
      left,
      right
    );
    setStyle(tempStyle);
  }, [anchor, opened, top, bottom, left, right]);

  return (
    <>
      {props.opened &&
        createPortal(
          <Container
            onMouseDown={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            ref={containerRef}
            style={style}
          >
            {cloneElement(props.children, {
              _floatingElementStyle: style,
            })}
          </Container>,
          document.body
        )}
    </>
  );
};

const getIdealPosition = (
  anchorBounds: DOMRect,
  containerBounds: DOMRect,
  top?: boolean,
  bottom?: boolean,
  left?: boolean,
  right?: boolean
) => {
  const { width, height } = containerBounds;
  const style = {} as CSSProperties;
  const offset = 10;

  switch (true) {
    case right: {
      style.left = anchorBounds.left + anchorBounds.width + offset * 2.5;
      style.top = anchorBounds.top;
      break;
    }
    case left: {
      style.left = anchorBounds.left - width - offset * 2.5;
      style.top = anchorBounds.top;
      break;
    }
    case bottom: {
      style.left = anchorBounds.left;
      style.top = anchorBounds.top + anchorBounds.height + offset * 2;
      break;
    }
    case top:
    default: {
      style.left = anchorBounds.left;
      style.top = anchorBounds.top - height - offset * 1.5;
      break;
    }
  }

  const overflowWidth = document.body.offsetWidth - anchorBounds.left;
  const overflowLeft = overflowWidth + style.left - width;
  const hasOverflowLeft = overflowLeft < 0;
  if (hasOverflowLeft) {
    const left = style.left + overflowLeft;
    style.left = left < 0 ? offset : left;
  }

  const overflowRight = overflowWidth - width;
  const hasOverflowRight = overflowRight < 0;
  if (hasOverflowRight) {
    style.left = document.body.offsetWidth - width - offset;
  }

  // const overflowTop = (style.top + width) - window.innerWidth;
  // const hasOverflowRight = overflowRight > 0;
  // if (hasOverflowRight) {
  //   style.maxWidth = overflowRight;
  // }

  // const overflowLeft = (style.left + width) - window.innerWidth;
  // const hasOverflowRight = overflowRight > 0;
  // if (hasOverflowRight) {
  //   style.maxWidth = overflowRight;
  // }

  // if (style.left + width >= window.innerWidth - offset) {
  //   style.left = anchorBounds.right - width - anchorBounds.width;
  //   style.left += style.left < anchorBounds.left ? anchorBounds.width : 0;
  // }
  // if (style.top + height >= window.innerHeight - offset) {
  //   style.top = anchorBounds.bottom - height - anchorBounds.height;

  //   if (style.top <= 0) {
  //     style.top = offset * -1;
  //   }
  // }
  return style;
};

const withFloat = <T extends GenericObject>(
  Component: (args: GenericObject) => JSX.Element
) => {
  const ReffedComponent = (props: T, ref: Ref<GenericObject>) => {
    const [anchor, setAnchor] = useState<HTMLElement>();
    const [opened, setOpened] = useState<boolean>(false);

    useEffect(() => {
      const close = () => {
        if (opened) {
          setOpened(false);
        }
      };
      window.addEventListener('mousedown', close);
      window.addEventListener('mousewheel', close);
      window.addEventListener('resize', close);
      window.addEventListener('touchend', close);
      window.addEventListener('touchmove', close);
      return () => {
        window.removeEventListener('mousedown', close);
        window.removeEventListener('mousewheel', close);
        window.removeEventListener('resize', close);
        window.removeEventListener('touchmove', close);
        window.removeEventListener('touchend', close);
      };
    });

    useImperativeHandle(ref, () => ({
      close: () => setOpened(false),
      isOpen: () => opened,
      open: (a?: HTMLElement) => {
        setAnchor(a);
        setOpened(true);
      },
    }));

    return (
      <FloatingElement
        {...(props as GenericObject)}
        anchor={anchor}
        opened={opened}
      >
        <Component
          _floatingElementAnchor={anchor}
          close={() => setOpened(false)}
          {...(props as GenericObject)}
        />
      </FloatingElement>
    );
  };
  return forwardRef<GenericObject, T>(ReffedComponent);
};

export { FloatingElement, withFloat };
