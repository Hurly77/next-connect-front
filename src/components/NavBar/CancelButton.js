import React from 'react'

const CancelButton = ({cancel, aU, pU, history}) => {
  return (
      <button onClick={() => cancel(aU, pU, history)}>cancel Request</button>
  )
}
export default CancelButton