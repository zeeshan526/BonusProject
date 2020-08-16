import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import fb from '../proj5/fb.png'
import git from '../proj5/git.png'
import Linked from '../proj5/in.png'
import footer from './Footer.module.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
      <div className={footer.foot}>
         <div className={classes.root}>
       <Container>
              <Grid container spacing={3}>

                <Grid item xs={12} sm={4}>
                  
                <h2>Popular Restaurants</h2>
                <p>Pizza Max</p>
                <p>Mazaidar haleem</p>
                <p>Student biryani</p>
                <p>Student Tikka</p>

                </Grid>
                
                  <Grid item xs={12} sm={4}>
                  <h2>Popular Cuisines</h2>
                  <p>Drinks</p>
                  <p>Pizza</p>
                  <p>BBQ</p>
                  <p>Salad</p>
                  <p>Soup</p>
                  <p>Desserts</p>


                  
                  </Grid>
        
                  <Grid item xs={12} sm={4}>
                    
                  <h2>Follow Us on </h2>

                  <a href="https://www.facebook.com/zeshanali.zeshanali.735"> <img className={footer.image} src={fb} alt="Facebook" /></a>
                  <a href="https://github.com/zeeshan526"> <img className={footer.image}  src={git} alt="Github" /></a>
                  <a href="https://www.linkedin.com/in/zeeshan-ali-a57a17176"> <img className={footer.image}  src={Linked} alt="Linkin" /></a>


                  </Grid>
                  

                </Grid></Container>
                <Grid item xs={12} sm={12}>
                    <div className={footer.f1}> &copy; 2020 Zeeshan Ali - All Rights Reserved.</div>
                 </Grid>
    </div>
    </div>
  );
}
