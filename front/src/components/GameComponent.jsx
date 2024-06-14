import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { useScript } from '@uidotdev/usehooks';

const GameComponent = () => {
  const canvasRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [gameState, setGameState] = useState({ balls: [], wall: null });

  useScript('https://code.jquery.com/jquery-3.6.0.min.js');

  useEffect(() => {
    const socket = io(window.location.origin);
    setSocket(socket);

    socket.on('game-state-start', (data) => {
      setGameState((prevState) => ({
        ...prevState,
        [data.type === 1 ? 'balls' : 'wall']: data.data,
      }));
    });

    socket.on('game-state-update', (data) => {
      setGameState((prevState) => {
        const key = data.type === 1 ? 'balls' : 'wall';
        return { ...prevState, [key]: data.data };
      });
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Renderización del juego aquí usando gameState
      requestAnimationFrame(render);
    };

    render();
  }, [gameState]);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />;
};

export default GameComponent;
