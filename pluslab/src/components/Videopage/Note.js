import React, { useState, useEffect } from "react";
import addNote from './image/addNote.svg';
import trashcan from './image/trashcan.svg';
import axios from 'axios';

const Note = ({ b, videoRefProps }) => {
  const [note, setNote] = useState("");
  const [showNoteBtn, setShowNoteBtn] = useState(true);
  const [showNoteBox, setShowNoteBox] = useState(false);

  const [videonote, setVideonote] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8800/')
      .then(res => {
        let videonoteCopy = [...res.data];
        videonoteCopy.sort((a, b) => {
          let bArrA = a.b.split(":");
          let bArrB = b.b.split(":");
          return (parseInt(bArrA[0]) * 60 + parseInt(bArrA[1])) - (parseInt(bArrB[0]) * 60 + parseInt(bArrB[1]));
        });
        setVideonote(videonoteCopy);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleNoteBtnClick = () => {
    setShowNoteBtn(false);
    setShowNoteBox(true);
    videoRefProps.current.pause();
  }
  const handleCancelBtnClick = () => {
    setShowNoteBox(false);
    setShowNoteBtn(true);
  }

  const handleSaveBtnClick = async () => {
    try {
      await axios.post('http://localhost:8800/', { note, b });
      setShowNoteBox(false);
      setShowNoteBtn(true);
      axios.get('http://localhost:8800/')
        .then(res => {
          let videonoteCopy = [...res.data];
          videonoteCopy.sort((a, b) => {
            let bArrA = a.b.split(":");
            let bArrB = b.b.split(":");
            return (parseInt(bArrA[0]) * 60 + parseInt(bArrA[1])) - (parseInt(bArrB[0]) * 60 + parseInt(bArrB[1]));
          });
          setVideonote(videonoteCopy);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
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
              // value={note}
              onChange={e => setNote(e.target.value)}
            />
            <div className="textAreaBtn">
              <button className="cancelBtn" onClick={handleCancelBtnClick}>Cancel</button>
              <button className="saveBtn" onClick={handleSaveBtnClick} type="submit">Save</button>
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
        {
          videonote.map((item, index) => {
            return (
              <div className='noteBox' key={index}>
                <button className="videoCurrentTime">{item.b}</button>
                <div className='noteContent'>
                  <div className='noteContentDel'>
                    <button>
                      <img src={trashcan} alt="" />
                    </button>
                  </div>
                  {item.note}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Note;