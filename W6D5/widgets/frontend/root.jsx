import React from 'react';
import Clock from './clock';
import Weather from './weather';


class Root extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="main">
        <ul>
          <li><Clock /></li>
          <li><Weather /></li>
        </ul>
      </div>
    );
  }
}

export default Root;
