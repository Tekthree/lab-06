## Authors
Tek Jones


## User Acceptance Tests
Time Estimate
For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
Add this information to your README.

## Overview
In labs 6 through 9, you will be building a stand-alone back end which will interact with a static front end. You will request data from a total of six third-party APIs, modify the data as needed, and send the data to the client to be displayed in the browser. In labs 8 and 9, you will be persisting data in a SQL database.

Every day you will have a new partner. You and your new partner(s) will spend the first 45 minutes reviewing each other’s code from the previous day and planning out the days work on the whiteboard.

Draw the web request response cycle for the task at hand (about 15 minutes).
Document the data flow: identify inputs and outputs for each part of the cycle.
Outline the functions that support this data flow.
Do a formal code review of each person’s code (15 minutes each).
Open your partner’s GitHub Pull Request on your laptop.
Identify an area in the code that:
you don’t understand
or seams overly complex
or you see a way to improve
or you want more information on
or you really like or think is interesting
Add kind comments or questions inline using the GitHub review feature.
You will then work independently for the rest of the day, implementing your plan, coding in your own repository, submitting your own pull request.

You will have access to view the code base for the client, but will not be able to modify it in any way.

For this lab assignment, you will convert a location entered by the user into a latitude and longitude, then use those values to request weather information for that location. As your City Explorer back end progresses in labs 6 through 9, you will use the latitude and longitude to request information from other APIs from the same search query.

## Workflow
We will be using the Trello project management tool for the duration of this project.
To maximize your experience with Trello, you should create a free Trello account by clicking on the Sign Up button.
After creating an account, go to the City Explorer Trello Board, open the “… Show Menu” link, click the “… More” link, and then click “Copy Board”. Before you create it, be sure to “Change” from Private to “Public” (and click “Yes, Make Board Public”) so your instructional team can see your work. Now, click “Create” to add a copy to your personal account.
This Trello board contains all of the features required to complete this lab assignment.
In the Show Menu tab, click the “Search Cards” link and filter by lab to see the assignment for just the current day
Review the user stories and analyze the feature requests and requirements in the lab.
Within each story, note the acceptance criteria (“Given … When … Then…”) and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.
During the day, check off tasks as you complete them, and move the story cards through the workflow.
Repository set-up
You should create a new repository on GitHub called city_explorer_api.
From this point on, work on semantically-named non-master branches. Once your app is functioning correctly on your branch, make a PR to master and confirm functionality on your deployed site. Your deployed site should not contain any broken functionality.
Heroku deployment
Create an instance on Heroku. Refer to lecture 5 for a reminder of the steps, if needed.
In the Deploy tab, connect your instance to your repository and enable automatic deploys from your master branch. Deploy your application and make sure there are no errors.
Feature Tasks
See the Trello board for your feature tasks for today’s lab.

Documentation
Your README.md must include:

# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
Submission Instructions
Complete your Feature Tasks for the lab
Create a PR back to the master branch of your repository, and merge it cleanly.
On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
A link to the deployed version of your latest code.
A link to your public Trello board.
A question within the context of today’s lab assignment
An observation about the lab assignment, or related ‘Ah-hah!’ moment
How long you spent working on this assignment