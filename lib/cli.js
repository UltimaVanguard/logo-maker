const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createLogo }= require ('./createLogo'); 

class CLI {
    constructor() {
        this.shape = '';
        this.shapeColor = '';
        this.text = '';
        this.textColor = '';
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'what shape do you want your logo to be?',
                    choices: ['circle', 'square', 'triangle'],
                    name: 'logoShape',
                },
                {
                    type: 'input',
                    message: 'What color do you want the logo to be?',
                    name: 'logoColor',
                },
                {
                    type: 'input',
                    message: 'What text do you want to have on your logo? (3 letters only)',
                    name: 'logoText',
                },
                {
                    type: 'input',
                    message: 'What color do you want the text to be?',
                    name: 'logoTextColor',
                },
            ])
            .then(({ logoShape, logoColor, logoText, logoTextColor }) => {
                if (logoText.length > 3) {
                    console.log('Too many characters for the text!');
                    this.run();
                }
                this.shape = logoShape;
                this.shapeColor = logoColor.toLowerCase();
                this.text = logoText.toUpperCase();
                this.textColor = logoTextColor.toLowerCase();
            })
            .then(() => {
                return writeFile(
                    join(__dirname, '..', 'examples', `logo.svg`),
                    createLogo(this.shape, this.shapeColor, this.text, this.textColor),
                );
            })
            .then(() => console.log('Generated logo.svg!'))
            .catch((err) => {
                console.log(err);
                console.log('There was an error! Please try again.')
            });
    }
};

module.exports = CLI;