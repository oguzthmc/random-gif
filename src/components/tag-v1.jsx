import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [tag, setTag] = useState('dogs');
  const [gif, setGif] = useState('');

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  }

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  }

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="random-tag-gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click For New</button>
    </div>
  );
}

export default Random;