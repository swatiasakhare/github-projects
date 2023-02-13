import React from 'react'

const CategoryButton = ({category, className}) => {
  return (
    <button className={className}>{category}</button>
  )
}

export default CategoryButton