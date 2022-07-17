import { FC } from 'react';

import { CodeContainer } from '~components/CodeContainer';
import { CodeSection } from '~components/CodeSection';
import { InlineCode } from '~components/InlineCode';
import { InlineLink } from '~components/InlineLink';

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

export const Menu: FC = () => {
  return (
    <CodeContainer code={menu} title="Dropdown Menu">
      <CodeSection title="aria-labelledby" linkTarget="#menu-idtrigger">
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
  );
};
