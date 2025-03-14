import React, { useState } from 'react'
import ResultBar from './ResultBar'
import dropdown_icon from '../assets/dropdown_icon.png'

const Results = () => {

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(9);

    const NextPage = () => {if(page < totalPages){setPage(page+1)} else {setPage(totalPages)}}
    const PrevPage = () => {if(page > 1){setPage(page-1)} else {setPage(1)}}
    const LastPage = () => {setPage(totalPages)}
    const FirstPage = () => {setPage(1)}


    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center mt-4 gap-2 mb-4'>
                <div className='h-[1px] w-24 bg-yellow-500 mt-1' />
                <p>Results</p>
                <div className='h-[1px] w-24 bg-yellow-500 mt-1' />
            </div>
            <ResultBar/>
            <ResultBar/>
            <ResultBar/>

            <div className='flex font-light items-center justify-center gap-3'>
                <div className='hover:cursor-pointer flex' onClick={FirstPage}>
                    <img className='rotate-180 w-2 brightness-70' src={dropdown_icon}/>
                    <img className='rotate-180 w-2 brightness-70' src={dropdown_icon}/>
                </div>
                
                <div className='hover:cursor-pointer' onClick={PrevPage}><img className='rotate-180 w-2 brightness-70' src={dropdown_icon}/></div>


                <div className='flex flex-col'>
                    <div>{page}/{totalPages}</div>
                    <div className='text-xs'>Page</div>
                </div>
                
                <div className='hover:cursor-pointer' onClick={NextPage}><img className='w-2 brightness-70' src={dropdown_icon}/></div>

                <div className='hover:cursor-pointer flex' onClick={LastPage}>
                    <img className=' w-2 brightness-70' src={dropdown_icon}/>
                    <img className=' w-2 brightness-70' src={dropdown_icon}/>
                </div>
            </div>
        </div>
    )
}

export default Results