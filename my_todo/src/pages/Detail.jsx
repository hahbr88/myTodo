import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  sandComments,
  getComments,
  deletComments,
} from "../redux/modules/HelloUserComment";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";


const Detail = () => {
  const navigate = useNavigate()
  const initalState = {
    userComment: "",
  };

  const dispatch = useDispatch();
  const [Comment, setComment] = useState(initalState);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const { users, loading, error } = useSelector((state) => state.users);
  const getComment = useSelector((state) => state.userComment.userComment);

  let { id } = useParams();
  let userid = uuidv4();
  let copy = users.find((x) => x.id === id);
  let copyComment = getComment.filter((x) => x.postid === id);

  const onClickDeleteButtonHandler = (id) => {
    dispatch(deletComments(id));
  };

  if (error) {
    return <p>새로고침 해주세요</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (Comment.userComment === "") {
      alert('내용을 입력해주세요')
      return false; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    } else if(Comment.userComment.length < 9 || Comment.userComment.length > 21 ){
      alert('10글자 이상 20글자 이하로 작성해주세요')
      return false
    } else{
      setComment(initalState);
    }

    dispatch(sandComments({ Comment, userid, id }));
  };

  return (
    <div>
      <div>
        <h4>이름:{copy.name}</h4>
        <h4>제목:{copy.title}</h4>
        <h4>내용:{copy.comment}</h4>
      </div>
      <form onSubmit={onsubmitHandler}>
        <input
          type={"text"}
          name="userComment"
          value={Comment.userComment}
          placeholder="댓글"
          onChange={(event) => {
            const { value } = event.target;
            setComment({ ...Comment, userComment: value });
          }}
        ></input>
        <button type="submit">댓글 추가</button>
        <div>
          {copyComment?.length > 0 &&
            copyComment.map((userComment) => (
              <div key={userComment.id}>
                <p>댓글:{userComment.userComment}</p>
                <button
                  type="button"
                  onClick={() => onClickDeleteButtonHandler(userComment.id)}
                >
                  삭제
                </button>
              </div>
            ))}
        </div>
      </form>
      <button onClick={() =>{
        navigate(`/Update/${id}`)
      }}>수정하로가기</button>
    </div>
  );
};

export default Detail;
