import React from 'react'

function Alert(props) {

  const  info = props.alert;

  const noneVal = info.display

   return (
      
        <div className={`alert alert-${info.type}`} style={{visibility: noneVal}} role="alert">
            <p style={{textAlign:'center'}}>{info.msg}</p>
        </div>

)
}

export default Alert