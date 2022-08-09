import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { __getBooks } from "../redux/modules/inputSlice";


const WriteBook = () => {
  const [nickName, setNickName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch()

  const nowDT =  new Date().toLocaleString()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || nickName === "") return; // 둘중 하나라도 입력하지 않았을 때 dispatch 하지 않음
    dispatch(
      __getBooks({
        id: uuidv4(),
        nickName: nickName,
        title: title,
        content: content,
        time: nowDT,
      })
    );
    setNickName("");
    setTitle("");
    setContent("");
  };
  

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="작성자" value={nickName} onChange={(e) => {
          console.log(e.target.value)
          setNickName(e.target.value)}}/>
        <input type="text" placeholder="제목"  value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)}/>
        <button>글쓰기</button>
      </form>
      <div>
        {/* 여기에 작성된 방명록 */}
      </div>
    </>
  );
};

export default WriteBook;
