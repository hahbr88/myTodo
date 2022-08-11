import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postBooks, __getBooks } from "../redux/modules/inputSlice";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const WriteBook = () => {
  const [nickName, setNickName] = useState({
    nickNames: "",
  });
  const [title, setTitle] = useState({
    titles: "",
  });
  const [content, setContent] = useState({
    contents: "",
  });

  const userId = uuidv4();

  const dispatch = useDispatch();

  const getbook = useSelector((state) => state.books.books);

  console.log(getbook);

  const { id } = useParams;
  const navigate = useNavigate;

  console.log(id);

  // const nowDT = new Date().toLocaleString();

  useEffect(() => {
    dispatch(__getBooks());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" && nickName === "" && content === "") {
      return false;
    } // 셋 중 하나라도 입력하지 않았을 때 dispatch 하지 않음
    else {
      setNickName("");
      setTitle("");
      setContent("");
    }
    dispatch(__postBooks({ nickName, title, content, userId }));
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="nickNames"
          placeholder="작성자"
          value={nickName.nickNames}
          onChange={(e) => {
            const { value } = e.target;
            setNickName({ ...nickName, nickNames: value });
          }}
        />
        <input
          type="text"
          name="titles"
          placeholder="제목"
          value={title.titles}
          onChange={(e) => {
            const { value } = e.target;
            setTitle({ ...title, titles: value });
          }}
        />
        <input
          type="text"
          name="contents"
          placeholder="제목"
          value={content.contents}
          onChange={(e) => {
            const { value } = e.target;
            setContent({ ...content, contents: value });
          }}
        />
        <button>글쓰기</button>
      </form>

      <div>
        {getbook?.length > 0 &&
          getbook.map((e) => (
            <div key={e.id}>
              <div>작성자 : {e.name}</div>
              <Link to={`/Detail/${e.id}`}>제목:{e.title} </Link>
            </div>
          ))}
      </div>
    </>
  );
};


// const InputComponent = ({}) => {

//   return (<input
//     type="text"
//     name="nickNames"
//     placeholder="작성자"
//     value={nickName.nickNames}
//     onChange={(e) => {
//       const { value } = e.target;
//       setNickName({ ...nickName, nickNames: value });
//     }}
//   />)
// }

export default WriteBook;
