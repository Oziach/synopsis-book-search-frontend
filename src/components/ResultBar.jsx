import React, { useState, useRef, useEffect } from 'react'
import dropdown_icon from '../assets/dropdown_icon.png'

const ResultBar = ({ index, book_name, summary }) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const updateHeight = () => {
        if (showDropdown) {
            // Calculate the full height when the dropdown is open
            dropdownRef.current.style.height = `${dropdownRef.current.scrollHeight}px`;
            console.log(dropdownRef.current.scrollHeight);
        } else {
            // Collapse the dropdown to 0 height
            dropdownRef.current.style.height = "0px";
            console.log('collapsed');
        }
    }

    const resetHeight = () => {
        if(!showDropdown){return;}
        dropdownRef.current.style.height = "auto"; // Allow natural height calculation
        const fullHeight = dropdownRef.current.scrollHeight; // Get new full height
    
        //dropdownRef.current.style.height = "0px"; // Reset height before animation
        requestAnimationFrame(() => {
          dropdownRef.current.style.height = `${fullHeight}px`; // Apply correct height
        });
    }

    useEffect(() => {
        updateHeight()
        window.addEventListener("resize", resetHeight);

        return () => {window.removeEventListener("resize", resetHeight)}
    }, [showDropdown]);

    useEffect(() => {
        setShowDropdown(false)
    }, [index, book_name, summary])

    const ToggleDropdown = () => { setShowDropdown(!showDropdown); }

    return (
        <div className='w-4/5 sm:w-3/4 lg:w-[40%] px-1 '>
            {/* The bar itself */}
            <div className=''>
                <div className='w-full h-12 px-1 flex place-content-between border-t-1 border-yellow-500 items-center'>
                    <div className='inline-block justify-self-start font-[600]'>{book_name} </div>
                    <div onClick={ToggleDropdown} className='flex items-center justify-center border-2 border-yellow-200 rounded-md px-[0.5rem] py-[0.4rem] pb-[0.28rem] hover:cursor-pointer'>
                        <img src={dropdown_icon} className={`brightness-25 h-4 ${showDropdown ? 'rotate-270' : 'rotate-90'}`} />
                    </div>
                </div>
            </div>
            {/* Dropdown content */}
            <div ref={dropdownRef} className={` text-gray-800 mb-4 overflow-hidden transition-all duration-300 ease-in-out '}`}>
                {summary}
            </div>
        </div>

    )
}

export default ResultBar