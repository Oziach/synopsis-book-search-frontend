import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

function App() {
  
  const [results, setResults] = useState([])
  const [userInput, setUserInput] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(9);
  
  return (
    <div className='custom-bg h-screen mb-8'>
      <Header />

      <UserInput userInput={userInput} setUserInput={setUserInput} setResults={setResults} setPage={setPage} setTotalPages={setTotalPages}/>

      {userInput.length > 0 && <Results page={page} setPage={setPage} totalPages={totalPages} userInput={userInput} results={results} setResults={setResults}/>}
    </div>
  )
}

export default App
