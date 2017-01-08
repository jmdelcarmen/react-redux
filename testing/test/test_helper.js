import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

//setup testing envionment to run like a browser in the terminal
//similar to window.document
//setting up the fake browser
global.document = jsdom.jsdom('<!doctype html><html><body><body/><hmtl/>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

//build 'renderComponent' helper that should render given react class
function renderComponent(ComponentClass, props, state) {
  //create a component instance
  const componentInstance = TestUtils.renderIntoDocument(
    //pass in our reducers into the createStore method
    <Provider store={createStore(reducers, state)}> 
      < ComponentClass { ...props } />
    </Provider>
  );
  //getting access to html in component instance
  //then wrap a jquery element around it $.
  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function (eventName, value) { // .fn = $('div').simulate
  if (value) {
    this.val(value);
  }
  
  TestUtils.Simulate[eventName](this[0]); //first element
}

//setting up chaiJquery
chaiJquery(chai, chai.util, $);

 
export { renderComponent, expect }