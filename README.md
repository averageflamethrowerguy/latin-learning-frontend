# Latin Learning
A learning platform written in Typescript using React, Redux Toolkit, and React Router.

## Installation:
Thus far, this platform is only available locally. To run it, do the following:
1. Install NPM and Node.js locally. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm (LMK if you find better directions, these are a little confusing, but it links to installers for both MacOS and Windows)
2. Clone this github in a working folder of your choice
3. Run the following in the cloned folder
```
npm -i
npm run dev
```
4. This should run the application in a browser on a localhost (usually localhost:3000). The window will open automatically once the app compiles.

## Usage:
The application currently ranks your knowledge of a word based on the following levels:
1. (Multiple Choice) No prior knowledge. The app shows you an English word and asks you to select the corresponding Latin word.
2. (Multiple Choice) The app shows you a Latin word and asks you to select the corresponding English word.
3. (Free Response) The app shows you the present or nominative form of the word, and asks for the perfect or accusitive form.
4-6. (Free Response) The app shows you the English version and asks for the present or nominative form of the word.

When you get to Level 6, the application assumes you know the word. If you fail the word at Level 5, you go back down to Level 4.
