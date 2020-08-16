import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import f1 from '../proj5/f1.png'
import f2 from '../proj5/f2.png'
import f3 from '../proj5/f3.png'
import Order from './Order.module.css'



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

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={Order.container} >
    <div className={classes.root}>
    <Container>
    
    <ScrollAnimation animateIn="zoomIn"><h2 className={Order.head}>Why Order with Hooties Food?</h2></ScrollAnimation>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          
        <img  src={f1} alt=""/>
            <ScrollAnimation animateIn="fadeInLeft"> <h2>Your Favorite Restaurants</h2></ScrollAnimation>
             <ScrollAnimation animateIn="slideInUp"><p>
             Browse through the best restaurants in your neighborhood and get your food delivered to you at home!
             </p>
             </ScrollAnimation>
    
        </Grid>

        <Grid item xs={12} sm={4}>
  
       <img  src={f2} alt=""/>
       <ScrollAnimation animateIn="fadeInDown"> <h2>Free Download and Easy to Use</h2></ScrollAnimation>
       <ScrollAnimation animateIn="slideInUp"><p>
             Download Hotties’s app for free, and order your food from Hotties’s with just a few clicks !   </p>
       </ScrollAnimation>

        </Grid>
        
        <Grid item xs={12} sm={4}>
    
        <img  src={f3} alt=""/>
        <ScrollAnimation animateIn="fadeInRight">  <h2>Customer Insights and Satisfaction</h2></ScrollAnimation>
        <ScrollAnimation animateIn="slideInUp"><p>
             If you are a business partner then access the business stats & know about your customers better by just one click.             </p>
         </ScrollAnimation>
        </Grid>
      </Grid>
</Container>
      </div>
    </div>
  );
}
