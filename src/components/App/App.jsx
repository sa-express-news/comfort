// @flow

import React, { Component } from 'react';

import StoryTopContainer from '../StoryTopContainer/StoryTopContainer';
import IntroParagraph from '../IntroParagraph/IntroParagraph';
import Sections from '../Sections/Sections';
import SubscribeFooter from '../SubscribeFooter/SubscribeFooter';

import Story from '../../story.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <StoryTopContainer data={Story.top} />
          <div className='Story'>
            <IntroParagraph text='As Chip Asberry fondly recalls it, the week of fellowship, sports and even a rodeo at church camp in the Hill Country three decades ago was nothing short of perfect.' />
            <Sections sections={Story.sections}/>
          </div>
          <SubscribeFooter/>
      </div>
    );
  }
}

export default App;