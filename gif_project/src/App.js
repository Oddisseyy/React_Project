import React, {useState} from 'react';
import './App.css';

const GIFS = ['https://media3.giphy.com/media/xT9KVD5I2pKy21DY40/giphy.gif?cid=ecf05e47r87wvzaok1b8kg8w36wn3ghx03y2zoo4cg0yi96w&rid=giphy.gif&ct=g', 'https://media0.giphy.com/media/10UUe8ZsLnaqwo/giphy.gif?cid=ecf05e47ggd6zqdzeuamm0kj3yg5ioz2am2ph89sml7dezwc&rid=giphy.gif&ct=g'];

function App() {
  
  const [gifs, setGifs] = useState(GIFS);

  return (
    <div className="App">
      <section className="App-content">
        <img src = {gifs} alt=''/>
      </section>
    </div>
  );
}

export default App;
