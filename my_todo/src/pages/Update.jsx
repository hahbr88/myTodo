import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";

// fetch는 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있다.
// 사용자 정보 읽기, 전송
// 서버에서 응답 헤더를 받자마자 fetch 호출 시 반환받은 promise가
// 내장 클래스 Response의 인스턴스와 함께 이행 상태가 된다.

const Update = ({ match }) => {
  const [data, setData] = useState(null);
  // const dispatch = useDispatch();
    console.log(data);
  //async function 선언은 AsyncFunction객체를 반환하는 하나의 비동기 함수를 정의한다.
  // 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로,
  // 암시적으로 Promise를 사용하여 결과를 반환한다.
  // component가 렌더링 될 때마다 특정 작업(Sied effect)을 실행할 수 있도록 하는 리액트 Hook.
  useEffect(() => {
    async function fetch() {

      //await fetchData(
      await (
        `${"http://localhost:3001/books"}?detail_id=${match.params.id}`
      ).then((response) => {
        setData(response.data);
      });
    }
    fetch();
  }, []);

  const onChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };
  return (
    <div className="Update">
      <form action="api/detail" method="post">
        <button onClick="">수정완료</button>
      </form>
    </div>
  );
};
//onChangeHandler
export default Update;
