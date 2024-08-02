import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  /*
  useEffect : 특정한 코드만 변화했을 때 원하는 코드들을 실행할 수 있는 방법
  첫번째 인자에는 실행할 함수
  두번째 인자에는 변화를 지켜볼 인자
  []자리에 keyword 써줌 -> keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것.
  이것이 바로 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유임
  react가 지켜볼 게 아무것도 없으니 처음 한번만 실행되는 것
  */
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
