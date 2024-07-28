import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import './chess.css';

const ChessSection = () => {
  const generateRandomFEN = () => {
    const game = new Chess();
    for (let i = 0; i < 10; i++) {
      const moves = game.moves();
      if (moves.length === 0) break;
      const move = moves[Math.floor(Math.random() * moves.length)];
      game.move(move);
    }
    return game.fen();
  };

  const [game, setGame] = useState(new Chess(generateRandomFEN()));
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fen, setFen] = useState(game.fen());
  const [promotionMove, setPromotionMove] = useState(null);
  const [showPromotionModal, setShowPromotionModal] = useState(false);

  useEffect(() => {
    const newFEN = generateRandomFEN();
    setGame(new Chess(newFEN));
    setIsPuzzleSolved(false);
    setErrorMessage('');
    setFen(newFEN);
  }, []);

  const handleMove = (from, to) => {
    try {
      const moves = game.moves({ verbose: true });
      const move = moves.find(m => m.from === from && m.to === to);

      if (move && move.flags.includes('p')) {
        setPromotionMove({ from, to });
        setShowPromotionModal(true);
        return;
      }

      const legalMove = game.move({ from, to });
      if (legalMove) {
        setFen(game.fen());
        checkPuzzleSolution();

        const blackMove = game.moves({ verbose: true }).find(move => move.color === 'b');
        if (blackMove) {
          const blackLegalMove = game.move(blackMove);
          if (blackLegalMove) {
            setFen(game.fen());
            checkPuzzleSolution();
          } else {
            throw new Error('Invalid black move');
          }
        }
      } else {
        throw new Error('Invalid white move');
      }
    } catch (error) {
      setErrorMessage(error.message);
      game.undo(); // Undo the last move that caused the error
      setFen(game.fen());
    }
  };

  const handlePromotion = (piece) => {
    const { from, to } = promotionMove;
    game.move({ from, to, promotion: piece });
    setFen(game.fen());
    setShowPromotionModal(false);
    checkPuzzleSolution();

    const blackMove = game.moves({ verbose: true }).find(move => move.color === 'b');
    if (blackMove) {
      game.move(blackMove);
      setFen(game.fen());
      checkPuzzleSolution();
    }
  };

  const checkPuzzleSolution = () => {
    const isSolved = game.isCheckmate();
    setIsPuzzleSolved(isSolved);
  };

  const resetGame = () => {
    const newFEN = generateRandomFEN();
    setGame(new Chess(newFEN));
    setIsPuzzleSolved(false);
    setErrorMessage('');
    setFen(newFEN);
  };

  return (
    <div className="y-center-proj">
    <div className="chessboard x-center  df-c">
        <div className="title3 ta-c">take a break from scrolling</div>
      <p className='ta-c'>Win this game it's so easy , he just know how pieces move</p>
      <Chessboard 
        customDarkSquareStyle={{ backgroundColor: "#8877B7", borderRadius: "5px" }}
        customLightSquareStyle={{ backgroundColor: "#EFEFEF", borderRadius: "5px" }}
        position={fen} 
        onPieceDrop={handleMove} 
      />
      {isPuzzleSolved ? (
        <div>
          <p>Congratulations! You solved the puzzle.</p>
          <div className="btn x-center" onClick={resetGame}>Try another one</div>
        </div>
      ) : (
        <>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </>
      )}
      {!isPuzzleSolved && (
        <div className="btn x-center mt-3" onClick={resetGame}>Generate new position</div>
      )}

      {showPromotionModal && (
        <div className="promotion-modal">
          <h3>Select a piece for promotion:</h3>
          <button onClick={() => handlePromotion('q')}>Queen</button>
          <button onClick={() => handlePromotion('r')}>Rook</button>
          <button onClick={() => handlePromotion('b')}>Bishop</button>
          <button onClick={() => handlePromotion('n')}>Knight</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default ChessSection;
