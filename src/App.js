import { useState, useEffect } from "react";

/*
useEffect의 subscription을 종료할 때 
즉, 컴포넌트가 unmount될 때 실행할 로직은 useEffect의 EffectCallback에서 반환되는 함수로 구현한다. 
여기서 반환되는 함수를 cleanup function이라고 부르고 메모리 누수를 방지하기 위해 사용된다. 
*/

function Hello() {
  useEffect(() => {
    console.log("Hi :)");
    return () => console.log("Bye :(");
  }, []);
  // useEffect(function () {
  //   console.log("Hi :)");
  //   return function () {
  //     console.log("Bye :(");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
