import React from 'react';
//import TheDate from './state/TheDate'
import Accordion from './state/state-drills/Accordion'

function App() {
  
const thingy = [
  {
    title: 'a string for the title',
    section: 'a string for the section'
  },
  {
    title: 'this is a second title',
    section: 'this is a second section'
  },
  {
    title: 'OMG a third title',
    section: 'ahh jeez, Rick thats a lot of sections'
  }
]

  return (
    <main className='App'>
      {/* content goes here */}
    <Accordion tester = {thingy}/>
    </main>
  );
}

export default App;
