module.exports = componentName => {
return `//@flow
import React from 'react';

const ${componentName}= () => (
    <div>
        <h1>${componentName}</h1>
    </div>
);

export default ${componentName};
`;
};
