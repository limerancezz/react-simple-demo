import { useState } from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  function Fruits(myInfo) {
    const [data, setData] = useState(myInfo);

    const changeData = () => {
      setData((prevState) => {
        // 也可以使用 Object.assign
        return { ...prevState, ...{ favous: '橘子' } }; // 展开运算符
      });
    };
    return (
      <>
        我的名字: {data.name}, 我爱吃：{data.favous}
        <br />
        <button onClick={changeData}>我爱吃橘子</button>
      </>
    );
  }

  const myInfo = { name: 'man', age: 20, favous: '苹果' };
  return <div>{Fruits(myInfo)}</div>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
