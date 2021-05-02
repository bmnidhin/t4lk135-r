import React from "react";
import Quiz from "react-quiz-component";
import { quiz } from "./quiz";
import Button from "@material-ui/core/Button";
import ReplayIcon from '@material-ui/icons/Replay';
import {Link} from 'react-router-dom'
import GameNav from "../../base/GameNav";
import base, { auth, providers, databased } from "../../../utils/FirebaseSettings";
const generateUsername = require("generate-username-from-email");

const renderCustomResultPage = (obj) => {
    let highScore = Number(localStorage.getItem("quizHighScore"))
  
   
  return (
    <div className="" style={{marginTop:"", textAlign:'center'}}>
     <div style={{ fontSize: "70px" }}>👩‍🏫</div>
      <h2>Game Over</h2>
      <p className={highScore <= obj.correctPoints ?"text-success": "text-danger"}>Your Points: {obj.correctPoints} <span> / {obj.totalPoints} </span></p>
      <p className="text-muted">No of Questions: {obj.numberOfQuestions}</p>
      <p className="text-muted">Correct Ans: {obj.correctPoints}</p>
      <p className="text-muted">Incorrect Ans: {obj.numberOfIncorrectAnswers}</p>
      <Link to="/games/tkmquiz">
      <Button
          variant="contained"
          color="primary"
          // size="large"
          className={"mr-2 mt-2"}
          startIcon={<ReplayIcon />}
        >
          Play Again
        </Button>
        </Link>
    </div>
  );
};

const onCompleteAction = (obj) => {
  postScore(obj)
}

const postScore = (obj)=>{
    
    let highScore = Number(localStorage.getItem("quizHighScore"))
    if(!highScore){
        console.log('No High Score')
        localStorage.setItem("quizHighScore", obj.correctPoints);
    }
    if(highScore <= obj.correctPoints){
      localStorage.setItem("quizHighScore", obj.correctPoints);
      
        let userid = localStorage.getItem('userid')
        let d = new Date();
        if (!highScore && !userid) {
          alert("Unable to Connect With Server. Try Again!!!");
        } else {
          let data = {
            game: "tkmquiz",
            score: obj.correctPoints,
            uid: userid,
            name: localStorage.getItem('displayName') ||'displayName',
            time: d.getTime(),
            photo: localStorage.getItem('photoURL') ||'photoURL',
            avathar: localStorage.getItem("avathar") ||'avathar',
            userName: generateUsername(localStorage.getItem("email") ||'avathar@gmail.com'),
          };
    
          databased.ref("games/tkmquiz/leaderboard/" + userid).set(data);
    
          // this.setState({
          //   comments: comments,
    
          // });
        }
      }
    
   

   
}
const Nav = (props) =>{
 
    let highScore = Number(localStorage.getItem("quizHighScore"))
    return(
        <GameNav
        imojilocal=""
        localscore={''}
        imojihigh={"⚡"}
        highscore={highScore || 0}
        username={props.username}
        avathar={props.avathar}
      />
    )
}
export default function Playtkmquiz(props) {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Nav  username={props.username}
        avathar={props.avathar} /> 
      <Quiz
        quiz={quiz}
        continueTillCorrect={false}
        showDefaultResult={false}
        showInstantFeedback={false}
        customResultPage={renderCustomResultPage}
        onComplete={onCompleteAction}
      />
    </div>
  );
}
