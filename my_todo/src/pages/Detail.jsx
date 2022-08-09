import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sandComments, getComments } from "../redux/modules/HelloUserComment";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const Detail = () => {
  const dispatch = useDispatch();
  const [Comment, setComment] = useState({
    userComment: "",
  });
  // console.log(Comment);
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch] );

  const { users, loading, error } = useSelector((state) => state.users);
  const getComment = useSelector((state) => state.userComment.userComment);

  let { id } = useParams();
  let userid = uuidv4();
  let copy = users.find((x) => x.id === id);
  if (error) {
    return <p>새로고침 해주세요</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div>
        <h4>이름:{copy.name}</h4>
        <h4>제목:{copy.title}</h4>
        <h4>내용:{copy.comment}</h4>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (Comment === "") {
            return false;
          } else {
            setComment("");
          }
          dispatch(sandComments({ Comment, userid ,id}));
        }}
      >
        <input
          type={"text"}
          placeholder="댓글"
          onChange={(event) => {
            const { value } = event.target;
            setComment({ ...Comment, userComment: value });
          }}
        ></input>
        <button type="submit">댓글 추가</button>
        <div>
          {getComment?.length > 0 &&
            getComment.map((userComment) => (
              <div key={userComment.id}>
                <p>댓글:{userComment.userComment}</p>
              </div>
            ))}
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default Detail;
