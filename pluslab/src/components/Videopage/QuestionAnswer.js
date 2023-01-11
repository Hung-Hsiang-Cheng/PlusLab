import React, { useState } from "react";
import addQuestion from './image/addQuestion.svg';

const QuestionAnswer = ({ b }) => {
  const [question, setQuestion] = useState("");
  const [showQuestionAnswerBtn, setShowQuestionAnswerBtn] = useState(true);
  const [showQuestionAnswerBox, setShowQuestionAnswerBox] = useState(false);


  const handleQuestionAnswerBtnClick = () => {
    setShowQuestionAnswerBtn(false);
    setShowQuestionAnswerBox(true);
  }

  const handleCancelBtnClick = () => {
    setShowQuestionAnswerBox(false);
    setShowQuestionAnswerBtn(true);
  }

  const handleSaveBtnClick = () => {
    setShowQuestionAnswerBox(false);
    setShowQuestionAnswerBtn(true);
  }

  return (
    <div className="questionAnswerContainer">

      {showQuestionAnswerBox && (
        <div className="questionAnswerBox">
          <button className="videoCurrentTime">{b}</button>
          <div className="textArea">
            <textarea
              type="text"
              placeholder="Enter your question here"
              value={question}
              onChange={e => setQuestion(e.target.value)}
            />
            <div className="textAreaBtn">
              <button className="cancelBtn" onClick={handleCancelBtnClick}>Cancel</button>
              <button className="saveBtn" onClick={handleSaveBtnClick}>Save</button>
            </div>
          </div>
        </div>
      )}
      {showQuestionAnswerBtn && (
        <button className="questionAnswerBtn" onClick={handleQuestionAnswerBtnClick}>
          Create a new note at {b}
          <img src={addQuestion} alt="" />
        </button>
      )}


      <div className="QuestionAnswerList">

        <div>{question}</div>
      </div>


    </div>
  )
}

export default QuestionAnswer;