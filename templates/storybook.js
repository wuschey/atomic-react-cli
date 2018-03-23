import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

import COMPONENTNAME from './COMPONENTNAME';


storiesOf('COMPONENTNAME', module).add(
  'default',
  withInfo('COMPONENTNAME INFO')(
    withNotes('NOTES FOR COMPONENTNAME')(context => <COMPONENTNAME/>)
  )
);
