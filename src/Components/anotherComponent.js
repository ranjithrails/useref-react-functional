import React from 'react'

const AnotherComponent = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <>
    <h1>Another Component</h1>
    <input type="text" ref={ref} />
    </>
  )
})

export default AnotherComponent