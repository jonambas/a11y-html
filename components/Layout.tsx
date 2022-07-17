import { FC, PropsWithChildren } from 'react';
import { styled } from '~stitches';

const Main = styled('main', {
  maxWidth: '1000px',
  margin: '$12 auto',
  padding: '0 $3'
});

export const Layout: FC<PropsWithChildren> = (props) => {
  return <Main>{props.children}</Main>;
};
