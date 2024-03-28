// gameboard.js
const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
  
    const getBoard = () => board;
  
    const resetBoard = () => {
      board = ['', '', '', '', '', '', '', '', ''];
    };
  
    return {
      getBoard,
      resetBoard
    };
  })();

  // player.js
const Player = (name, marker) => {
    return { name, marker };
  };

  // game.js
const Game = (() => {
    let currentPlayer;
    let gameActive = true;
  
    const switchPlayer = () => {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    };
  
    const getCurrentPlayer = () => currentPlayer;
  
    const isGameActive = () => gameActive;
  
    const endGame = () => {
      gameActive = false;
    };
  
    return {
      switchPlayer,
      getCurrentPlayer,
      isGameActive,
      endGame
    };
  })();

  // console.js
const ConsoleGame = (() => {
    const startGame = () => {
      Game.resetGame();
      // Your logic for console game
    };
  
    return {
      startGame
    };
  })();

  console.log("This is it");