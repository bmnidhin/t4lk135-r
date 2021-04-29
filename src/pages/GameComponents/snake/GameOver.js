import React from "react";
import ReactTouchEvents from "react-touch-events";
import Button from "@material-ui/core/Button";
import ReplayIcon from '@material-ui/icons/Replay';

function GameOver(props) {
  return (
    <div
      id="GameBoard"
      className="mx-auto d-flex justify-content-center align-items-center"
      style={{
        width: props.width,
        height: "70vh",
        borderWidth: "1px",
        backgroundColor: "rgb(18, 25, 39)",
        padding: "10px",
        marginTop: "50px",
      }}
    >
      <div id="GameOver" style={{ fontSize: "18px" }}>
        <div style={{ fontSize: "70px" }}>🐍</div>
        <div id="GameOverText">OOPs!  GAME OVER</div>
        <div>🍏 Your score: {props.score}</div>
        <div>
          ⚡ {props.newHighScore ? "New device " : "This Device "}high score:{" "}
          {props.highScore}
        </div>
        <Button
          variant="contained"
          color="primary"
          // size="large"
          className={"mr-2 mt-2"}
          onClick={props.reset}
          startIcon={<ReplayIcon />}
        >
          Play Again
        </Button>
      </div>
    </div>
  );
}

export default GameOver;
