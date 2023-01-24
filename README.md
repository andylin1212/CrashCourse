# CrashCourse

CrashCourse is an IOS mobile App powered by OpenAI API that summarizes Google and Wikipedia search results for one's easy viewing. Type in whatever general knowledge term you want to understand, and in a matter of few seconds, you can find the most important topics/questions that are digestible in 4 minutes or less about the topic on your app! <br />
The first iteration of this project was completed in 3 days including idea generation. Part of HackReactor Program “MVP” project.


## Tech Stack
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=for-the-badge)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)

## Demo
[Demo video](https://drive.google.com/file/d/1GTPfMXrv7DfOjzyidHdwtynR_R97xkqk/view?usp=sharing)


## Component Details
### Splash Screen + Search Page
Created animation for splash screen that renders the search bar for user input after static assets are loaded. Users can then search for any terms they would like a CrashCourse on. The app will redirect them to Summary Tab after key points and related words are loaded from API.

<img src="./demos/initialSearch_Summary-Aliens_MOV_AdobeExpress.gif" height=500 />

### Searched Results with Bottom Tab Navigation
#### Summary & Related Words
Users will see 5 key points about the searched term and 9 - 12 clickable related words. When clicked on any of the related words, app will conduct the same search via calls to API for content generation. User will be redirected to Summary screen for new search word once content is loaded.

<img src="./demos/RelatedWords-Aliens_AdobeExpress.gif" height=500 />

#### Details & Random Tab
Users can utilize the bottom navigation to check out a detailed description, including major milestones and accomplishments if applicable, and other random facts about the searched term. The content generation of these tabs is done in the background when the Summary page is rendered.


<img src="./demos/Details_RandomPage_AdobeExpress.gif" height=500 />

#### Story Tab
The story tab has an Open AI generated first person POV narrative for entertainment value. Animated a typewriter effect so the user has an experience of listening to a story. Users can stop the typing animation and view the whole story anytime by clicking on "finish typing". Users can navigate back to the search screen in any of the tabs for additional searches.

<img src="./demos/StoryTab_NewSearch_AdobeExpress.gif" height=500 />


## Installation & Use
1. Clone the repo
    ```
    git clone https://github.com/andylin1212/CrashCourse.git
    ```
2. Install all required packages in both client and server folders
    ```
    npm install
    ```
3. Create a .env file in the server folder
4. Create an Open AI API key and add that to the .env file with below format
    ```
    OPENAI_API_KEY = [your personal OpenAI API Key]
    ```
5. Compile the client-side code and start Metro Bundler
   ```
   npm start
   ```
6. Scan the QR code from Metro Bundler in Terminal
7. Start the server
   ```
   npm run server-dev
   ```
