import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { patchUpdateThunk } from "../redux/modules/editSlice";
import { useNavigate } from "react-router-dom";
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
import styled from "styled-components";
import profile from "./profile.png";
import { Text2Box } from "../components/Text2Box";

//처음 마운트될 때 Update 읽기 API 요청
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(id);
  const initalState = {
    updateComment: "",
  };

  // const [isEdit, setIsEdit] = useState(false);
  const [updated, setUpdated] = useState(initalState);

  // console.log(updated);

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
    <div className="background">
      <BookCover>
        <BookDot>
          <Page>
            <Column1>
              <Row1>TODAY 2022.08.11</Row1>
              <Row2>
                <Row2Box />
                <Text1>
                  <Text2Box>
                    <img src={profile} alt="profile" />
                  </Text2Box>
                </Text1>
                <Text2>
                Øl유없Øl Ŀl㈎ 참 좋㈕
                </Text2>
              </Row2>
            </Column1>
            <Column2>
              <Row3>
                <Column3>HelloWorld!! 미니홈피</Column3>
                <Column4>
                  B반 6조 하병노/서동욱/신범수&nbsp;&nbsp;&nbsp;&nbsp;
                </Column4>
              </Row3>
              <Row4>
              id랑 title 오는 자리
              </Row4>
              <Row4>
                <Update1>
                  <Cate>Comment</Cate>
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
                      <button>수정완료</button>
                    </form>
                  </Column7>
                </Update1>
              </Row4>
              <div>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  뒤로가기
                </button>
              </div>
            </Column2>
            <Column5>
              <MenuBar
                button
                onClick={() => {
                  navigate(`/`);
                }}
              >
                홈으로
              </MenuBar>
              <MenuBar
                button
                onClick={() => {
                  navigate(`/WriteBook`);
                }}
              >
                방명록
              </MenuBar>
            </Column5>
          </Page>
        </BookDot>
      </BookCover>
    </div>
  );
};

export default Update;

const Row2Box = styled.div`
  background-image: url(./profile.png);
`;
