import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { HomepageHero } from '../src/components/homepage-hero';


const homepageHeroDefaultProps = {
  bgImage: 'https://snaporbital.com/wp-content/uploads/edd/2016/12/learndash-notes-background.jpg',
  title: 'Lorem ipsum dolor sit amet',
  para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sagittis lectus, vitae fermentum lacus. Nunc vel erat et est fringilla interdum at finibus neque.',
  cta: {
      href: '#',
      text: 'Lorem Ipsum'
  },
  hatch: 'Proin velit augue, luctus sit amet tristique a, pulvinar a sapien.',
  config: {
    theme: 'dark'
  }
};


const homepageHeroLightTheme = {
  bgImage: 'http://freewallpapersstock.com/download/46446/1600x480/25390_background_light_bends_vector_minimalism_38905_2560x1600-1600x480-c.jpg',
  title: 'Lorem ipsum dolor sit amet',
  para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sagittis lectus, vitae fermentum lacus. Nunc vel erat et est fringilla interdum at finibus neque.',
  cta: {
      href: '#',
      text: 'Lorem Ipsum'
  },
  hatch: 'Proin velit augue, luctus sit amet tristique a, pulvinar a sapien.',
  config: {
    theme: 'light'
  }
};


storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));


storiesOf('HomepageHero', module)
  .add('Default', () => <HomepageHero {...homepageHeroDefaultProps} />)
  .add('Light Theme', () => <HomepageHero {...homepageHeroLightTheme} />)