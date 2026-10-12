import { useState } from 'react'
import './App.css'

function App() {
  const [color, setBgColor] = useState("Black");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
          <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">

            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button className="outline-none px-4 py-1 rounded-full bg-red-500 cursor-pointer p-4" onClick={() => setBgColor("red")}>red</button>
              <button className="outline-none px-4 py-1 rounded-full bg-blue-500 cursor-pointer p-4" onClick={() => setBgColor("blue")}>blue</button>
              <button className="outline-none px-4 py-1 rounded-full bg-green-500 cursor-pointer p-4" onClick={() => setBgColor("green")}>green</button>
              <button className="outline-none px-4 py-1 rounded-full bg-yellow-500 cursor-pointer p-4" onClick={() => setBgColor("yellow")}>yellow</button>
              <button className="outline-none px-4 py-1 rounded-full bg-purple-500 cursor-pointer p-4" onClick={() => setBgColor("purple")}>purple</button> 
            </div>
            
          </div>
      </div>
    </>
  )
}

export default App
