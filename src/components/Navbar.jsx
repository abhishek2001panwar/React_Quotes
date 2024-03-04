import React from 'react'

function Navbar({users}) {
  return (
    <div className='w-full h-[10vh] bg-zinc-200 '>
<div className='flex justify-between p-8'>
    <h1 className='text-2xl animate-pulse animate-ping'>Quoteify</h1>
<h2 className='hover:scale-125 delay-100 text-xl	 ease-in-out'> Added-Quotes:{users.length}</h2>

</div>


    </div>
  )
}

export default Navbar