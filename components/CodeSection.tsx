import { FC, ReactNode, PropsWithChildren, useEffect } from 'react';
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
    rootMargin: '-5% 0px -60% 0px'
    // delay: 20
  });
  const { setActive } = useCodeLinks();

  useEffect(() => {
    setActive({ [linkTarget]: inView });
  }, [inView]);

  return (
    <>
      <div>
        <h3
          ref={ref}
          id={linkTarget.replace('#', '')}
          className={css({ fontSize: '$500', marginBottom: '$3' })()}
        >
          {title}
        </h3>
        {children}
      </div>
      {/* Spacer here so intersection observer doesnt count whitesace */}
      <div className={css({ marginTop: '$16' })()} />
    </>
  );
};
