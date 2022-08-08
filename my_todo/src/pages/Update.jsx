import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

function Update(props) {
  return (
    <div>
      <form onSubmit>
        <br />
        <label>Title : </label>
        <input
          onChange={props.handleTitleChange}
          value={props.titleValue}
          type="text"
          name="title"
        />
        <hr></hr>
        <div>
          <textarea
            onChange={props.handleTitleChange}
            value={props.contextValue}
            name="content"
          />
        </div>
        <button onClick={props.handleSubmit}>
          {props.updateRequest ? "수정" : "등록"}
        </button>
      </form>
    </div>
  );
}

export default Update;