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
import { Column6 } from "../components/Column6";
import { Row5 } from "../components/Row5";
import { Red } from "../components/Red";
import { Blue } from "../components/Blue";
import { Row6 } from "../components/Row6";
import { Cate } from "../components/Cate";
import { Line } from "../components/Line";
import { Dot } from "../components/Dot";
import { Column5 } from "../components/Column5";
import { Column7 } from "../components/Column7";
import { Background } from "../components/Background";

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
              <Row4>
                <Update1>
                  <Cate>
                    방명록<Line></Line>
                  </Cate>
                  <Column6>
                    <Row5>
                      <Red>하병노</Red> 반갑습니다
                      <Blue>서동욱</Blue> 반가워요
                      <Red>신범수</Red> 반갑습니다
                    </Row5>
                    <Row6>
                      방명록: 3/25
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상세페이지:3/25
                      <Dot></Dot>
                      게시판: 0/25
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;방명록:0/25
                      <Dot></Dot>
                    </Row6>
                  </Column6>
                </Update1>
              </Row4>

              <Update1>
                <Column7>
                  <Cate>
                    수정페이지<Line></Line>
                  </Cate>
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
              <button>홈으로</button>
              <button>방명록</button>
              <button>상세페이지</button>
            </Column5>
          </Page>
        </BookDot>
      </BookCover>
    </Background>
  );
};

export default Update;
