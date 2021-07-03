# Week 3 Assignment: Life Tracker

Submitted by: **Marisleysis De La Cruz**

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [X] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
- [X] If the user is logged in, it should display a **Sign Out** button. 
- [X] If no user is logged in, it should display **Login** and **Register** buttons
- [X] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [X] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [X] **Login Page:** A form that allows users to login with email and password.
- [X] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [X] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [ ] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [X] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [X] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [X] The detailed activity page should display a feed of all previous tracked activities.
- [X] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [] The activity tracked should be given a unique id for easy lookup.
  * [Table Schema](./tracker_api/life-tracker-schema.sql) 



### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

<iframe src="https://giphy.com/embed/FYNxUTWbNsFwclJs4J" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/FYNxUTWbNsFwclJs4J">via GIPHY</a></p>

<iframe src="https://giphy.com/embed/OVzXhOKIxjJNlwA3s9" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/OVzXhOKIxjJNlwA3s9">via GIPHY</a></p>

<iframe src="https://giphy.com/embed/FvB16e0A4HJGFnu1wx" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/FvB16e0A4HJGFnu1wx">via GIPHY</a></p>

<iframe src="https://giphy.com/embed/MdBKszQznGo3jxtM4J" width="480" height="212" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/MdBKszQznGo3jxtM4J">via GIPHY</a></p>



### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, all of the labs helped especially the student store pt 2 because it worked with hooks and contexts.


* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would've added more activities.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Overall, my website has most of the required features. I wasn't able to get the unique id for each exercise so I would work on this for next time. Also, I would've liked to deploy the website. 

### Open-source libraries used

- Add any links to open-source libraries used in your project.


### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I would like to give a shout out to Matt and Samara for helping me ! 