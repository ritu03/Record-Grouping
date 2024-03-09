# About Project 
This React project is structured to efficiently manage components responsible for displaying records parsed from a CSV file. Below is an overview of the project structure and key components:

Project Structure:

project-root
│   README.md
│
└───src
    │
    └───components
        │
        └───app
        │   │   App.js
        │   │
        │   └───components
        │       │   index.js
        │       │
        │       └───Records
        │       │   │   Record.js
        │       │   │
        │       │   └───components
        │       │       │   AccordionBtn.js
        │       │   
        │       └───AccordionBtn
        │           │   AccordionBtn.js

Components:

App Component:
The App component serves as the parent element of the application.
It organizes child components responsible for displaying and managing records.

Record Component:
The Record component resides within the Records folder.
It is responsible for parsing the CSV file using Papa Parser.
The component manages the state of records and groups them by suburbs and Offence Level 2 Description.

AccordionBtn Component:
The AccordionBtn component is located within the AccordionBtn folder.
It serves as a child component of the Record component.
This component utilizes React Bootstrap's Accordion and Navbar components to display records grouped by suburbs and Offence Level 2 Description.

Usage
To run the project locally:

Clone the repository.
Navigate to the project directory.
Install dependencies with npm install.
Start the development server with npm start. For more details follow below documentation.

Additional Information
Ensure that you have Node.js and npm installed on your system to run the project.
This project utilizes React and React Bootstrap for building user interfaces efficiently.
Papa Parser is used for parsing CSV files within the Record component.
Follow the component structure and guidelines for extending or modifying the project.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
