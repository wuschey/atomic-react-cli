const fs = require("fs-extra");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const path= require("path");

const questions = require ("./questions");
const { PATH, TEMPLATES } = require("./config");

const log = console.log;
let config = {};

const setConfig = obj => {
  return {
    atomicType: obj.atomicType,
    componentType: obj.componentType,
    componentName: obj.componentName,
    outputFolder: PATH[obj.atomicType]
  };
};

const atomic = () => {
  figlet("Atomic React Components", (err, data) => {
    log(data);
 console.log('questions' + questions);
    inquirer.prompt(questions).then(answers => {
      console.log('questions' + questions);
      config = setConfig(answers);

      console.log(config);

      checkIfComponentExists();
    });
  });
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
    });
};
/* Write Component Files*/

const createProjectFiles = () => {
  writeComponentFile(".js", TEMPLATES.index);
  writeComponentFile(".js", TEMPLATES[config.componentType]);
  writeComponentFile(".stories.js", TEMPLATES.storybook);
  writeComponentFile(".test.js", TEMPLATES.snapshot);
};

const writeComponentFile = (fileType, componentTemplate) => {
  let componentDir = config.outputFolder;
  let componentName = config.componentName;
  let filename = config.componentName;

  if (componentTemplate == TEMPLATES.index) filename = "index";

  const outputFile =
    componentDir + "/" + componentName + "/" + filename + fileType;

  fs.readFile(componentTemplate, "utf8", (err, data) => {
    const result = data.replace(/COMPONENTNAME/g, componentName);
    fs.outputFile(outputFile, result, "utf8", err => {});
  });
};

module.exports =  {atomic};
