import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../redux/modules/HelloWorld";
import {
  sandComments,
  getComments,
  deletComments,
} from "../redux/modules/HelloUserComment";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { BookCover } from "../components/BookCover";
import { BookDot } from "../components/BookDot";
import { Page } from "../components/Page";
import { Column1 } from "../components/Column1";
import { Column2 } from "../components/Column2";
import { Row1 } from "../components/Row1";
import { Row2 } from "../components/Row2";
import { Row3 } from "../components/Row3";
import { Column3 } from "../components/Column3";
import { Column4 } from "../components/Column4";
import { Row4 } from "../components/Row4";
import { Text1 } from "../components/Text1";
import { Text2 } from "../components/Text2";
import { Update1 } from "../components/Update1";
import { Cate } from "../components/Cate";
import { Column5 } from "../components/Column5";
import { Column7 } from "../components/Column7";
import { MenuBar } from "../components/MenuBar";
import { Text2Box } from "../components/Text2Box";
import profile from "./profile.png";

const Detail = () => {
  const navigate = useNavigate();
  const initalState = {
    userComment: "",
  };

  const dispatch = useDispatch();
  const [Comment, setComment] = useState(initalState);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getComments());
  }, [dispatch]);

  const { users, loading, error } = useSelector((state) => state.users);
  const { books } = useSelector((state) => state.books);
  const getComment = useSelector((state) => state.userComment.userComment);
  console.log(loading);
  console.log(users);
  let { id } = useParams();
  let userid = uuidv4();
  let copy = books.find((x) => x.id === id);
  console.log(copy);
  let copyComment = getComment.filter((x) => x.postid === id);

  const onClickDeleteButtonHandler = (id) => {
    dispatch(deletComments(id));
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (Comment.userComment === "") {
      alert("????????? ??????????????????");
      return false; // ???????????? ???????????? ????????? ??? dispatch ?????? ??????
    } else if (
      Comment.userComment.length < 3 ||
      Comment.userComment.length > 20
    ) {
      alert("3 ?????? 20?????? ????????? ??????????????????");
      return false;
    } else {
      setComment(initalState);
    }

    dispatch(sandComments({ Comment, userid, id }));
  };

  return (
    <BookCover>
      <BookDot>
        <Page>
          <Column1>
            <Row1>TODAY 2022.08.11</Row1>
            <Row2>
            <Text1>
                  <Text2Box>
                    <img className="imgProfile" src={profile} alt="profile" />
                  </Text2Box>
                </Text1>
                <Text2>??l????????l ??l??? ??? ??????</Text2>
            </Row2>
          </Column1>
          <Column2>
            <Row3>
              <Column3>HelloWorld!! ????????????</Column3>
              <Column4>
                B??? 6??? ?????????/?????????/?????????&nbsp;&nbsp;&nbsp;&nbsp;
              </Column4>
            </Row3>
            <Row4>
              <Update1>
                <Cate>???????????????</Cate>
                <Column7>
                  <div>
                    {loading ? (
                      <>
                        <div>
                          <h4>??????:{copy.name}</h4>
                          <h4>??????:{copy.title}</h4>
                          <h4>??????:{copy.content}</h4>
                        </div>
                        <form onSubmit={onsubmitHandler}>
                          <input
                            type={"text"}
                            name="userComment"
                            value={Comment.userComment}
                            placeholder="??????"
                            onChange={(event) => {
                              const { value } = event.target;
                              setComment({ ...Comment, userComment: value });
                            }}
                          ></input>
                          <button type="submit">?????? ??????</button>
                          <div>
                            {copyComment?.length > 0 &&
                              copyComment.map((userComment) => (
                                <div key={userComment.id}>
                                  <p>??????:{userComment.userComment}</p>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      onClickDeleteButtonHandler(userComment.id)
                                    }
                                  >
                                    ??????
                                  </button>
                                </div>
                              ))}
                          </div>
                        </form>
                        <button
                          onClick={() => {
                            navigate(`/Update/${id}`);
                          }}
                        >
                          ????????????
                        </button>
                      </>
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>
                </Column7>
              </Update1>
            </Row4>
          </Column2>
          <Column5>
            <MenuBar
              button
              onClick={() => {
                navigate(`/`);
              }}
            >
              ?????????
            </MenuBar>
            <MenuBar
              button
              onClick={() => {
                navigate(`/WriteBook`);
              }}
            >
              ?????????
            </MenuBar>
          </Column5>
        </Page>
      </BookDot>
    </BookCover>
  );
};

export default Detail;
