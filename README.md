# Flashcard-App

A Flashcard App for studying Japanese Kanji in preparation for the JLPT.

## Wireframes
Various Views - Starter Wireframe
<br> 
<img src="https://res.cloudinary.com/teefmummy/image/upload/a_auto_right/v1527274540/20180525_145452.jpg" height="50%" width="50%" title="Starter Wireframes">
## User Stories
#### Landing Page
User can decide to login or sign up.
If Signing-up: A modal appears with a form to create a user profile. Upon Completion will lead to main site page.
If Logging-in: A modal appears with a form to login. Upon Completion, will lead to main site page.
#### Main Page
There should be a nav bar with a hamburger menu in the top right that will allow the user to navigate to their profile page.

The main content section of the page displays available decks for study. For the purpose of this app, the initial sort of the kanji will be based on the JLPT levels (N1, N2, etc.). There should be a button on each deck to start studying. This will also add the deck to the user's 'Favorite Decks' list. 

#### Deck Screen
Once the user has decided to start studying it will navigte them to the deck screen. Here there will be different study areas which highlight the different pieces of information related to Kanji that a student will have to study (English Translation, Onyomi/Kunyomi, etc.). There should also be a bar graph here indicating the users current learning status. Clicking on any section here will navigate the user to the study page. There will also be a leaderboard here for users to compare their study progress to other users. 

#### Study Page
Here is where the fun begins. A card will be front and center with the kanji emblazoned on the front. In the top right corner it will show the number of cards that need to be studied. Once the user clicks on the card it will flip over and show the details. Here the user can rate their performance on a scale of 0-3. 0 - Didn't get it, 1 - Kind of got it, 2 - memorized it. These ratings are meant to be used in determining how often that card will come up in further study sessions. Upon completion of the study session, the user will be routed back to the deck screen.

#### Profile Page
Here the user can see the status of their account, their favorited decks as well as their general study statistics.

## Database Schema 
#### Images of Database Schema Brainstorming
General Overview
<br>
<img src="https://res.cloudinary.com/teefmummy/image/upload/v1527272981/Project%204%20wireframes/20180525_142252.jpg" width="50%" height="50%" title="General Overview" >
<br> 
Users
<br>
<img src="https://res.cloudinary.com/teefmummy/image/upload/a_auto_right/v1527272973/Project%204%20wireframes/20180525_142303.jpg" height="50%" width="50%" title="Users">
<br>
Decks, Sets and Cards
<br>
<img src="https://res.cloudinary.com/teefmummy/image/upload/a_auto_right/v1527272964/Project%204%20wireframes/20180525_142309.jpg" height="50%" width="50%" title="Decks sets and cards">
## Tech
#### Core Stack and highlighted packages 
| Name | Use | Implemented? |
| -- | -- | -- |
| Rails | Backend Framework | Yes |
| PostgreSQL | Restful Database | Yes |
| React | Frontend Javascript Framework | Yes |
| Semiotic | React Library for creating D3 Visualization components | |
| Animate.css | CSS library for animations | |
| Devise | Ruby Gem for handling authorization in rails | |

#### 3rd Party APIs

| Name | Use |
| -- | -- |
| WaniKani | Provides Japanese Kanji Characters in JSON |

# Priority Matrix
