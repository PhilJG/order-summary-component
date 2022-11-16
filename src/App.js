import React from 'react';

import Hero from '..components/Hero';
import Main from '..components/Main';
import Order from '..components/Order';
import Pricing from '..components/Pricing';

export default function App() {
  return (
    <div className="container">
      <Hero />
      <Main />
      <Order />
      <Pricing />
    </div>
  );
}
