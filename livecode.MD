# Live Coding for the AWS Amplify document manager  MVP

### Getting Set Up 

THe thing we need to do is to make sure we have the proper configuration to deploy React.js apps in our IDE

#### Getting npm and react installed

```bash
npm install -g @aws-amplify/cli
```

#### Getting the AWS AMplify CLI installed

### Creating the Application and the AWS Amplify configuration

#### Starting a new react app

We can either create an empty project as follows:

```bash
cd ~/environment/
npx create-react-app documentmanager && cd documentmanager && npm install
```

OR we can pull down the latest code from github if we want the final project

```bash
cd ~/environment/
git clone https://github.com/MiltyBrizan/documentmanager.git && cd documentmanager
```

#### Initialize AWS Amplify

```bash
amplify init
```

And use all of the defaults.

#### Add in an Amplify API

```bash
amplify add api
[output] ? Please select from one of the below mentioned services: GraphQL
[output] ? Provide API name: documentmanager
[output] ? Choose the default authorization type for the API Amazon Cognito User Pool
[output] Using service: Cognito, provided by: awscloudformation
````
