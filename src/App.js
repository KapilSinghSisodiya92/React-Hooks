import React from "react";
import "./App.css";
import { Counter } from "./Component/CustomHooks/Counter";
import { Counter1 } from "./Component/CustomHooks/Counter1";
import DocumentTitleHook from "./Component/CustomHooks/DocumentTitleHook";
import DocumentTitleHook2 from "./Component/CustomHooks/DocumentTitleHook2";
import Input from "./Component/CustomHooks/Input";
import UseCallbackHook from "./Component/UseCallbackHook";
import UseContextHook from "./Component/UseContextHook";
import UseEffectAfterRender from "./Component/UseEffectAfterRender";
import UseEffectConditionalRun from "./Component/UseEffectConditionalRun";
import UseEffectDataFetch from "./Component/UseEffectDataFetch";
import UseEffectFetchData2 from "./Component/UseEffectFetchData2";
import UseEffectDataFetch3 from "./Component/UseEffectFetchData3";
import UseEffectRunOnlyOnce from "./Component/UseEffectRunOnlyOnce";
import UseEffectWithCleanUp from "./Component/UseEffectWithCleanUp";
import UseEffectWithWrongDependency from "./Component/UseEffectWithWrongDependency";
import UseMemoHook from "./Component/UseMemoHook";
import UseReducerMultipleReducer from "./Component/UseReducerMultipleReducer";
import UseReducerWithUseContext from "./Component/UseReducerWithUseContext";
import UseRefHook2 from "./Component/UseRefHook2";
import UserReducerComplexState from "./Component/UserReducerComplexState";
import UserReducerSimpleState from "./Component/UserReducerSimpleState";
import UseStateCouner from "./Component/UseStateCouner";
import UseStateWithArray from "./Component/UseStateWithArray";
import UseStateWithObject from "./Component/UseStateWithObject";
import UseStateWithPrevState from "./Component/UseStateWithPrevState";
import UseReducerFetchData from "./UseReducerFetchData";
import UseRefHook from "./UseRefHook";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: `Helvetica, sans-serif` }}>React Hooks</h1>
      <div className="UseState">
        <h2>Use State Hook</h2>
        <UseStateCouner />
        <div className="devider" />
        <UseStateWithPrevState />
        <div className="devider" />
        <UseStateWithObject />
        <div className="devider" />
        <UseStateWithArray />
      </div>
      <div className="UseEffect">
        <h2>Use Effect Hook</h2>
        <UseEffectAfterRender />
        <div className="devider" />
        <UseEffectConditionalRun />
        <div className="devider" />
        <UseEffectRunOnlyOnce />
        <div className="devider" />
        <UseEffectWithCleanUp />
        <div className="devider" />
        <UseEffectWithWrongDependency />
        <div className="devider" />
        <UseEffectDataFetch />
        <div className="devider" />
        <UseEffectFetchData2 />
        <div className="devider" />
        <UseEffectDataFetch3 />
      </div>
      <div className="UseContext">
        <h2>Use Context Hook</h2>
        <UserContext.Provider value={"Kapil"}>
          <ChannelContext.Provider value={"Rider By Birth"}>
            <UseContextHook />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div>
      <div className="UseReducer">
        <h2>Use Reducer Hook</h2>
        <UserReducerSimpleState />
        <div className="devider" />
        <UserReducerComplexState />
        <div className="devider" />
        <UseReducerMultipleReducer />
        <div className="devider" />
        <UseReducerWithUseContext />
        <div className="devider" />
        <UseReducerFetchData />
      </div>
      <div className="UseCallback">
        <UseCallbackHook />
      </div>
      <div className="UseMemo">
        <h2>Use Memo Hook</h2>
        <UseMemoHook />
      </div>
      <div className="UseMemo">
        <h2>Use Ref Hook</h2>
        <UseRefHook />
        <div className="devider" />
        <UseRefHook2 />
      </div>
      <div className="UseCustom">
        <h2>Use Custom Hook</h2>
        <DocumentTitleHook />
        <div className="devider" />
        <DocumentTitleHook2 />
        <div className="devider" />
        <Counter />
        <div className="devider" />
        <Counter1 />
        <div className="devider" />
        <Input />
      </div>
    </div>
  );
}

export default App;
