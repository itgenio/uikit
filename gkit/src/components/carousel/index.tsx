import './style.less';

import classNames from 'classnames';
import React, {
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ChevronLeftIcon } from '@itgenio/icons/chevronLeftIcon';
import { ChevronRightIcon } from '@itgenio/icons/chevronRightIcon';
import { Button, ButtonProps } from '../button';
import { useEvent } from '../internal/hooks';
import { canSwipeByEvents } from './utils';

export const CAROUSEL_SWITCH_AUTO_PLAY_DELAY_MS = 5000;
export const CAROUSEL_SWITCH_BY_ARROWS_DELAY_MS = 300;

export const CAROUSEL_ANIMATION_DELAY_MS = 1000;
export const CAROUSEL_ANIMATION_DELAY_VAR = '--gkit-carousel-animation-delay';

export const CAROUSEL_SWIPE_THRESHOLD_VALUE = 5;

export type CarouselOnChange = { oldIndex: number; newIndex: number; fromAutoPlay: boolean };
export type CarouselButtonProps = ButtonProps & { hidden?: boolean };

export type CarouselProps = {
  className?: string;
  slideIndex?: number;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  switchByArrowsDelay?: number;
  animationDelay?: number;
  swipeable?: boolean;
  onChange?: (params: CarouselOnChange) => void;
  leftButtonProps?: CarouselButtonProps;
  rightButtonProps?: CarouselButtonProps;
  idQa?: string;
  children: ReactNode[];
};

