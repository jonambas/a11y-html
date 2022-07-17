import type { NextPage } from 'next';
import { Code } from '~components/Code';
import { styled } from '~stitches';

const toggle = `
<button
  type="button"
  [#role]role="switch"[]
  [#checked]aria-checked="true"[]
  >
    Toggle
</button>
`;

const toggleButton = `
<button
  type="button"
  [#ariapressed]aria-pressed="true"[]
  >
    Toggle
</button>
`;

const Title = styled('h1', {
  fontSize: '$400'
});

const Home: NextPage = () => {
  return (
    <div>
      <Title>Toggle</Title>
      <Code code={toggle}></Code>
      <Title>Toggle Button</Title>
      <Code code={toggleButton}></Code>
    </div>
  );
};

export default Home;
