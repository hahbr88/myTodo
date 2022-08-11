import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/modules/HelloWorld";

const Main = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  
  const navigate = useNavigate()

  useEffect(() => {

    dispatch(fetchUser());
  }, [dispatch]);

  if (error) {
    return <p>새로고침 해주세요</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      {/* 버튼 누르면 정보 가져오기 */}
      {/* <button onClick={() => dispatch(fetchUser())}>가져오기</button> */}
      {users?.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <h4>
            제목:{user.title}
            </h4>
            <h4>
            내용:{user.content}
            </h4>
            
          </div>
        ))}
      <button onClick={() =>{
        navigate(`/WriteBook`)
      }}>방명록</button>
    </div>
  );
};

export default Main;
