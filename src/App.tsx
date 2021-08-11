import "./App.css";
import Header from "./components/Header";
import Select from "./components/Select";
import Code from "./components/Code";
import { ReducerWrapper } from "./reducer/reducerContext";

function App() {
  return (
    <ReducerWrapper>
      <div className="App">
        <div className="first">
          <Header />
        </div>
        <div className="second">
          <Select />
          <Code />
        </div>
      </div>
    </ReducerWrapper>
  );
}

export default App;
