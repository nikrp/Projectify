#!/usr/bin/env node

const { program } = require('commander');
const { prompt } = require('enquirer');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { exec } = require('child_process');

// Define the templates directory
const templatesDir = path.join(__dirname, 'templates');

// Command to create a new web app
program
  .command('create-app')
  .description('Create a new JavaScript web app')
  .action(async () => {
    // Prompt user for project name
    const { name } = await prompt({
      type: 'input',
      name: 'name',
      message: 'Enter a name for your project:'
    });

    // Prompt user for framework choice
    const { framework } = await prompt({
      type: 'select',
      name: 'framework',
      message: 'Choose a framework:',
      choices: ['React', 'Vue.js', 'Angular']
    });

    // Read the template file based on the chosen framework
    const templateFile = path.join(templatesDir, `${framework.toLowerCase()}-app.hbs`);
    const templateContent = fs.readFileSync(templateFile, 'utf8');

    // Compile the Handlebars template
    const template = Handlebars.compile(templateContent);

    // Define data for the template
    const data = { name };

    // Generate the project files by applying the template
    const generatedFiles = template(data);

    // Write the generated files to disk
    const outputDir = path.join(process.cwd(), name);
    fs.mkdirSync(outputDir);
    fs.writeFileSync(path.join(outputDir, 'index.html'), generatedFiles);

    console.log('Project created successfully!');
  });

// Parse command-line arguments
program.parse(process.argv);
