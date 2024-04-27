import React from 'react'

function Square({value,squareClickHandler}) {
  return (
    <button className='square'onClick={squareClickHandler}>{value}</button>
  )
}

export default Square