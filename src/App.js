import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-gray-200 flex w-screen h-screen justify-center items-center">
        <div className="text-red-900 flex-col content-center align-middle p-5 m-2 absolute card rounded-2xl bg-slate-50 shadow-lg shadow-[rgba(0,0,0,.3)]">
          <h2 className="text-4xl font-semibold mb-2">Card Title</h2>
          <p className="my-3">This is a text example for the card's contents</p>
          <hr className="border-slate-300"></hr>
          <div className="mt-2 space-x-2">
            <button type="button" className="text-md rounded-md bg-red-800 px-2.5 py-1.5 text-white uppercase text- transition-all hover:bg-red-700 active:bg-red-900 tracking-widest font-semibold border-solid border-2 border-red-800">hello</button>
            <button type="button" className="text-md rounded-md bg-red-0 px-2.5 py-1.5 text-red-800 border-solid border-2 border-red-800 uppercase text- transition-all hover:bg-red-100 hover:bg-opacity-50 hover:border-red-900
            active:opacity-100 active:bg-red-900 active:border-red-900  active:text-white tracking-widest font-semibold">goodbye</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

