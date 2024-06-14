# Node.js Game Project

This is a Node.js-based game project that utilizes a canvas for rendering and socket.io for real-time communication. The game includes features such as responsive canvas, animated particles, and real-time multiplayer interactions.

## Features

- **Responsive Canvas**: Automatically adjusts to screen size.
- **Real-time Multiplayer**: Connects via socket.io to enable multiple players.
- **Particle Animations**: Generates particle effects for visual feedback.
- **Dynamic Game Objects**: Supports moving balls and destructible blocks.

## Setup and Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/TikLive/tiklive.git
    cd your-repo
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    npm start
    ```

4. **Access the game**:
    Open your browser and navigate to `http://localhost:8080`.

## File Structure

- `public/`: Contains static files like images and client-side scripts.
- `server.js`: The main server file to start the Node.js server.
- `index.html`: The main HTML file that serves the game interface.
- `styles.css`: The CSS file for styling the game.

## Code Overview

The main script initializes the game canvas, connects to the server via socket.io, and handles game state updates. The game features various classes and functions to manage game objects, animations, and rendering.

### Main Components

- **Particle Class**: Handles the creation and animation of particles.
- **Socket Events**: Manages real-time communication between the server and clients.
- **Rendering Functions**: Draws the game objects and handles the game animations.

### Key Functions

- **anim()**: Main animation loop that continuously renders the game state.
- **renderEndGame()**: Displays the end game screen when the game is over.
- **renderWall()**: Renders the wall and handles collisions with balls.
- **renderBackground()**: Draws the background of the game.
- **renderParticleExplosion()**: Renders particle explosions for visual effects.
- **renderLatency()**: Displays the current latency.
- **renderVersion()**: Displays the current game version.
- **renderBlocksMessagens()**: Renders messages on the blocks.
- **renderBallCombos()**: Renders combos for the balls.
- **renderBalls()**: Renders and updates the positions of the balls.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License.
