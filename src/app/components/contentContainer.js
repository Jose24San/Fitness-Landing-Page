import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import buildPage from '../assets/build-page.png';
import { colors } from '../styles/colors';


const styles = makeStyles( theme => ( {
  textColor: { color: colors.darkText },
  content: {
    [ theme.breakpoints.up( 'sm' ) ]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  reversedContent: {
    [ theme.breakpoints.up( 'sm' ) ]: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
    },
  },
  title: {
    textAlign: 'center',
    fontSize: 28,

    [ theme.breakpoints.up( 'sm' ) ]: {
      fontSize: 34,
    },

    [ theme.breakpoints.up( 'md' ) ]: {
      fontSize: 40,
    },
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 400,

    [ theme.breakpoints.up( 'sm' ) ]: {
      fontSize: 25,
    },

    [ theme.breakpoints.up( 'md' ) ]: {
      fontSize: 30,
    },
  },
  subText: {
    fontSize: 16,
    margin: 0,

    [ theme.breakpoints.up( 'md' ) ]: {
      fontSize: 18,
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',

    [ theme.breakpoints.up( 'sm' ) ]: {
      width: '50%',
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '85%',
    maxWidth: 295,
    maxHeight: 595,
    marginTop: 40,
    paddingBottom: 60,
  },
} ) );

export default function ContentContainer( { title, subTitle, content, imageName, reverseContent } ) {
  const classes = styles();
  let image;

  if ( imageName === 'buildPage' ) {
    image = buildPage;
  }

  return (
    <div>
      {
        ( title )
        && (
          <h3 className={ `${ classes.title } ${ classes.textColor }` }>
            { title }
          </h3>
        )
      }

      <div className={
        ( reverseContent )
          ? classes.reversedContent
          : classes.content }
      >

        <div className={ classes.textContainer }>
          <h4 className={ `${ classes.textColor } ${ classes.subTitle }` }>
            { subTitle }
          </h4>
          <p className={ `${ classes.subText } ${ classes.textColor }` }>
            { content }
          </p>
        </div>

        <div className={ classes.imageContainer }>
          <img
            src={ image }
            className={ classes.image }
            alt="Build your workout dashboard"
          />
        </div>

      </div>
    </div>
  );
}

ContentContainer.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  imageName: PropTypes.string,
  reverseContent: PropTypes.bool,
};
