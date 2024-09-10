import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Fade, Icon, Link } from '@atoms';
import { Calendar, CalendarProps } from '@molecules';
import { formatDateAsYYYYMMDD } from '@helpers';
import { useOnClickOutside } from '@hooks';
import * as S from './LinkCalendar.style';

export interface LinkCalendarProps extends CalendarProps {
  readOnly?: boolean;
}

export const LinkCalendar = forwardRef<HTMLDivElement, LinkCalendarProps>(
  ({ value, minDate, maxDate, readOnly, onChange }, refLinkCalendar) => {
    const calendarRef = useRef<HTMLDivElement>(null);
    const [openCalendar, setOpenCalendar] = useState<boolean>(false);
    const { appendEventOutsideOnWindow } = useOnClickOutside();

    const dateAsFormat = useMemo(() => {
      return formatDateAsYYYYMMDD(value);
    }, [value]);

    useEffect(() => {
      appendEventOutsideOnWindow(calendarRef, () => {
        setOpenCalendar(false);
      });
    }, [appendEventOutsideOnWindow, calendarRef]);

    useImperativeHandle(
      refLinkCalendar,
      () => {
        return calendarRef?.current as HTMLDivElement;
      },
      []
    );

    return (
      <S.LinkCalendar
        ref={calendarRef}
        onClick={() => !readOnly && setOpenCalendar(true)}
      >
        {!readOnly && <Icon.Calendar darkGreen nm />}
        <Link
          black={readOnly}
          darkGreen={!readOnly}
          fs2={!readOnly}
          noWrap
          role="link"
        >
          {dateAsFormat || 'Selecionar'}
        </Link>
        {openCalendar && (
          <S.Calendar>
            <Fade>
              <Calendar
                minDate={minDate}
                maxDate={maxDate}
                onChange={(d) => {
                  setOpenCalendar(false);
                  onChange && onChange(d);
                }}
                value={value}
              />
            </Fade>
          </S.Calendar>
        )}
      </S.LinkCalendar>
    );
  }
);
