import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeroBanner from '../components/Hero';
import Navigation from '../components/Navigation';
import { colors } from '../styles/colors';


const styles = makeStyles( theme => ( {
  container: {
    backgroundColor: colors.grey,
    padding: 10,

    [ theme.breakpoints.up( 'sm' ) ]: {
      padding: 20,
    },

  },
  wrapper: {
    maxWidth: 960,
    margin: '0 auto',
  },
} ) );

export default function Home() {
  const classes = styles();

  return (
    <div className={ classes.container }>
      <div className={ classes.wrapper }>
        <Navigation />
        <HeroBanner />
      </div>
    </div>
  );
}
