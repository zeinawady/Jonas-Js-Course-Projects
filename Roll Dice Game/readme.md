# Roll Dice Game 🎲

## Overview

The Dice Game is a simple turn-based game where two players compete to reach a predefined score first. It is built using **HTML**, **CSS**, and **JavaScript**, with a clean and interactive design.

---

## How to Play

1. **Start the Game**:
   - Each player starts with a score of `0`.
   - The game begins with Player 1 as the active player.

2. **Roll the Dice**:
   - Click the **"Roll Dice"** button to generate a random dice number (1-6).
   - If the result is **not 1**, the dice value is added to the current score of the active player.
   - If the result is **1**, the current player's score is lost, and the turn switches to the other player.

3. **Hold the Score**:
   - Click the **"Hold"** button to save the current score to the total score of the active player.
   - The turn then switches to the other player.

4. **Winning the Game**:
   - The first player to reach a total score of **100** wins.
   - When a player wins, their section is highlighted, and further actions are disabled until the game is reset.

5. **Reset the Game**:
   - Click the **"New Game"** button to reset the scores and start a fresh game.

---

## Features
- **Dynamic Gameplay**: Player turns and scores update in real-time.
- **Visual Feedback**: Active players and winners are highlighted.
- 
---

## Tech Stack
- **HTML**: Markup for game layout.
- **CSS**: Styling for the interface, including animations and transitions.
- **JavaScript**: Handles game logic, user interactions, and dynamic updates.

---


## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dice-game.git
