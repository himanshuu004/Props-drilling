import React from 'react'

const Card = (props) => {
  return (
    <div className='h-60 mr-7 bg-white text-black inline-block p-6 text-center rounded'>
      <img className='h-30 w-30 mb-4' src="props.photo" alt="" />
      <h1 className='text-2xl'>{props.username}</h1>
      <h4 className='text-blue-400'>{props.prof}</h4>
      <h3 className='text-xs'>{props.age}</h3>
    </div>
  )
}

export default Card
