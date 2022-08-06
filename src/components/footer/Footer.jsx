import React from 'react'
import './footer.css'
import Handle from '../../assets/handle.svg'
import Content from '../../data/comment.json'

function Footer() {
  return (
    <div className='footer'>
        
        {
            Content.content.map( data => {
                return(
                    <p className='parse' key={data.id}><img src={Handle} alt="" />
                        {data.label}
                     </p>
                )
            })
        }
        
    </div>
  )
}

export default Footer