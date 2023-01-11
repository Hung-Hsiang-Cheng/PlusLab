import React, { useState } from "react";
import addNote from './image/addNote.svg';
import trashcan from './image/trashcan.svg';

const Note = ({ b, videoRefProps }) => {
  const [note, setNote] = useState("");
  const [showNoteBtn, setShowNoteBtn] = useState(true);
  const [showNoteBox, setShowNoteBox] = useState(false);


  const handleNoteBtnClick = () => {
    setShowNoteBtn(false);
    setShowNoteBox(true);
    videoRefProps.current.pause();
  }



  const handleCancelBtnClick = () => {
    setShowNoteBox(false);
    setShowNoteBtn(true);
  }

  const handleSaveBtnClick = () => {
    setShowNoteBox(false);
    setShowNoteBtn(true);
  }

  return (
    <div className="noteContainer">

      {showNoteBox && (
        <div className="noteBox">
          <button className="videoCurrentTime">{b}</button>
          <div className="textArea">
            <textarea
              type="text"
              placeholder="Enter your note here"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
            <div className="textAreaBtn">
              <button className="cancelBtn" onClick={handleCancelBtnClick}>Cancel</button>
              <button className="saveBtn" onClick={handleSaveBtnClick}>Save</button>
            </div>
          </div>
        </div>
      )}
      {showNoteBtn && (
        <button className="noteBtn" onClick={handleNoteBtnClick} >
          Create a new note at {b}
          <img src={addNote} alt="" />
        </button>
      )}


      <div className="noteList">
        <div className='noteBox'>
          <button className="videoCurrentTime">{b}</button>
          <div className='noteContent'>
            <div className='noteContentDel'>
              <button>
                <img src={trashcan} alt="" />
              </button>
            </div>
            {note}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Note;