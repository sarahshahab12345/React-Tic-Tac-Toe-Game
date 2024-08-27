# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tic Tac Toe Game - Functionality

### Overview
This React-based Tic Tac Toe game allows two players to play against each other, tracks scores, and provides visual feedback with animations when someone wins.

### How It Works

#### State Management
- **BoxValues**: An array representing the 3x3 grid, initially filled with empty strings.
- **XTurn**: A boolean indicating whether it is player X's turn.
- **XScore & YScore**: Track the scores for players X and Y.
- **status**: Displays the current game status (whose turn it is, or who won).
- **isGameOn**: Boolean indicating if the game is active.
- **winner**: Stores the winner ("X" or "Y") if there is one.

#### Gameplay
- **handleOnBoxClick(index)**:
  - Updates the grid cell to "X" or "Y" depending on the current turn if the cell is empty.
  - Toggles the turn between X and Y.
  - The click is only registered if `isGameOn` is true.

#### Winner Checking
- **checkWinner()**:
  - Defines winning patterns for Tic Tac Toe.
  - Checks if any of the winning patterns match the current state of the grid.
  - If a player wins, updates the score, status message, and stops the game.
  - If the grid is full and no winner is found, it declares a draw.

#### Game Control
- **startPlay()**:
  - Resets the game and sets it to active.
- **clear()**:
  - Clears the grid and updates the status to indicate which player starts.

#### Visual Effects
- **Confetti**: Appears when there is a winner, adding a celebratory effect.
- **Shake Animation**: Adds a shake effect to the game container when a player wins.

#### User Interface
- **Grid**: Clickable 3x3 grid where players make their moves.
- **Score Display**: Shows the current scores of X and Y.
- **Status**: Displays messages like whose turn it is or who won.
- **Start/Restart Button**: Allows starting a new game or restarting the current game.
