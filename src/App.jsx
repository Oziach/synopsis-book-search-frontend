import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

function App() {
  
  const [results, setResults] = useState([])
  
  return (
    <div className='custom-bg h-screen mb-8'>
      <Header />
      <UserInput setResults={setResults}/>
      {results.length <= 0 && <Results/>}
    </div>
  )
}

export default App
