import { FC, PropsWithChildren, useEffect } from 'react';

import { css } from '~stitches';
import { useInView } from '~components/useInView';
import { useCodeLinks } from '~context/codeLinks';

type CodeSectionProps = {
  linkTarget: string;
  title: string;
};

export const CodeSection: FC<PropsWithChildren<CodeSectionProps>> = (props) => {
  const { children, linkTarget, title } = props;
  // Only highlights in the top 40% of the screen
  const { ref, inView } = useInView({ top: 0.4 });
  const { setActive } = useCodeLinks();

  useEffect(() => {
    setActive({ [linkTarget]: !!inView });
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
