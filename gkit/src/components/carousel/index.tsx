import './style.less';

import classNames from 'classnames';
import React, {
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button, ButtonProps } from '../button';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

export const CAROUSEL_SWITCH_AUTO_PLAY_DELAY_MS = 5000;
export const CAROUSEL_SWITCH_BY_ARROWS_DELAY_MS = 300;

export const CAROUSEL_ANIMATION_DELAY_MS = 1000;
export const CAROUSEL_ANIMATION_DELAY_VAR = '--gkit-carousel-animation-delay';

export type CarouselButtonProps = ButtonProps & { hidden?: boolean };

export type CarouselProps = {
  autoPlay?: boolean;
  autoPlayDelay?: number;
  switchByArrowsDelay?: number;
  animationDelay?: number;
  swipeable?: boolean;
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
    leftButtonProps: leftButtonPropsWithCustom = {},
    rightButtonProps: rightButtonPropsWithCustom = {},
    children,
  }: CarouselProps) => {
    const { hidden: leftButtonHidden, ...leftButtonProps } = leftButtonPropsWithCustom;
    const { hidden: rightButtonHidden, ...rightButtonProps } = rightButtonPropsWithCustom;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const slidesCount = children.length;
    const pointers = useMemo(() => Array.from({ length: slidesCount }), [slidesCount]);

    const carouselRef = useRef<HTMLDivElement>();
    const switchByArrowsTimeRef = useRef(0);

    const changeSlideIndex = useCallback(
      (value: number) => {
        setCurrentSlideIndex((currentSlideIndex + value + slidesCount) % slidesCount);
      },
      [currentSlideIndex, slidesCount]
    );

    const onLeftBtnClicked = useCallback(
      (e: ReactMouseEvent<HTMLButtonElement>) => {
        changeSlideIndex(-1);

        leftButtonProps.onClick?.(e);
      },
      [changeSlideIndex, leftButtonProps]
    );

    const onRightBtnClicked = useCallback(
      (e: ReactMouseEvent<HTMLButtonElement>) => {
        changeSlideIndex(1);

        rightButtonProps.onClick?.(e);
      },
      [changeSlideIndex, rightButtonProps]
    );

    useEffect(() => {
      const keyDownHandler = (e: KeyboardEvent) => {
        if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;

        if (Date.now() - switchByArrowsTimeRef.current < switchByArrowsDelay) return;

        const activeElements = document.querySelectorAll('div:focus,input:focus,textarea:focus');
        if (activeElements.length > 0) return;

        if (e.code === 'ArrowLeft') {
          changeSlideIndex(-1);
          switchByArrowsTimeRef.current = Date.now();

          return;
        }

        if (e.code === 'ArrowRight') {
          changeSlideIndex(1);
          switchByArrowsTimeRef.current = Date.now();

          return;
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
    }, [changeSlideIndex, switchByArrowsDelay]);

    useLayoutEffect(() => {
      if (!swipeable) return;

      const carouselElement = carouselRef.current;
      if (!carouselElement) return;

      const pointerDownHandler = (downEvent: MouseEvent) => {
        const pointerUpHandler = (upEvent: MouseEvent) => {
          const sign = Math.sign(upEvent.clientX - downEvent.clientX);

          changeSlideIndex(sign);

          document.removeEventListener('pointerup', pointerUpHandler);
        };

        document.addEventListener('pointerup', pointerUpHandler);
      };

      carouselElement.addEventListener('pointerdown', pointerDownHandler);

      return () => {
        carouselElement.removeEventListener('pointerdown', pointerDownHandler);
      };
    }, [changeSlideIndex, swipeable]);

    useLayoutEffect(() => {
      if (!autoPlay || !autoPlayDelay) return;

      const interval = setInterval(() => {
        changeSlideIndex(1);
      }, autoPlayDelay);

      return () => {
        clearInterval(interval);
      };
    }, [autoPlay, autoPlayDelay, changeSlideIndex]);

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
