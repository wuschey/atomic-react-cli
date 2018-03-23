
const APP_ROOT = require('app-root-path');
const TEMPLATE_FOLDER = APP_ROOT + "/templates";
const pJson = require(APP_ROOT + '/package.json');

let componentsDir = pJson['atomic-react-cli'].componentsDir;


const PATH = {
  atom: componentsDir + "/atoms",
  molecule: componentsDir + "/molecules",
  organism: componentsDir + "/organisms",
  template: componentsDir + "/templates",
  page: componentsDir + "/pages"
};
const TEMPLATES = {
  stateless: TEMPLATE_FOLDER + "/stateless.js",
  stateful: TEMPLATE_FOLDER + "/stateful.js",
  snapshot: TEMPLATE_FOLDER + "/snapshot.js",
  storybook: TEMPLATE_FOLDER + "/storybook.js",
  index: TEMPLATE_FOLDER + "/index.js"
};

module.exports = {
  PATH,
  TEMPLATES
}
