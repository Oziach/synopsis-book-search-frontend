import React from 'react'

const Header = () => {
    return (
        <div>
        <div className='flex p-2 justify-center items-center'>
            {/* <p className='h-[2px] w-40 bg-yellow-600' /> */}
            <div className='inline-flex items-center flex-col gap-2 border-[3px] border-yellow-600 py-3.5 px-8 bg-amber-200 rounded-md'>
                <div className='inline-block text-4xl font-semibold'>Synopsis Book Search</div>
                <div className='inline-block text-center text-[1.2rem] text-gray-900'>Search for a book by its synopsis, plot, or description!</div>
            </div>
            {/* <p className='h-[2px] w-40 bg-yellow-600' /> */}
        </div>
        <div className='h-6'></div>
        </div>
    )
}

export default Header   