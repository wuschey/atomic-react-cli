module.exports = componentName => {
return `import React from 'react';
import renderer from 'react-test-renderer';

import COMPONENTNAME from './COMPONENTNAME';

describe('Renders COMPONENTNAME', () => {
  it('default', () => {
    const tree = renderer.create(<COMPONENTNAME />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
`;
};
