const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');

function init() {
    inquirer
        .prompt([
            {}
        ])
}