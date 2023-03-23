import { Card } from './components/Card';
import logo from "./logo.svg";
import "./App.css";
import BottomBar from "./components/BottomBar";
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode,setDarkMode] = useState(false)
  useEffect(()=>{
    setDarkMode(true)
  },[])

  return (
    <div className={`App ${isDarkMode?'dark':''}`}>
      <BottomBar></BottomBar>
      <div className="bg-gray-200 flex w-screen h-screen justify-center items-center dark:bg-zinc-900">
        <div className='w-screen h-[50vh] text-4xl font-bold text-center hidden sm:max-md:block'>SM</div>
        <div className='w-screen h-[50vh] text-4xl font-bold text-center hidden md:max-lg:block'>MD</div>
        <div className='w-screen h-[50vh] text-4xl font-bold text-center hidden lg:block'>LG</div>
      </div>
    </div>
  );
}

export default App;

