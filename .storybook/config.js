import { configure, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

function loadStories () {
  require('../example/stories')
}

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

configure(loadStories, module)
