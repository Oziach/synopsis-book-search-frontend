import React, { useState } from 'react'
import axios from 'axios';

const UserInput = ({userInput, setUserInput, setResults, setPage, setTotalPages}) => {

  const [text, setText] = useState('');

  const OnSubmit = (e) => {
    e.preventDefault();
    setUserInput(text)
    searchBooks();
  }

  const searchBooks = async () => {
    try{
      const response = await axios.post("http://127.0.0.1:5000/search", {query: text, page_number:1})
      console.log(response.data.results)
      setResults(response.data.results.results)
      setTotalPages(response.data.results.total_pages)
      setPage(1);
      setUserInput
      console.log(response.data.results.total_pages)
    } catch (error){
      console.error("Error fetching books ", error);
    }
  }

  return (
    <div className='flex justify-center'>
      <form className='inline-flex flex-col items-center w-1/2 gap-2' onSubmit={OnSubmit}>

        <textarea className='w-full bg-white resize-none border-[0.1rem] border-gray-300 p-2'
          placeholder='Enter book synopsis here...' rows={10} value={text} onChange={(e)=>{setText(e.target.value)}} />
          
        <button type='submit' className='flex items-center font-semibold justify-center bg-amber-100 px-5 py-1 pb-2 rounded-lg border-2 border-amber-400 hover:cursor-pointer'>Search</button>
      </form>
    </div>
  )
}

export default UserInput