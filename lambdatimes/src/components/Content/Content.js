import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
   return this.state.cards.filter(item => {
    if(this.state.selected !== "all"){
      return item.tab === this.state.selected;
    } else {
      return this.state.cards;
    }
  });
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs}
              selectedTab={this.state.selected}
              selectedTabHandler={this.changeSelected} 
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}


/*Self-Study/Essay Questions 


1.What are PropTypes used for? Please describe why it's
important to type check our data in JavaScript.

Answer:
We have used PropTypes for typechecking, type checking is
the ability to to delclare what a prop will be. This is 
important because it allows us to avoid bugs down the line.
as your app grows.


 2.Describe a life-cycle event in React?

 Answer:
 A life cycle event is a method you create in your 
 React Component. These methods allow you to update 
 the current state.


 3.Explain the details of a Higher Order Component?

 Answer:
 Higher order components are functions that create 
 components, this allows us to make re usable code.



4. What are three different ways to style components in 
 React? Explain some of the benefits of each.

Answer:
inline-styling,
components,
original 

*/