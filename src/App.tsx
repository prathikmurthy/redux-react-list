import React, { useEffect } from 'react';
import InputField from './components/InputField';
import TaskGrid from './components/TaskGrid';
import TitleBar from './components/TitleBar';
import { useAppDispatch, useAppSelector } from './functions/hooks';
import { toggleState } from './slicetemplate';

function App() {
  // const data = useAppSelector((state) => state.item.data);
  // const dispatch = useAppDispatch()

  // dispatch(toggleState())
  // dispatch(toggleState()) 

  return (
    <div className="bg-slate-900 min-w-screen min-h-screen">
      <TitleBar />
      <InputField />
      <TaskGrid />
      {/* <input type="text" id="input"></input>
      <button onClick={() => dispatch(toggleState((document.getElementById("input") as HTMLInputElement).value))}>
        Toggle
      </button>
      <span>{data.map((x) => <div>{x}</div>)}</span> */}

    </div>
  );
}

export default App;
