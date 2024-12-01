import React from "react";
import { useState, useRef, useEffect } from "react";
// import { ReactComponent as DownArrow} from "../assets/down.svg";
// import { ReactComponent as UpArrow} from "../assets/up.svg";
import Action from "./Action";

const Comment = ({ comment }) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const onAddComment = (e) => {};
  return (
    <div className="commentBox">
      <div className={comment.id ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              className="input-container-first"
              autoFocus
              placeholder="type..."
              onChange={(e) => setInput(e.target.value)}
            />

            <Action
              className="reply-comment"
              type="COMMENT"
              handleCLick={onAddComment}
            />
          </>
        ) : (
          <>
            <span style={{ wordWrap: "break-word" }}>{comment.name}</span>
            <div style={{ display: "flex",flexDirection: "bottom", marginTop: "5px" }}>
              {editMode ? (
                <>
                  <Action className="reply" type="SAVE" />
                  <Action className="reply" type="CANCEL"
                  handleCLick={()=>{setEditMode(false)}} />
                </>
              ) : (
                <>
                  <Action className="reply" type="REPLY" />
                  <Action className="reply" type="EDIT"
                  handleCLick={()=> {setEditMode(true)}} />
                  <Action className="reply" type="DELETE" />
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div style={{ paddingLeft: "25px" }}>
        {comment?.items?.map((cmnt) => {
          return <Comment key={cmnt.id} comment={cmnt} />;
        })}
      </div>
    </div>
  );
};

export default Comment;
