import { mount } from 'cypress/react18';
import { removeCodeTags } from '../../components/Code';
import * as Dialog from '../../content/Dialog';
import * as Menu from '../../content/Menu';
import * as Popover from '../../content/Popover';
import * as Switch from '../../content/Switch';
import * as ToggleButton from '../../content/ToggleButton';
import * as Tooltip from '../../content/Tooltip';

type ContentComponent = {
  code: string;
  displayName: string;
};

// todo, probably a better way to do this
const contents = [Dialog, Menu, Popover, Switch, ToggleButton, Tooltip];

const accessibilityTest = (content: ContentComponent) => () => {
  const __html = removeCodeTags(content.code);

  mount(<div dangerouslySetInnerHTML={{ __html }}></div>);

  // note, You must run this after a call to cy.visit() and before you run the checkA11y command.
  cy.injectAxe();

  // note, The default operation is to run all rules except for rules with the "experimental" tag
  cy.checkA11y('[data-cy-root]');
};

describe('content', () => {
  for (const content of contents) {
    it(content.displayName, accessibilityTest(content));
  }
});
