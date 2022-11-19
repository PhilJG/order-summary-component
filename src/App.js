import React from 'react';

import Hero from './components/Hero';
import Main from './components/Main';
import Order from './components/Order';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="container">
      <Hero />
      <Main />
      <Order />
      <Pricing />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}
