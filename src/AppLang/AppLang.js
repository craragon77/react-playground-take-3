import React, { Component } from "react";
import Child from './Child-Components/Child';

export default class AppLang extends Component {
  render() {
    return (
      <div className='AppLang'>
        <Child />
      </div>
    );
  }
}