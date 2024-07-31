import React from 'react'
import harryPotterSerie from '../../../../assets/harry_potter_serie.png'

function Details() {
  return (
    <div className='w-full md:w-[20rem] md:h-screen md:sticky md:top-0 overflow-auto'>
      <img src={harryPotterSerie} alt="serie image" className='h-[18rem] w-[15rem] bg-[#edf4e6] rounded-sm mx-auto' />
      <p className='font-poppins font-medium text-2xl text-center mt-4'>Harry potter serie</p>
      <p className='font-arsenal text-lg text-center'>by J.K Rowling</p>
      <div className='w-full'>
        <p className='font-bold text-center mt-4'>Genres:</p>
        <div className='flex flex-wrap gap-x-2 font-normal items-center justify-center w-[90%] md:w-full mx-auto'>
          <span>Fantasy</span>
          <span>Fantasy</span>
          <span>Fantasy</span>
          <span>Fantasy</span>
          <span>Fantasy</span>
          <span>Fantasy</span>
          <span>Fantasy</span>
          <span>Fantasy</span>
          <span>Fantasy</span>
        </div>
      </div>
      <a href="#" className='bg-[#37643B] block w-[60%] md:w-full text-center text-white text-sm font-semibold font-poppins p-3 rounded-lg mx-auto mt-6'>Serie on amazon</a>
    </div>
  )
}

export default Details