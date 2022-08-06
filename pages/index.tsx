import type { NextPage } from 'next';
import Head from 'next/head';

import { css } from '~stitches';
import { Toc } from '~components/Toc';
import { Switch } from '~content/Switch';
import { ToggleButton } from '~content/ToggleButton';
import { Menu } from '~content/Menu';
import { Dialog } from '~content/Dialog';
import { Popover } from '~content/Popover';
import { Tooltip } from '~content/Tooltip';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>A11Y HTML</title>
        <meta
          name="description"
          content="A collection of accessible HTML for common UI components, such as tooltips, dialogs, dropdowns, or popovers."
        />
      </Head>
      <div>
        <div
          className={css({
            margin: '$12 0',
            padding: '0 0 $12 0',
            borderBottom: '1px solid $gray100',
            '@md': {
              margin: '$20 0 $24 0',
              padding: '0 0 $24 0'
            }
          })()}
        >
          <h1
            className={css({
              fontSize: '$900'
            })()}
          >
            A11Y HTML
          </h1>
          <p>A collection of accessible markup for common UI components.</p>
          <Toc />
        </div>

        <Dialog />
        <Menu />
        <Popover />
        <Switch />
        <ToggleButton />
        <Tooltip />
      </div>
    </>
  );
};

export default Home;
