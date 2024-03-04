import React from 'react';
import Form from './comp/form';
import roll from './roll.png';
import pow from './pow.png';
import './App.css';

export const App = () => {
  return (
    <>
      <div className='chum'>
        <img src={pow}
          style={{
            borderRadius: "50%",
            display: "flex",
            alignItems: 'flex-end',
            justifyContent: "flex-end",
            float: "right",
            animation: "shake infinite 20s linear",
          }} />
      </div>
      <div className='art'>
        <div>
          <img src={roll}
            style={{
              borderRadius: "50%",
              height: "40vmin",
              animation: "App-logo-spin infinite 20s linear",
              filter: "drop-shadow(0 -16mm 14mm rgb(160, 0, 210))"
            }}/>
        </div>
        <>
        <Form />
        </>
      </div>
    </>
  )
}

export default App;