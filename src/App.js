import React, {useState} from 'react'
import './styles/app.scss'

import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'

import data from './util'
import LibrarySong from './components/LibrarySong'

function App() {
  //State
  const [songs, setState] = useState(data());
  const [currrentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
    <Song currrentSong={currrentSong} />
    <Player currrentSong={currrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    <Library songs={songs} />
     
    </div>
  );
}

export default App;
