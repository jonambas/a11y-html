import type { NextPage } from 'next';
import Head from 'next/head';

import { styled, css } from '~stitches';
import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';

const toggle = `
<button
  type="button"
  [#toggle-role]role="switch"[]
  [#toggle-checked]aria-checked="true"[]
>
  Toggle
</button>
`;

const toggleButton = `
<button
  type="button"
  [#togglebutton-pressed]aria-pressed="true"[]
>
  Toggle
</button>
`;

const menu = `
<button 
  type="button"
  [#menu-idtrigger]id="menu-trigger"[]
  [#menu-haspopup]aria-haspopup="true"[]
  [#menu-expanded]aria-expanded="true"[]
  [#menu-controls]aria-controls="menu-container"[]
  >
  Options
</button>
<div
  [#menu-idtrigger]aria-labelledby="menu-trigger"[]
  [#menu-controls]id="menu-container"[]
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
        <h1
          className={css({
            padding: '$12 0',
            margin: '$12 0',
            fontSize: '$900'
          })()}
        >
          A11y HTML
        </h1>
        <CodeContainer code={toggle} title="Toggle">
          <CodeSection title="role" linkTarget="#toggle-role">
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </CodeSection>
          <CodeSection title="aria-checked" linkTarget="#toggle-checked">
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </CodeSection>
        </CodeContainer>
        <CodeContainer code={toggleButton} title="Toggle Button">
          <CodeSection title="aria-pressed" linkTarget="#togglebutton-pressed">
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </CodeSection>
        </CodeContainer>
        <CodeContainer code={menu} title="Dropdown Menu">
          <CodeSection
            title="Linking the trigger with the menu"
            linkTarget="#menu-idtrigger"
          >
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </CodeSection>
          <CodeSection title="aria-haspopup" linkTarget="#menu-haspopup">
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </CodeSection>
          <CodeSection title="aria-expanded" linkTarget="#menu-expanded">
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </CodeSection>
          <CodeSection title="aria-controls" linkTarget="#menu-controls">
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </CodeSection>
        </CodeContainer>
      </div>
    </>
  );
};

export default Home;
