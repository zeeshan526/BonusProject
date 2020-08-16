import React from 'react';
import { makeStyles , Container } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import home from '../proj5/pizza.png'
import fork from '../proj5/bg.png'
import bgleft from '../proj5/bgleft.png'
import bgright from '../proj5/bgright.png'
import useWebAnimations from "@wellyshen/use-web-animations";
import Home from './Home.module.css';



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


  const header = useWebAnimations({
    keyframes: {
      transform: "translateY(20px)",
    },
    timing: {
      duration: 2500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  const header1 = useWebAnimations({
    keyframes: {
      transform: "translateY(10px)",
    },
    timing: {
      duration: 2500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });



   


  return (
    <div className={Home.container} >
    <div className={classes.root}>
    <Container>
    
<div className={Home.items}>
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Fast Food &nbsp;&nbsp; |&nbsp;&nbsp; Vegetarian &nbsp; |&nbsp;&nbsp; Sandwich
          </Paper>
        </Grid>

      </Grid>

</div>


<Grid container spacing={3}>

      <Grid item xs={12} sm={6}>
        
        <div className={Home.img}  >
 
            <img style={{height:"750px"}} className={Home.rotate}
            
            src={home} alt="" 

            ref={Home.ref}
            />

        </div>

  </Grid>


 <Grid item xs={12} sm={6}>
         
        <ScrollAnimation animateIn="swing">
          <div  className={Home.content} >
          
                  <h1 className={Home.head}>Hotties Pizza</h1>
                  <div >
                    <p className={Home.para}>

                 
                    The only DEAL WEBSITE You need.
                    </p>

                   
                  </div>
                </div>

                </ScrollAnimation>
          <div className={Home.item}>                
           <img  style={{height:"180px" , width:"80px" }}
            
            src={bgleft} alt=""  
            ref={header.ref}
              
            />

           <img  style={{width:"130px" , height:"220"}}
            
                      src={fork} alt=""  
                        
            />

            <img  style={{height:"150px", width:"80px"}}
            

            src={bgright} alt=""  
            
            ref={header1.ref}

            />
            </div>

 </Grid>


      </Grid>
      </Container>
    </div>
    </div>
  );
}
