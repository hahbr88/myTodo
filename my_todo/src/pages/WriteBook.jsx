import React, { useState } from "react";

const WriteBook = () => {
  const [bookm, setBook] = useState();

  return (
    <>
      <div>
        <input type="text" placeholder="작성자" />
        <input type="text" placeholder="제목" />
        <input type="text" placeholder="내용" />
      </div>
      <div>
        {/* 여기에 작성된 방명록 */}
      </div>
    </>
  );
};

export default WriteBook;
