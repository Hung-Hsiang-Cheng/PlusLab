import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from 'axios';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};

const Comment = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comment, setComment] = useState("");
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value);
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleSaveBtnClick = async () => {
    try {
      await axios.post('http://localhost:8800/',
        { currentValue, comment });

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="commentContainer">
      <div className="commentRating">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              className='ratingStar'
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          )
        })}
      </div>
      <div className="commentEnterBox">
        <div className="textArea">
          <textarea
            type="text"
            placeholder="Enter your comment here"
          // value={note}
          // onChange={e => setNote(e.target.value)}
          />
          <div className="textAreaBtn">
            <button className="saveBtn" type="submit" onClick={handleSaveBtnClick}>Save</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Comment;