import React from 'react'

const Card = ({children, bg='bg-indigo-300'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Card