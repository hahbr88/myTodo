import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/modules/HelloWorld";
import "./Home.css";
import "./Mini.css";
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
import { Dot } from "../components/Dot";
import { Column5 } from "../components/Column5";
import { MenuBar } from "../components/MenuBar";
import { Text2Box } from "../components/Text2Box";
import { Text3Box } from "../components/Text3Box";
import mini from "./mini.png";
import profile from "./profile.png";

const Main = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
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
                <Column3>Hi-World! ????????????</Column3>
                <Column4>
                  B??? 6??? ?????????/?????????/?????????&nbsp;&nbsp;&nbsp;&nbsp;
                </Column4>
              </Row3>
              <Row4>
                <Update1>
                  <Cate>?????????</Cate>
                  <Column6>
                    <Row5>
                      <Red>?????????</Red> ???????????????
                      <Blue>?????????</Blue> ????????????
                      <Red>?????????</Red> ???????????????
                    </Row5>
                    <Row6>
                      ?????????: 3/25
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???????????????:3/25
                      <Dot></Dot>
                      ?????????: 0/25
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?????????:0/25
                      <Dot></Dot>
                    </Row6>
                  </Column6>
                </Update1>
              </Row4>
              <Row4>
                <Update1>
                  <Text3Box>
                    <img className="imgMini" src={mini} alt="mini" />
                  </Text3Box>
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
      ) : (
        <div>Loading...</div>
      )}
      
    </div>
  );
};

export default Main;
