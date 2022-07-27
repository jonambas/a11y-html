import { MutableRefObject, useEffect, useRef, useState } from 'react';

/**
 * This is a custom `inView` detector
 * react-intersection-observer was behaving weird on scroll
 * and sometimes didn't update properly
 */

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

const useWindowEvent = <T extends keyof WindowEventMap>(
  event: T,
  callback: (e: WindowEventMap[T]) => void
): void => {
  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener(event, callback);
    }
    return () => {
      if (isBrowser()) {
        window.removeEventListener(event, callback);
      }
    };
  }, [event, callback]);
};

type Mod = {
  top?: number;
};

type UseInView = (modifiers?: Mod) => {
  ref: MutableRefObject<any>;
  inView: boolean;
};

export const useInView: UseInView = (mod) => {
  const ref = useRef<HTMLElement>();
  const [inView, setInView] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [rect, setRect] = useState<DOMRect>();

  useWindowEvent('scroll', () => {
    if (isBrowser()) {
      setScroll(window.scrollY);
    }
  });

  useEffect(() => {
    if (isBrowser()) {
      setRect(ref.current?.getBoundingClientRect());
    }
  }, [ref.current]);

  useEffect(() => {
    const { innerHeight } = window;
    const top = rect?.top ?? 0;
    const height = rect?.height ?? 0;
    const modTop = mod?.top ?? 1;

    if (top) {
      if (scroll >= top - innerHeight * modTop) {
        setInView(true);
      }

      if (scroll > top + height || scroll < top - innerHeight * modTop) {
        setInView(false);
      }
    }
  }, [scroll]);

  return { ref, inView };
};
