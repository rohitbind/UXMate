# UX Mate

UX Mate is a Figma plugin that helps designers enhance their capabilities by using powerful AI. With the help of ChatGPT, UX Mate offers suggestions and recommendations to designers as they work, helping them create more intuitive and user-friendly designs.

## Installation

To install UX Mate, run the following command in your terminal:


## Build

To build UX Mate, run the following command in your terminal:

npm install ux-mate


## Build

To build UX Mate, run the following command in your terminal:

npm run build


## Watch

To watch for changes in the code and automatically build UX Mate, run the following command in your terminal:

npm run build -- --watch


## Contributing

We welcome contributions from the community. If you find any bugs or have suggestions for improving the plugin, please open an issue or submit a pull request.

Thank you for your interest in UX Mate!


Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/plugin-quickstart/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "npm: watch". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
