import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clear, getUpdateThunk, updatedThunk } from "../redux/modules/editSlice";
import Text from "../components/Text";
import flex from "../lib/flex";

const Todo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEditMode, setIsEditMode] = useState(false);
  const [updated, setUpdated] = useState("");
  const update = useSelector((state) => state);
  console.log(update)


  useEffect(() => {
    dispatch(getUpdateThunk(id));
    return () => dispatch(clear());
  }, [dispatch, id]);

  useEffect(() => {
    setUpdated(update.comment);
  }, [update]);

  const onSaveButtonHandler = (event) => {
    event.preventDefault();
    if (isEditMode.comment === "") {
      alert("입력된 내용이 없습니다.");
    } else{
      dispatch(
        updatedThunk({
          ...update,
          comment: updated,
        })
      );
      setIsEditMode(true);
      navigate("/Detail/:id");
    }
    
  };

  return (
    <>
        {!isEditMode && (
          <StUpdateHeader>
            <Text size="24">id: ({update?.id})</Text>
            <Text
              size="24"
              onClick={() => {
                navigate("/Detail/:id");
              }}
            >
              상세페이지로
            </Text>
          </StUpdateHeader>
        )}

        <Text size="24">
          {update?.title}
        </Text>
        <StContent>
          {isEditMode ? (
            <>
              <Textarea
                type="text"
                name="comment"
                rows="10"
                maxLength={200}
                value={updated}
                onChange={(event) => {
                  setUpdated(event.target.value);
                }}
              />
            </>
          ) : (
            <Text size="18">{update?.comment}</Text>
          )}
          
            {isEditMode ? (
              <button size="large" onClick={onSaveButtonHandler}>
                저장
              </button>
            ) : (
              <button onClick={() => {
                  setIsEditMode(true);
                }}
              >
                수정
              </button>
            )}
        </StContent>
    </>
  );
};

export default Todo;

const StUpdateHeader = styled.div`
  ${flex({
    jusify: "space-between",
  })}
  div:nth-child(2) {
    text-decoration: underline;
    color: teal;
    cursor: pointer;
  }
  margin-bottom: 32px;
`;

const StContent = styled.div`
  ${flex({
    direction: "column",
    jusify: "space-between",
  })}
  margin-top: 50px;
  min-height: 550px;
  div {
    line-height: 1.5;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`;
