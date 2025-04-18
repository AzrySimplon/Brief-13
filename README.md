# Brief13 - Memory Game

## Description

Brief Memory Game is a classic "concentration" or "matching" card game where you need to find pairs of matching cards.
Test your memory and concentration with this simple yet addictive browser-based game!

## How to Play

1. **Start the Game**
   - Open a web server for the project (ex: with vite)
   - Open `index.html` in your web browser
   - Click on the difficulty level you want to play 

2. **Game Rules**
   - Cards are placed face down on the board
   - Click on any card to flip it and reveal its image
   - Click on a second card to try to find its matching pair
   - If the two cards match, they'll be removed from the board
   - If they don't match, they'll flip back over
   - Remember the positions of the cards to find matches more efficiently
   - The game ends when all pairs have been found or when you consumed all your moves

3. **Scoring**
   - The game tracks the number of pairs you've found
   - It keeps count of your total tries for the levels only
   - Your final score is based on pairs found, total tries, and time taken

## Game Features

- Responsive card layout that works on various screen sizes
- Smooth card flip animations with 3D effect
- Matching pairs disappear with a satisfying spin animation
- Random images fetched from the [Lorem Picsum API](https://picsum.photos/)
- Difficulty selection
- Timer functionality for added challenge
- High score tracking to compete with friends or beat your personal best

# Development

If you want to customize or extend the game:

## Code structure

### JavaScript
#### Index
- `index.js` manage levels and redirections
   
#### Game
- `main.js` controls the main game logic
- `cardClass.js` defines the Card object behavior
- `randomImagesFunction.js` handles fetching random images from the API
- `cardInteractionsFunction.js` handles cards related functions
- `levelsFunction.js` contains functions to manage features related to levels

### CSS
- `index.css` defines style for the `index.html`
- `levels.css` defines style for the `freemode.html` and `level.html`

### HTML
- `index.html` contains the main menu of the game which redirects to both following and gives parameter in url
- `freemode.html` contains the free mode version of the game
- `level.html` contains the levels of the game

### JSON
- `levels.json` contains all levels, their tiles number, moves limit and name

## Classes

### Card
#### Attributes
- id : `number` index of the card
- img : `string` url of the image
- isFaceUp : `bool` card is turned or not
- HtmlElement : `HTMLElement` main element of the card
- isMatched : `bool` card pair has been found

#### Methods
- `turn()` : modifies the css class and `isFaceUp` attribute
- `setHtmlElement(element)` : set `HtmlElement` attribute equal to element parameter
- `matches()` : modifies css classes to hide the card

## Features
- Levels are stored in the `levels.json` so, we can add levels at any time of the development (it is completely dynamic)
- Free Mode takes an integer to indicate the number of cards displayed in the memory game