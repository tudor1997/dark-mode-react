import React, {useState} from 'react';

function App() {

  const [change,setChange] = useState(false);
 
  const triggerToggle = () => {
    setChange(!change);
  }

  return (
    <div className={`container ${change ? 'dark-bg' : 'light-bg'}`} >
      <h1 className={`title ${change ? 'light-title': 'dark-title'}`}>Dark Mode App</h1>
      <button className={`btn ${change ? 'dark-btn': 'light-btn'}`} onClick={triggerToggle}>Toggle Mode</button>

      <article>
        <div className={`title-article ${change ? 'title-dark': 'title-light'}`} >The 5 Stages of the Creative Process</div>
        <small className={`release-date ${change ? 'text-light' : 'text-dark'}`}>Saturday 11th, 2018  5 min read</small>
        <p className={`text ${change ? 'text-light' : 'text-dark'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>
      <article>
        <div className={`title-article ${change ? 'title-dark': 'title-light'}`}>A Problem in Need of a Creative Solution</div>
        <small className={`release-date ${change ? 'text-light' : 'text-dark'}`}>Monday 16th, 2014 10 min read</small>
        <p className={`text ${change ? 'text-light' : 'text-dark'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </article>
      <article>
        <div className={`title-article ${change ? 'title-dark': 'title-light'}`}>The Idea in Practice</div>
        <small className={`release-date ${change ? 'text-light' : 'text-dark'}`}>Wednesday 24th, 2020 20 min read</small>
        <p className={`text ${change ? 'text-light' : 'text-dark'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>
    </div>
  );
}

export default App;
