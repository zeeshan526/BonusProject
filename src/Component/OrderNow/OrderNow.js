import React from 'react'
import ordernow from './OrderNow.module.css'
import { Button } from '@material-ui/core'

function OrderNow() {
    return (
        <div className={ordernow.container}>
          <div>
            <h1 className={ordernow.head}>Place your order right now.</h1>
            <p  className={ordernow.para}>Just one click and you will have food at your doorstep. </p>
            <Button style={{marginBottom:"20px"}} variant="contained">Order Now</Button>
          </div>
        </div>
  
    )
}

export default OrderNow
