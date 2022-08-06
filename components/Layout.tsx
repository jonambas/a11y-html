import { FC, PropsWithChildren } from 'react';
import { styled } from '~stitches';
import { Footer } from '~components/Footer';

const Main = styled('main', {
  maxWidth: '1100px',
  margin: '$12 auto',
  padding: '0 $4',
  '@md': {
    padding: '0 $8'
  }
});

export const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <>
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};
