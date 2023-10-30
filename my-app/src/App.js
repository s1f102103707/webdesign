import "./App.css";
import Message from "./Message";
import Curriculm from "./Curriculm";

function App() {
  const OnClick = () => {
    alert("ボタンが押されました");
  };
  return (
    <div>
      <Message />
      <Curriculm />
      <button onClick={OnClick}>Click</button>
    </div>
  );
}

export default App;
