import React from 'react'

const Title = () => {
  console.log('Rendering Title')
  return (
    <div>
      <h1>useCallback Hook</h1>
    </div>
  )
}

export default React.memo(Title)