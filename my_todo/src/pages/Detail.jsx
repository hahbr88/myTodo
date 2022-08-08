import React from "react";
import { useEffect, useDispatch } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCommet } from "../redux/modules/HelloComments";

const Detail = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  let { id } = useParams();
  let copy = users.find((x) => x.id === id);

  
  useEffect(() =>{
    dispatch({fetchCommet})
  },[])  

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
      <form>
      <input>
      </input>
      </form>
    </div>
  );
};

export default Detail;
