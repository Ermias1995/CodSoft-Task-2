import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'

function Banner({query, handleInputChange}) {
  return (
    <>
    <div className="">
        <h1 className="text-5xl font-bold text-gray-800 mb-3">Plant the Seeds of Your Career 
            <span className="text-secondary px-2">Today</span>
        </h1>
        <p className="text-lg text-black mb-8">Dive into the thriving job market of Engineering and IT, where countless roles await talented professionals eager to make an impact!</p>
    </div>
    <form>
        <div>
            <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 md:w-1/2 w-full">
                <input type="text" name="title" id="title" placeholder="Search for jobs you are interested in" className="block flex-1 border-0 bg-transparent
                py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
                />
                <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
            <button type='submit' className='bg-secondary py-2 px-8 text-white rounded'>Search</button>
            </div>
        </div>
    </form>
    </>
  )
}
export default Banner