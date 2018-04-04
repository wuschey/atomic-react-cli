const fs = require("fs-extra");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const path = require("path");
const _ = require("lodash");
const yamltoJSObject = require("./yamltojson");

const questions = require("./questions");
const { PATH, TEMPLATES, YAML_PATH, JSON_OUTPUT } = require("./config");

const log = console.log;
let config = {};

const setConfig = obj => {
  return {
    atomicType: obj.atomicType,
    componentType: obj.componentType,
    componentName: obj.componentName,
    outputFolder: PATH[obj.atomicType],
    updateDesignToken: obj.updateDesignToken
  };
};

const atomic = () => {
  let token = false;
  _.forOwn(process.argv, (key, val) => {
    if (key == "token") {
      yamltoJSObject(TEMPLATES.token, YAML_PATH, JSON_OUTPUT);
      token = true;
    }
  });

  if (!token) {
    figlet("Atomic React Components", (err, data) => {
      log(data);
      inquirer.prompt(questions).then(answers => {
        config = setConfig(answers);
        checkIfComponentExists();
      });
    });
  }
};

/* Check if Component already exists*/

const checkIfComponentExists = () => {
  const dir = config.outputFolder;
  const componentDir = dir + "/" + config.componentName;

  fs.pathExists(componentDir).then(exists => {
    if (!exists) {
      createComponent();
    } else {
      log(
        chalk.bgRed.white.bold(
          "Component already exists - Please use another component name"
        )
      );
    }
  });
};

const createComponent = () => {
  const dir = config.outputFolder;
  fs
    .ensureDir(dir)
    .then(() => {
      log(chalk.bgGreen.black.bold("Creating Component Files"));
      createProjectFiles();
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};
/* Write Component Files*/

const createProjectFiles = () => {
  writeComponentFile(".js", TEMPLATES.index);
  writeComponentFile(".js", TEMPLATES[config.componentType]);
  writeComponentFile(".stories.js", TEMPLATES.storybook);
  writeComponentFile(".test.js", TEMPLATES.snapshot);
};

const writeComponentFile = (fileType, templateName) => {
  let componentDir = config.outputFolder;
  let componentName = config.componentName;
  let filename = config.componentName;

  if (templateName == TEMPLATES.index) filename = "index";

  const outputFile =
    componentDir + "/" + componentName + "/" + filename + fileType;

  const componentTemplate = require(templateName);

  const templateString = componentTemplate(componentName);
 
   fs.outputFile(outputFile, templateString, err => {
    if (err) throw err;
    console.log(chalk.green.bold("File " + outputFile + " was created"));
  });
};

module.exports = {
  atomic,
  createComponent
};
