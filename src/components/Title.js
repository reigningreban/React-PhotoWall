import React from 'react';
import '../css/title.css';

function Title(props){
    return(
      <div>
        <h1 className="text-center font-title my-7">{props.title}</h1>
      </div>
    );
}

export default Title