export const Carousel = React.memo(
  ({
    className,
    slideIndex,
    autoPlay = true,
    autoPlayDelay = CAROUSEL_SWITCH_AUTO_PLAY_DELAY_MS,
    switchByArrowsDelay = CAROUSEL_SWITCH_BY_ARROWS_DELAY_MS,
    animationDelay = CAROUSEL_ANIMATION_DELAY_MS,
    swipeable = true,
    onChange: onChangeProp,
    leftButtonProps: leftButtonPropsWithCustom = {},
    rightButtonProps: rightButtonPropsWithCustom = {},
    idQa,
    children,
  }: CarouselProps) => {
    const { hidden: leftButtonHidden, ...leftButtonProps } = leftButtonPropsWithCustom;
    const { hidden: rightButtonHidden, ...rightButtonProps } = rightButtonPropsWithCustom;

    const onChange = useEvent((params: CarouselOnChange) => {
      onChangeProp?.(params);
    });

    // Для обновления использовать setCurrentSlideIndex
    const [_currentSlideIndex, _setCurrentSlideIndex] = useState(slideIndex ?? 0);

    const currentSlideIndex = slideIndex ?? _currentSlideIndex;

    const setCurrentSlideIndex = useCallback(
      (newIndex: number, fromAutoPlay = false) => {
        const oldIndex = currentSlideIndex;
        if (oldIndex === newIndex) return;

        _setCurrentSlideIndex(newIndex);

        onChange({ oldIndex, newIndex, fromAutoPlay });
      },
      [currentSlideIndex, onChange]
    );

    const slidesCount = children.length;
    const pointers = useMemo(() => Array.from({ length: slidesCount }), [slidesCount]);

    const carouselRef = useRef<HTMLDivElement>();
    const switchByArrowsTimeRef = useRef(0);

    const moveSlideByValue = useCallback(
      (value: number, fromAutoPlay: boolean = false) => {
        const newIndex = (currentSlideIndex + value + slidesCount) % slidesCount;
        if (newIndex === currentSlideIndex) return;

        setCurrentSlideIndex(newIndex, fromAutoPlay);
      },
      [currentSlideIndex, setCurrentSlideIndex, slidesCount]
    );

    const onLeftBtnClicked = useCallback(
      (e: ReactMouseEvent<HTMLButtonElement>) => {
        moveSlideByValue(-1);

        leftButtonProps.onClick?.(e);
      },
      [moveSlideByValue, leftButtonProps]
    );

    const onRightBtnClicked = useCallback(
      (e: ReactMouseEvent<HTMLButtonElement>) => {
        moveSlideByValue(1);

        rightButtonProps.onClick?.(e);
      },
      [moveSlideByValue, rightButtonProps]
    );

    // Переключение слайда по стрелкам
    useLayoutEffect(() => {
      const keyDownHandler = (e: KeyboardEvent) => {
        if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;

        if (Date.now() - switchByArrowsTimeRef.current < switchByArrowsDelay) return;

        const activeElements = document.querySelectorAll('div:focus,input:focus,textarea:focus');
        if (activeElements.length > 0) return;

        if (e.code === 'ArrowLeft') {
          moveSlideByValue(-1);
          switchByArrowsTimeRef.current = Date.now();

          return;
        }

        if (e.code === 'ArrowRight') {
          moveSlideByValue(1);
          switchByArrowsTimeRef.current = Date.now();
        }
      };

      const keyUpHandler = () => {
        switchByArrowsTimeRef.current = 0;
      };

      document.addEventListener('keydown', keyDownHandler);
      document.addEventListener('keyup', keyUpHandler);

      return () => {
        document.removeEventListener('keydown', keyDownHandler);
        document.removeEventListener('keyup', keyUpHandler);
      };
    }, [moveSlideByValue, switchByArrowsDelay]);

    // Свайп слайда мышкой/тачем
    useLayoutEffect(() => {
      if (!swipeable) return;

      const carouselElement = carouselRef.current;
      if (!carouselElement) return;

      const mouseDownHandler = (downEvent: MouseEvent) => {
        const mouseUpHandler = (upEvent: MouseEvent) => {
          const moveValue = downEvent.clientX - upEvent.clientX;

          if (canSwipeByEvents(downEvent, upEvent)) {
            const sign = Math.sign(moveValue);

            moveSlideByValue(sign);
          }

          document.removeEventListener('mouseup', mouseUpHandler);
        };

        document.addEventListener('mouseup', mouseUpHandler);
      };

      const touchStartHandler = (startEvent: TouchEvent) => {
        const startTouch = startEvent.touches[0];
        if (!startTouch) return;

        const clearMoveAndEndEvents = () => {
          // @ts-expect-error passive unexpected
          document.removeEventListener('touchmove', touchMoveHandler, { passive: false });
          document.removeEventListener('touchend', touchEndHandler);
        };

        const touchMoveHandler = (moveEvent: TouchEvent) => {
          const moveTouch = moveEvent.touches[0];
          if (!moveTouch) return;

          if (canSwipeByEvents(startTouch, moveTouch)) {
            if (moveEvent.cancelable) {
              moveEvent.preventDefault();
            }

            return false;
          }

          clearMoveAndEndEvents();
        };

        const touchEndHandler = (endEvent: TouchEvent) => {
          const endTouch = endEvent.changedTouches[0];

          if (endTouch && canSwipeByEvents(startTouch, endTouch)) {
            const sign = Math.sign(startTouch.clientX - endTouch.clientX);

            moveSlideByValue(sign);
          }

          clearMoveAndEndEvents();
        };

        document.addEventListener('touchmove', touchMoveHandler, { passive: false });
        document.addEventListener('touchend', touchEndHandler);
      };

      // Desktop
      carouselElement.addEventListener('mousedown', mouseDownHandler);

      // Mobile/tablets
      carouselElement.addEventListener('touchstart', touchStartHandler);

      return () => {
        carouselElement.removeEventListener('mousedown', mouseDownHandler);
        carouselElement.removeEventListener('touchstart', touchStartHandler);
      };
    }, [moveSlideByValue, swipeable]);

    useLayoutEffect(() => {
      if (!autoPlay || !autoPlayDelay) return;

      const interval = setInterval(() => {
        moveSlideByValue(1, true);
      }, autoPlayDelay);

      return () => {
        clearInterval(interval);
      };
    }, [autoPlay, autoPlayDelay, moveSlideByValue]);

    return (
      <div
        className={classNames('gkit-carousel', className)}
        style={{ [CAROUSEL_ANIMATION_DELAY_VAR as string]: `${animationDelay / 1000}s` }}
        id-qa={idQa}
      >
        <div
          ref={carouselRef}
          className={classNames('carousel', { 'non-user-select': swipeable })}
          id-qa={classNames({ [`${idQa}-carousel`]: !!idQa })}
        >
          {React.Children.map(children, (child, index) => {
            return <div className={classNames('carousel-item', { active: currentSlideIndex === index })}>{child}</div>;
          })}
        </div>

        <div className="navigation" id-qa={classNames({ [`${idQa}-navigation`]: !!idQa })}>
          <div className="pointers">
            {pointers.map((_, index) => {
              return (
                <div
                  key={`pointer-${index}`}
                  className={classNames('pointer', { selected: currentSlideIndex === index })}
                  onClick={() => setCurrentSlideIndex(index)}
                  id-qa={classNames({ [`${idQa}-pointer-${index}`]: !!idQa })}
                />
              );
            })}
          </div>

          <div className="buttons" id-qa={classNames({ [`${idQa}-buttons`]: !!idQa })}>
            {!leftButtonHidden && (
              <Button type="secondary" size="small" asIcon {...leftButtonProps} onClick={onLeftBtnClicked}>
                <ChevronLeftIcon />
              </Button>
            )}

            {!rightButtonHidden && (
              <Button type="secondary" size="small" asIcon {...rightButtonProps} onClick={onRightBtnClicked}>
                <ChevronRightIcon />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';
