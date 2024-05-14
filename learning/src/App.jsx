import { useState } from 'react'
import './App.css'

////for signals
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='wrapper'>
        <Navbar />
        <main>
          todos
        </main>
        <Sidebar />
      </div>


    </>
  )
}

export default App
