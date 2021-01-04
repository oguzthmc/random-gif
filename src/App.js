import React from 'react';

import Random from './components/random-v1';
import Tag from './components/tag-v1';

import './App.css';

const App = () => (
  <div>
    <h1>Random Gif Application</h1>
    <div className="main-container">
      <Random />
      <Tag />
    </div>
  </div>
);

export default App;