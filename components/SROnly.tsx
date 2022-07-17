import { FC, PropsWithChildren } from 'react';
import { styled } from '~stitches';

const StyledSROnly = styled('span', {
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
});

export const SROnly: FC<PropsWithChildren> = (props) => {
  return <StyledSROnly {...props} />;
};
