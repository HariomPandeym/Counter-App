import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function addvalue()
{
 return setCount(count+1);
}
function decreasevalue()
{
 return setCount(count-1);
}
function refreshvalue()
{
 return setCount(0);
}
 

  return (
    <>
      <div className='div'>
        <h3 className='bg-red-400 text-white-500 p-4 text-5xl  mb-8 w-[700px] shadow-5xl rounded-full' >Counter = {count}</h3>
        <div className='bg-blue-500 flex p-6 rounded-full items-start' >
        <button className='bg-green-500 text-white rounded-full shadow-5xl text-3xl font-bold mr-4 hover:bg-pink-400 text-gray-200' onClick={addvalue}>Increase</button>
        <button className='bg-green-500 text-white rounded-full shadow-5xl text-3xl font-bold mr-4 hover:bg-pink-400 text-gray-200'onClick={decreasevalue} >Decrease</button>
        <button className='bg-green-500 text-white rounded-full shadow-5xl text-3xl font-bold mr-4 hover:bg-pink-400 text-gray-200'onClick={refreshvalue} >Refresh</button>
        </div>
      </div>
    </>
  )
}

export default App
