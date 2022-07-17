import type { NextPage } from 'next';
import { Code } from '~components/Code';
import { CodeSection } from '~components/CodeSection';
import { styled } from '~stitches';
import Head from 'next/head';

const toggle = `
<button type="button"
  [#role]role="switch"[]
  [#checked]aria-checked="true"[]
>
  Toggle
</button>
`;

const toggleButton = `
<button type="button" [#ariapressed]aria-pressed="true"[]>
  Toggle
</button>
`;

const menu = `
<button 
  type="button"
  [#id]id="menu-trigger"[]
  [#id]aria-haspopup="true"[]
  [#id]aria-expanded="true"[]
  [#id]aria-controls="menu-container"[]
  >
  Options
</button>
<div
  [#id]aria-labelledby="menu-trigger"[]
  [#id]id="menu-container"[]
  [#id]role="menu"[]
  [#id]tabindex="0"[]
  >
  <button [#id]role="menuitem"[] [#id]tabindex="-1"[]>
    Edit
  </button>
  <button role="menuitem" tabindex="-1" >
    Duplicate
  </button>
  <button role="menuitem" tabindex="-1" >
    Archive
  </button>
</div>
`;

const Title = styled('h1', {
  fontSize: '$400'
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>A11Y HTML</title>
      </Head>
      <div>
        <CodeSection code={toggle} title="Toggle" />
        <CodeSection code={toggleButton} title="Toggle Button" />
        <CodeSection code={menu} title="Dropdown Menu" />
      </div>
    </>
  );
};

export default Home;
