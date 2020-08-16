import React from 'react';
import { makeStyles , Container } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from '@material-ui/core/Grid';

import appimage from '../proj5/app1.png'
import apple from '../proj5/apple.png'
import googleApp from '../proj5/google-app.png'



import downlaod from './Download-App.module.css';



//import useWebAnimations, {rollIn} from "@wellyshen/use-web-animations";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  
  },
}));

export default function () {
  const classes = useStyles();


  // const writing = useWebAnimations({ ...rollIn });





   


  return (
    <div className={downlaod.container} >
    <div className={classes.root}>
    <Container>
    






      <Grid container spacing={3}>


        <Grid item xs={12} sm={6}>
         
        
          <div  className={downlaod.content} >
          
          <h1 className={downlaod.head}>Download HottiesApp Now!</h1>
                  <div >
                    <ScrollAnimation animateIn="fadeInUpBig"><p className={downlaod.para}>

                    We have all the restaurants you love just a click away. Browse through our vast catalogue of foods and choose the best that suits your mood. All you need to do is download our app on your phone, add items in your cart and relax. We will deliver your food to you at your doorstep. 
                    </p></ScrollAnimation>
                   <div className={downlaod.margleft}> 
                    <img className={downlaod.marg} src={apple} alt="" />
                    
                    <img className={downlaod.marg} src={googleApp} alt="" />
                    </div>

                  </div>
                </div>

               
        </Grid>



        <Grid item xs={12} sm={6}>
        
        <div className={downlaod.img}  >
 
            <img 
            
            src={appimage} alt="" 

           
            />

        </div>

   </Grid>



      </Grid>







      </Container>
    </div>
    </div>
  );
}
