import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Dropdown = ({ dropdownElements, getSelected }) => {
    const [dropState, setDropState] = useState(false)
    const [selectedHeader, setSelectedHeader] = useState(dropdownElements[0])
    return (
        <div className='font-bold bg-[#4397A4] text-white '>
            <div onClick={() => setDropState(!dropState)} className='cursor-default lg:cursor-pointer flex justify-center p-2' >
                <div className='pr-2'>{selectedHeader}</div>
                <div className={`${dropState ? "rotate-180" : "rotate-0"} duration-300`}>
                    <FontAwesomeIcon icon={faCircleChevronDown} />
                </div>
            </div>
            <div className={`${dropState ? 'max-h-[500px]' : 'max-h-0'} duration-300 lg:cursor-pointer cursor-default overflow-hidden`}>
                {
                    dropdownElements.map(header => (
                        <div onClick={() => {
                            setSelectedHeader(header)
                            setDropState(false)
                            getSelected(header)
                        }} className='border-t-2' >{header}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Dropdown;