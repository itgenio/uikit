const CAROUSEL_SWIPE_THRESHOLD_VALUE = 5;

export const canSwipeByEvents = <T extends { clientX: number }>(startEvent: T, endEvent: T): boolean => {
  const moveValue = startEvent.clientX - endEvent.clientX;

  return Math.abs(moveValue) > CAROUSEL_SWIPE_THRESHOLD_VALUE;
};
