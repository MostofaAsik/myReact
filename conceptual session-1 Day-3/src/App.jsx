import React from 'react';
import ArrayExamples from './components/arrayExamples/ArrayExamples';
import Card from './components/Card/Card';
import ObjectExamples from './components/oObjectExamples/ObjectExamples';
import Person from './components/Person/Person';


const App = () => {
  return (
    <div className='bg-success text-center p-5 m-3 text-2xl font-bold'>
      {/* <Person></Person>
      <Card></Card> */}
      <ArrayExamples></ArrayExamples>
      <ObjectExamples></ObjectExamples>

    </div>
  );
};

export default App;