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
import { Button, ButtonProps } from '../button';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';
import { useEvent } from '../internal/hooks/useEvent';

export const CAROUSEL_SWITCH_AUTO_PLAY_DELAY_MS = 5000;
export const CAROUSEL_SWITCH_BY_ARROWS_DELAY_MS = 300;

export const CAROUSEL_ANIMATION_DELAY_MS = 1000;
export const CAROUSEL_ANIMATION_DELAY_VAR = '--gkit-carousel-animation-delay';

export type CarouselOnChange = { oldIndex: number; newIndex: number; fromAutoPlay: boolean };
export type CarouselButtonProps = ButtonProps & { hidden?: boolean };

export type CarouselProps = {
  autoPlay?: boolean;
  autoPlayDelay?: number;
  switchByArrowsDelay?: number;
  animationDelay?: number;
  swipeable?: boolean;
  onChange?: (params: CarouselOnChange) => void;
  leftButtonProps?: CarouselButtonProps;
  rightButtonProps?: CarouselButtonProps;
  children: ReactNode[];
};

export const Carousel = React.memo(
  ({
    autoPlay = true,
    autoPlayDelay = CAROUSEL_SWITCH_AUTO_PLAY_DELAY_MS,
    switchByArrowsDelay = CAROUSEL_SWITCH_BY_ARROWS_DELAY_MS,
    animationDelay = CAROUSEL_ANIMATION_DELAY_MS,
    swipeable = true,
    onChange: onChangeProp,
    leftButtonProps: leftButtonPropsWithCustom = {},
    rightButtonProps: rightButtonPropsWithCustom = {},
    children,
  }: CarouselProps) => {
    const { hidden: leftButtonHidden, ...leftButtonProps } = leftButtonPropsWithCustom;
    const { hidden: rightButtonHidden, ...rightButtonProps } = rightButtonPropsWithCustom;

    const onChange = useEvent((params: CarouselOnChange) => {
      onChangeProp?.(params);
    });

    // Для обновления использовать setCurrentSlideIndex
    const [currentSlideIndex, _setCurrentSlideIndex] = useState(0);

    const setCurrentSlideIndex = useCallback(
      (newIndex: number, fromAutoPlay = false) => {
        const oldIndex = currentSlideIndex;

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

    useLayoutEffect(() => {
      if (!swipeable) return;

      const carouselElement = carouselRef.current;
      if (!carouselElement) return;

      const pointerDownHandler = (downEvent: MouseEvent) => {
        const pointerUpHandler = (upEvent: MouseEvent) => {
          const sign = Math.sign(downEvent.clientX - upEvent.clientX);

          moveSlideByValue(sign);

          document.removeEventListener('pointerup', pointerUpHandler);
        };

        document.addEventListener('pointerup', pointerUpHandler);
      };

      carouselElement.addEventListener('pointerdown', pointerDownHandler);

      return () => {
        carouselElement.removeEventListener('pointerdown', pointerDownHandler);
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
      <div className="gkit-carousel" style={{ [CAROUSEL_ANIMATION_DELAY_VAR as string]: `${animationDelay / 1000}s` }}>
        <div ref={carouselRef} className={classNames('carousel', { 'non-user-select': swipeable })}>
          {React.Children.map(children, (child, index) => {
            return <div className={classNames('carousel-item', { active: currentSlideIndex === index })}>{child}</div>;
          })}
        </div>

        <div className="navigation">
          <div className="pointers">
            {pointers.map((_, index) => {
              return (
                <div
                  key={`pointer-${index}`}
                  className={classNames('pointer', { selected: currentSlideIndex === index })}
                  onClick={() => setCurrentSlideIndex(index)}
                />
              );
            })}
          </div>

          <div className="buttons">
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
