import logo from './logo.svg';
import './App.css';
import tw, { styled } from 'twin.macro';
import { useState } from 'react';

//* React Spring
// import { Parallax, ParallaxLayer } from '@react-spring/web'
import { useSpring, animated } from '@react-spring/web'

function App() {

  //* One value is an array of springs, the other is a function to update them
  const [springs, api] = useSpring(() => ({
    from: { x: 0}, 
  }))

  //* Function that will translate the div
  const handleClick = () => { 
    api.start({ 
      from: {
        x: 0,
      }, 
      to: {
        x: 100,
      },

    })
  }

  return (
    <>
  
      <animated.div
      onClick={handleClick}
        style={{
          width: 80, 
          height: 80,
          backgroundColor: 'red',
          borderRadius: 16,
          ...springs
        }}
      />
    </>
  );
}

export default App;

