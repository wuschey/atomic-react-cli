module.exports = componentName => {
return `//@flow

import React from "react";

class ${componentName} extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>${componentName}</h1>
      </div>
    );
  }
}
export default ${componentName};
`
}

