import { FC, PropsWithChildren, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { css } from '~stitches';
import { useCodeLinks } from '~context/codeLinks';

type CodeSectionProps = {
  linkTarget: string;
  title: string;
};

export const CodeSection: FC<PropsWithChildren<CodeSectionProps>> = (props) => {
  const { children, linkTarget, title } = props;
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: '0px 0px -70% 0px'
  });
  const { setActive } = useCodeLinks();

  useEffect(() => {
    setActive({ [linkTarget]: inView });
  }, [inView]);

  return (
    <div
      className={css({
        '&:not(:last-child)': {
          marginBottom: '$12',
          '@md': { marginBottom: '$16' }
        }
      })()}
    >
      <h3
        ref={ref}
        id={linkTarget.replace('#', '')}
        className={css({ fontSize: '$500', marginBottom: '$3' })()}
      >
        {title}
      </h3>
      {children}
    </div>
  );
};
