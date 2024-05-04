# News Reader 

## Abstract
This news application displays the top recent headlines in the United States. It shows you an image related to the news article, the headline, date and time published, and a description of the article. You can filter news articles by keywords in the headline. It also allows the user to click on a news article to get additional details, such as the content of the article. 

## Contributors 
[Erin Kelley](https://github.com/kelleyej)

## App Preview 
<img width="1314" alt="Screenshot 2024-05-03 at 5 03 08 PM" src="https://github.com/kelleyej/news-reader/assets/120286689/787747ba-4785-4d5b-882c-fb603fb2ccf2">
<img width="1272" alt="Screenshot 2024-05-03 at 5 03 44 PM" src="https://github.com/kelleyej/news-reader/assets/120286689/55be7f9c-294d-42f0-96f2-eb2ce563ecd1">
<img width="1233" alt="Screenshot 2024-05-03 at 5 04 15 PM" src="https://github.com/kelleyej/news-reader/assets/120286689/c9905679-1a12-49ae-98d9-cd8e981813f1">

## Installation Instructions 
### Frontend
1. Fork and clone this repo: https://github.com/kelleyej/news-reader
2. cd into news-reader in your terminal
3. Run `npm install` in your terminal to install all dependencies
4. Run `npm start` to start up the frontend
5. Run Cypress E2E testing: `npm run cypress`
6. Click E2E Testing
7. Click Start E2E Testing in Chrome

### Environment Variables
- Create a `.env` file in the root directory.
- Copy and paste REACT_APP_API_KEY=myApiKey in the .env file. 
- Replace `myApiKey` with your API key from [get news API key](https://newsapi.org/)
- Create a `cypress.env.json` file in the root directory.
- Copy and paste the following in the cypress.env.json file: `{
  "env": {
    "access_key": "myApiKey"
    } }`
- Replace `myApiKey` with your API key from above.
  
## Technologies Used 
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat) ![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat) ![Cypress Badge](https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff&style=flat) 

## Context 
This application was created to simulate a take-home challenge given an 8-hour time limit. 
