import React, { useState, useRef, useEffect } from 'react'
import dropdown_icon from '../assets/dropdown_icon.png'

const ResultBar = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (showDropdown) {
          // Calculate the full height when the dropdown is open
          dropdownRef.current.style.height = `${dropdownRef.current.scrollHeight}px`;
        } else {
          // Collapse the dropdown to 0 height
          dropdownRef.current.style.height = "0px";
        }
      }, [showDropdown]);


    const ToggleDropdown = () => {setShowDropdown(!showDropdown);}

    return (
        <div className='w-[40%] px-1 '>
            {/* The bar itself */}
            <div className=''>
                <div className='w-full h-12 px-1 flex place-content-between border-t-1 border-yellow-500 items-center'>
                    <div className='inline-block justify-self-start font-[600]'>#1. The Library of Foie Gras</div>
                    <div onClick={ToggleDropdown} className='flex items-center justify-center border-2 border-yellow-200 rounded-md px-[0.5rem] py-[0.4rem] pb-[0.28rem] hover:cursor-pointer'>
                        <img src={dropdown_icon} className={`brightness-25 h-4 ${showDropdown ? 'rotate-270' : 'rotate-90'}`}/>
                    </div>
                </div>
            </div>
            {/* Dropdown content */}
            <div ref={dropdownRef} className={ `${showDropdown ? 'max-h-100' : 'max-h-0'} text-gray-800 mb-4 overflow-hidden transition-all duration-300 ease-in-out '}`}>
                This book describes the wonders of the Grand Library Of Foie Gras, a massive collection of books and literature of food and related content. Each feature is described in 
                great detail and depth, truly leaving one to behold the majesty of its glory. Lorem ipsum. This book describes the wonders of the Grand Library Of Foie Gras, a massive collection of books and literature of food and related content. Each feature is described in 
                great detail and depth, truly leaving one to behold the majesty of its glory. Lorem ipsum.
            </div>
        </div>

    )
}

export default ResultBar