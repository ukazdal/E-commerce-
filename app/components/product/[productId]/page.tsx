import React from 'react'

type DetailProps = {
    droductId? : string;
}


const Detail = ({params}: {params: DetailProps}) => {
    console.log(params,"params");
    
  return (
    <div>
        Detail
    </div>
  )
}

export default Detail