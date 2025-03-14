import React from 'react'

const UserInput = ({setResults}) => {

  const OnSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex justify-center'>
      <form className='inline-flex flex-col items-center w-1/2 gap-2' onSubmit={OnSubmit}>

        <textarea className='w-full bg-white resize-none border-[0.1rem] border-gray-300 p-2'
          placeholder='Enter book synopsis here...' rows={10} />
          
        <button type='submit' className='flex items-center font-semibold justify-center bg-amber-100 px-5 py-1 pb-2 rounded-lg border-2 border-amber-400 hover:cursor-pointer'>Search</button>
      </form>
    </div>
  )
}

export default UserInput