// @flow

import React, { Component } from 'react';

import StoryTopContainer from '../StoryTopContainer/StoryTopContainer';
import IntroParagraph from '../IntroParagraph/IntroParagraph';
import Sections from '../Sections/Sections';
import SubscribeFooter from '../SubscribeFooter/SubscribeFooter';

import Story from '../../mock_story.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <StoryTopContainer data={Story.top} />
          <div className='Story'>
            <IntroParagraph text='Towering above his high school defenders, 6-foot-10 center Charles Bassey took the ball on the right wing of the basket, dribbled, then flung it to the backboard in the playful style of a Harlem Globetrotter.' />
            <Sections sections={Story.sections}/>
          </div>
          <SubscribeFooter/>
      </div>
    );
  }
}

export default App;