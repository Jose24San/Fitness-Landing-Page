import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeroBanner from '../components/Hero';
import Navigation from '../components/Navigation';
import ContentContainer from '../components/contentContainer';
import { colors } from '../styles/colors';
import { copy } from '../assets/copy';


const styles = makeStyles( theme => ( {
  wrapper: {
    padding: '10px 20px',
    maxWidth: 960,
    margin: '0 auto',

    [ theme.breakpoints.up( 'sm' ) ]: {
      padding: '10px 20px',
    },
  },
  greyBackground: {
    backgroundColor: colors.grey,
  },
} ) );

export default function Home() {
  const classes = styles();

  return (
    <div>

      <div className={ `${ classes.greyBackground }` }>
        <div className={ `${ classes.wrapper }` }>
          <Navigation />
          <HeroBanner />
        </div>
      </div>

      <div>
        <div className={ `${ classes.wrapper }` }>
          <ContentContainer
            title="How it works"
            subTitle="1. Build your workout"
            content={ copy.build }
            imageName="buildPage"
            // reverseContent
          />
        </div>
      </div>

    </div>
  );
}
