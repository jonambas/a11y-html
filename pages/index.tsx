import type { NextPage } from 'next';
import Head from 'next/head';

import { css } from '~stitches';
import { Switch } from '~content/Switch';
import { ToggleButton } from '~content/ToggleButton';
import { Menu } from '~content/Menu';
import { Dialog } from '~content/Dialog';
import { Popover } from '~content/Popover';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>A11Y HTML</title>
      </Head>
      <div>
        <h1
          className={css({
            padding: '$12 0',
            margin: '$12 0',
            fontSize: '$900'
          })()}
        >
          A11y HTML
        </h1>
        <Switch />
        <ToggleButton />
        <Dialog />
        <Popover />
        <Menu />
      </div>
    </>
  );
};

export default Home;
