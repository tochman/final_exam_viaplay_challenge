import React, { useEffect } from 'react';
import {getSeries} from 


const App = () => {

  useEffect(() => {
    getSeries()
  }, [])

  return (
    <div className="App">
      <h1>Zup wörld!</h1>
    </div>
  );
}

export default App;
