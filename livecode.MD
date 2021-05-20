# Live Coding for the AWS Amplify document manager  MVP

### Getting Set Up 

THe thing we need to do is to make sure we have the proper configuration to deploy React.js apps in our IDE

#### Getting npm and react installed

```bash
$ npm install -g @aws-amplify/cli
```

#### Getting the AWS AMplify CLI installed

### Creating the Application and the AWS Amplify configuration

#### Starting a new react app

We can either create an empty project as follows:

```bash
$ cd ~/environment/
$ npx create-react-app documentmanager && cd documentmanager && npm install
```

OR we can pull down the latest code from github if we want the final project

```bash
$ cd ~/environment/
$ git clone https://github.com/MiltyBrizan/documentmanager.git && cd documentmanager
```

#### Initialize AWS Amplify

```bash
$ amplify init
```

And use all of the defaults.

## Adding amplify features

### Authentication

The first thing we need to add to our applicaiton is authenitication. 

```bash
$ amplify add auth
```

Make sure to select cognito as your source and use all of the defaults (we can change this later if needed). Then, we can push our changes over using:

```bash
$ amplify push
```

We can have a look at the *aws-exports.js* in the root folder to see a list of resource that are available to us.

Lets start out by makingf sure we're importing the libraries we need in App.js

```JavaScript
import React from "react";
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import  Auth , { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
```

Let's tell Amplify which configuration we want to use:

```JavaScript
Amplify.configure(awsconfig);
```

Next, we can remove everything inside of the header in the function App() {} of App.js. The function should look like this:

```JavaScript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>Documents</h2>
      </header>
    </div>
  );
}
```

Finally, lets enclose the app with authentication by replacing the default export:

```JavaScript
export default withAuthenticator(App, false);
```

In the shell, we need ot make sure we've imported all of the modules we need:

```bash
npm install --save aws-amplify @aws-amplify/ui-react
```

Now lets start the application and see if we have :

```bash
$ npm start
```
