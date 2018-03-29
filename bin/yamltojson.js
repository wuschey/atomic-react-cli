yaml = require('js-yaml');
fs = require('fs');
_ = require('lodash');
const chalk = require("chalk");

const yamltoJSObject = (templateFile, inputFile, outputFile) => {
    try {

        var obj = yaml.safeLoad(fs.readFileSync(inputFile, 'utf8'));

        const tokenTemplate = require(templateFile);
        const jsObj = JSON.stringify(obj, null, 2);
        
        const templateString = tokenTemplate(jsObj);
        fs.writeFile(outputFile, templateString, (err) => {
            if(err) throw error;
            console.log(chalk.green.bold('Design Token Doc was updated'))
        });       
    } catch (e) {
        console.log(e);
    }
}

module.exports = yamltoJSObject;