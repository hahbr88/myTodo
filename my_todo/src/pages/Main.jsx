import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../redux/modules/HelloWorld";

const Main = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

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
            이름:{user.name}
            </h4>
            <h4>
              <Link to={`/Detail/${user.id}`}>제목:{user.title} </Link>
            </h4>
            <h4>
            내용:{user.comment}
            </h4>
            
          </div>
        ))}
    </div>
  );
};

export default Main;
