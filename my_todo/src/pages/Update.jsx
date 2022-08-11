import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BookCover } from "../components/BookCover";
import { BookDot } from "../components/BookDot";
import { Page } from "../components/Page";
import { Column1 } from "../components/Column1";
import { Column2 } from "../components/Column2";
import { Row1 } from "../components/Row1";
import { Row2 } from "../components/Row2";
import { Row3 } from "../components/Row3";
import { Row4 } from "../components/Row4";
import { Column3 } from "../components/Column3";
import { Column4 } from "../components/Column4";
import { Text1 } from "../components/Text1";
import { Text2 } from "../components/Text2";
import { Update1 } from "../components/Update1";
import { Column5 } from "../components/Column5";
import { Column7 } from "../components/Column7";
import { Background } from "../components/Background";
import { patchUpdateThunk } from "../redux/modules/HelloWorld";

//처음 마운트될 때 Update 읽기 API 요청
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  
  let copy = users.find((x) => x.id === id);

 
  const initalState = {
    updateComment: "",
  };

  // const [isEdit, setIsEdit] = useState(false);
  const [updated, setUpdated] = useState(initalState);



  const updateSubmit = (event) => {
    event.preventDefault();
    if (updated === "") {
      return false;
    } else {
      setUpdated(initalState);
    }

    dispatch(patchUpdateThunk({ updated, id }));
    // setIsEdit(true);
    // navigate("/Detail/:id");
  };



  return (
    <Background>
      <BookCover>
        <BookDot>
          <Page>
            <Column1>
              <Row1>TODAY 2022.08.11</Row1>
              <Row2>
                <Text1>사진 넣기</Text1>
                <Text2>리액트 B반 6조</Text2>
              </Row2>
            </Column1>
            <Column2>
              <Row3>
                <Column3>HelloWorld!! 미니홈피</Column3>
                <Column4>
                  B반 6조 하병노/서동욱/신범수&nbsp;&nbsp;&nbsp;&nbsp;
                </Column4>
              </Row3>

              <Update1>
              <Row4>
                <div>{copy.name}</div>
                <div>{copy.title}</div>
                <div>{copy.content}</div>
                </Row4>
                <Column7>
                  <form onSubmit={updateSubmit}>
                    <input
                      type="text"
                      name="updateComment"
                      placeholder="내용"
                      value={updated.updateComment}
                      onChange={(event) => {
                        const { value } = event.target;
                        setUpdated({ ...updated, updateComment: value });
                      }}
                    ></input>
                    <button type="submit">수정</button>
                  </form>
                </Column7>
              </Update1>
            </Column2>
            <Column5>
            <button
                onClick={() => {
                  navigate(`/`);
                }}
              >
                홈
              </button>
              <button
                onClick={() => {
                  navigate("/WriteBook");
                }}
              >
                방명록
              </button>
            </Column5>
          </Page>
        </BookDot>
      </BookCover>
    </Background>
  );
};

export default Update;
