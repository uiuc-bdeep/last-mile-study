# Uber-Chicago-Project
This repository contains detailed instructions to construct/maintain the Uber Chicago Project in BDEEP Research Group in the University of Illinois at Urbana-Champaign.

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [webpages](#webpages)
  * [backend](#backend)
* [Usage](#usage)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


## About the Project
### Built With
* HTML/CSS
* [JQuery](https://jquery.com)
* PostgreSQL
* [Qualtrics](http://qualtrics.com/)
* cPanel

## Getting Started
You can visit our [workflow](https://docs.google.com/drawings/d/1Tsuhct30XxY0tg1aSeO2Homn7Ewu-qmtjE1lkYknGt4/edit) to learn about the architecture of the Last Mile Study.
### Webpages
(Note: *path* refers to the file path in cPanel File Manager; *description* describes the purpose of this webpage)

- [Welcome page](https://transitstudy.web.illinois.edu/index.html)
	- Path: www/index.html
	- Description: This is the first page of the website, containing introductory information.

- [Set up page](https://transitstudy.web.illinois.edu/setup.html)
	- Path: www/setup.html
	- Description: This page gives an overview of the functionality of Google Maps Timeline and differentiates iOS from Android users.

- [IOS set up page](https://transitstudy.web.illinois.edu/setup-ios.html)
	- Path: www/setup-ios.html
	- Description: This page provides detailed instructions on how to turn on the location history feature for iOS users.

- [Android set up page](https://transitstudy.web.illinois.edu/setup-android.html)
	- Path: www/setup-android.html
	- Description: This page provides detailed instructions on how to turn on the location history feature for Android users.

- [Registration survey page](https://transitstudy.web.illinois.edu/survey.html)
	- Path: www/survey.html
	- Description: This page prompts the users to complete the registration survey by clicking on the button.

- [Next step](https://transitstudy.web.illinois.edu/next/index.html)
	- Path: www/next/index.html
	- Description: This page asks the users to go to Google Maps and log into their Google Account.

- [Timeline upload instruction - substep a](https://transitstudy.web.illinois.edu/next/upload_a.html)
	- Path: www/next/upload_a.html
	- Description: This page copies the script to user's clipboard for use later.

- [Timeline upload instruction - substep b](https://transitstudy.web.illinois.edu/next/upload_b.html)
	- Path: www/next/upload_b.html
	- Description: This page provides the users with instructions on how to open the developer console.

- [Timeline upload instruction - substep c](https://transitstudy.web.illinois.edu/next/upload_c.html)
	- Path: www/next/upload_c.html
	- Description: This page asks the user to paste the script copied earlier to the developer console and upload the timeline information.

- [Timeline upload instruction - substep d](https://transitstudy.web.illinois.edu/next/upload_d.html)
	- Path: www/next/upload_d.html
	- Description: This page informs the user signs to look for when their upload finishes.

- [Timeline upload instruction - substep e](https://transitstudy.web.illinois.edu/next/upload_e.html)
	- Path: www/next/upload_e.html
	- Description: This page informs the user that they will receive further instructions in an email a month later.

- [Support page](https://transitstudy.web.illinois.edu/next/support.html)
	- Path: www/next/support.html	
	- Description: This page provides the users with instructions on how to resolve errors they might run into while uploading timeline information

### Backend
- Collected location files
	- Path: python/collected_files/
	- Description: This folder contains user uploaded timeline information, with name of each file name in the format “yyyy-mm-dd hh:mm:ss.ssssss”, for example, “2020-08-07 09:55:13.815604”

## Usage
### cPanel
Both the front-end and back-end are hosted on [cPanel](https://web.illinois.edu:2083/openid_connect_callback/illinois_azure?openid_user_selection=transitstudy). Please log in with your illinois account.
#### Manage cPanel Access
You can manage whose email address can access cPanel here.

#### File Manager
All website related files are stored here. The code for front-end website is under www/.

#### PostgreSQL Databases
We have set up our database here to store uber-chicago data.

### Slack Integration
To ensure participants in the study receive support in a timely manner, we have set up the [FAQ form](https://transitstudy.web.illinois.edu/next/faq.html) as an integration to the Slack channel. 
The steps are as follows:

1. Create a Slack App and an incoming webhook with the instructions on [this page](https://api.slack.com/messaging/webhooks).
2. Set up the HTML form to collect participant responses.
3. Write the Ajax script to POST message to the specified Slack channel in the desired format once the "submit" button is clicked on the form.

### Qualtrics
#### Follow-up Survey
We have enabled follow-up survey with the help of Qualtrics' [XM Directory Task](https://www.qualtrics.com/support/survey-platform/actions-module/xm-directory-task/) feature. This allows us to invite participants for upcoming survey a specific time after their initial submission. We also set up the Contact List with their email and names as we collect responses from the participants.

#### Reminder Survey
We also set up the reminder survey using the [XM Directory Task](https://www.qualtrics.com/support/survey-platform/actions-module/xm-directory-task/), under the same action we send follow-up survey.

## Contact
To learn more about us: [BDEEP Research Group in the University of Illinois at Urbana-Champaign](https://www.uiuc-bdeep.org/)


