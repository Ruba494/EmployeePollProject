# EmployeePollProject
This is the final assessment project for Udacity's React & Redux course. it's a Polls app that allows you to login, answer and create 'Would you rather' Questions.

## Install and start
- navigate to employee-poll-project folder `cd employee-poll-project`
- install all project dependencies with `npm install`
- start the development server with `npm start`

## files discription
```bash
└──employee-poll-project # project main folder
    ├── package.json # npm package manager file.
    ├── public
    │   ├── favicon.ico # React Icon
    │   └── index.html 
    │   └── userAvatar # all images used in this project
    └── src
        ├── tests # all tests in this project. 
        ├── actions # actions.
        ├── reducers # reducers.        
        ├── middelware # middelware.
        ├── Components # main components
        │   ├── App.js 
        │   ├── Home.js # new and answerd polls
        │   ├── LeadBoard.js # dashboard of all users and ther answerd and created polls
        │   ├── LogIn.js # login 
        │   ├── LogOut.js # logout
        │   ├── Nav.js # navigation
        │   ├── NewPoll.js # create new poll
        │   ├── Poll.js # poll
        │   ├── PollCard.js # poll card
        │   └── PollDetail.js #  poll details
        ├── utils # helpe and data
        ├── setupTests # testing
        ├── index.css # Global styles
        └── index.js # It is used for DOM rendering only.
```