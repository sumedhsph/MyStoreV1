import React from 'react'

function SectionHeadings({text, ...props}) {
  return (
    <div className='border-b border-yellow-200 pb-5'>
    <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
  </div>
  )
}

export default SectionHeadings