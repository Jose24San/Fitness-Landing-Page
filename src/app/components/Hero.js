import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { colors } from '../styles/colors';
import appDashboard from '../assets/app-dashboard.png';

const styles = makeStyles( theme => ( {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,

    [ theme.breakpoints.up( 'sm' ) ]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 0 20px 0',

    [ theme.breakpoints.up( 'sm' ) ]: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 0,
    },


  },
  imageContainer: {
    textAlign: 'center',
  },
  text: {
    color: colors.darkText,
    fontSize: 16,

    [ theme.breakpoints.up( 'md' ) ]: {
      fontSize: 18,
    },
  },
  headline: {
    fontSize: 30,
    marginBottom: 0,

    [ theme.breakpoints.up( 'sm' ) ]: {
      fontSize: 38,
    },

    [ theme.breakpoints.up( 'md' ) ]: {
      fontSize: 47,
    },
  },
  subHeadline: {
    textAlign: 'center',
    width: 310,

    [ theme.breakpoints.up( 'sm' ) ]: {
      textAlign: 'left',
      fontSize: 18,
    },

    [ theme.breakpoints.up( 'md' ) ]: {
      fontSize: 22,
      width: 400,
    },
  },
  buttonText: {
    fontSize: 15,

    [ theme.breakpoints.up( 'md' ) ]: {
      fontSize: 17,
    },
  },
  getStartedButton: {
    color: colors.lightText,
    backgroundColor: colors.red,
  },
  learnMoreButton: {
    color: colors.darkText,
  },
  image: {
    width: '85%',
    maxWidth: 295,
    maxHeight: 595,
    marginTop: 40,

    [ theme.breakpoints.up( 'sm' ) ]: {
      justifyContent: 'flex-start',
      padding: '20px 0 40px 0',
    },
  },
} ) );


export default function HeroBanner() {
  const classes = styles();

  return (
    <div className={ classes.container }>

      <div className={ classes.textContainer }>
        <h1 className={ `${ classes.text } ${ classes.headline }` }>
          We Automate Fitness
        </h1>
        <p className={ `${classes.text} ${ classes.subHeadline }` }>
          Automate your fitness and never question if you are making progress again
        </p>

        <div>
          <Button
            className={ `${ classes.buttonText } ${ classes.getStartedButton }` }
            variant="contained"
          >
            Get Started
          </Button>
          <Button
            className={ `${ classes.buttonText } ${ classes.learnMoreButton }` }
          >
            Learn More
          </Button>
        </div>

      </div>

      <div className={ classes.imageContainer }>
        <img
          src={ appDashboard }
          className={ classes.image }
          alt="app dashboard"
        />
      </div>

    </div>
  );
}
