import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import diamond from '../assets/diamond.png';
import { colors } from '../styles/colors';

const styles = makeStyles( theme => ( {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 10,
    borderBottom: '1px solid white',

    [ theme.breakpoints.up( 'sm' ) ]: {
      justifyContent: 'flex-start',
    },
  },
  image: {
    width: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color: colors.black,
  },
} ) );

export default function Navigation() {
  const classes = styles();

  return (
    <div className={ classes.container }>
      <img
        className={ classes.image }
        src={ diamond }
        alt="diamond logo"
      />
      <h2 className={ classes.title }>Fitomation</h2>
    </div>
  );
}
