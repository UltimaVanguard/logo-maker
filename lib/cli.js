const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createShape }= require ('./shapes'); 

class CLI {
    constructor() {
        this.shape = '';
        this.shapeColor = '';
        this.text = '';
        this.textColor = '';
    }
    run() {
        return inquirer
            .createPromptModule([
                {
                    type: 'input',
                    message: 'What do you want your logo to be called?',
                    name: 'logoName',
                },
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
                    message: 'What text do you want to have on your logo?',
                    name: 'logoText',
                },
                {
                    type: 'input',
                    message: 'What color do you want the text to be?',
                    name: 'logoTextColor',
                },
            ])
            .then(({ logoShape, logoColor, logoText, logoTextColor }) => {
                this.shape = logoShape;
                this.shapeColor = logoColor;
                this.text = logoText;
                this.textColor = logoTextColor;
            })
            .then(({ logoName }) => {
                return writeFile(
                    join(__dirname, '..', 'examples', `${logoName}.html`),
                    createShape(this.shape, this.shapeColor, this.text, this.textColor),
                );
            })
            .then(() => console.log('Logo created!'))
            .catch((err) => {
                console.log(err);
                console.log('There was an error! Please try again.')
            });
    }
};

module.exports = CLI;