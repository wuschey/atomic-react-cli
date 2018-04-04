
const APP_ROOT = require('app-root-path');
const TEMPLATE_FOLDER = APP_ROOT + "/templates";
const pJson = require(APP_ROOT + '/package.json');

let componentsDir = pJson['atomic-react-cli'].componentsDir;

const YAML_PATH = APP_ROOT +'/data/example.yml';
const JSON_OUTPUT = APP_ROOT +  '/' + componentsDir +  '/example.js';

const PATH = {
  atom: componentsDir + "/atoms",
  molecule: componentsDir + "/molecules",
  organism: componentsDir + "/organisms",
  template: componentsDir + "/templates",
  page: componentsDir + "/pages"
};
const TEMPLATES = {
  stateless: TEMPLATE_FOLDER + "/stateless.tpl.js",
  stateful: TEMPLATE_FOLDER + "/stateful.tpl.js",
  snapshot: TEMPLATE_FOLDER + "/snapshot.tpl.js",
  storybook: TEMPLATE_FOLDER + "/storybook.tpl.js",
  index: TEMPLATE_FOLDER + "/index.tpl.js",
  token: TEMPLATE_FOLDER + "/token.tpl.js"
};

module.exports = {
  PATH,
  TEMPLATES,
  YAML_PATH,
  JSON_OUTPUT
}
