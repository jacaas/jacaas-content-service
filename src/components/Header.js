import React from 'react';


const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Javascript Content as a Service
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}






export default Header;
