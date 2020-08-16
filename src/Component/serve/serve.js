import React from 'react'
import f5 from '../proj5/f5.png'
import serve from './serve.module.css'
import { Button } from '@material-ui/core'
function Serve() {
    return (

        <div className={serve.container}>
           <div>
                    <img src={f5} alt="" />
                    <br/>
                    <h1>Own a restaurant?</h1>
                    <p>Let people discover you on Foodnerd! </p>
                    <Button style={{marginBottom:"20px"}} variant="contained" color="secondary">
                        Learn More!
                    </Button>
            </div>
        </div>
  
    )
}

export default Serve
