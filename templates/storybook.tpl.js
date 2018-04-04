module.exports = componentName => {
return `import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

import ${componentName} from './${componentName}';


storiesOf('${componentName}', module).add(
  'default',
  withInfo('${componentName} INFO')(
    withNotes('NOTES FOR ${componentName}')(context => <${componentName}/>)
  )
);
`  
}

