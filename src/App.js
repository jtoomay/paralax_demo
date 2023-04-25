import logo from './logo.svg';
import './App.css';
import tw, { styled } from 'twin.macro';
import { useState } from 'react';

// React Spring
import { Parallax, ParallaxLayer } from '@react-spring/web'

function App() {



  return (
    <>
      <Parallax pages={2} style={{top: '0', left: '0'}}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ backgroundColor: '#805E73' }}
        />
      </Parallax>
    </>
  );
}

export default App;

