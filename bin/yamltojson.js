yaml = require('js-yaml');
fs = require('fs');
_ = require('lodash');
const chalk = require("chalk");

const yamltoJSObject = (templateFile, inputFile, outputFile) => {
    try {
        var obj = yaml.safeLoad(fs.readFileSync(inputFile, 'utf8'));

        fs.readFile(templateFile, "utf8", (err, data) => {
            const result = data.replace(/PALETTE_OBJ/g,  JSON.stringify(obj, null, 2));
            fs.writeFileSync(outputFile, result);
             console.log(chalk.green.bold('Design Token Doc was updated'))
        });

        
    } catch (e) {
        console.log(e);
    }
}

module.exports = yamltoJSObject;
// yamltojson('/data/example.yml');