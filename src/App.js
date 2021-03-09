
import {useState, useRef} from 'react'
import './styles/app.scss'
import Song from './components/Song'
import Player from './components/Player'
import data from './util'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ songInfo, setSongInfo ] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0,
})
  const [libraryStatus, setLibraryStatus] = useState(false);
  //ref
  const audioRef = useRef(null);
  //Event handler
  const timeUpdateHandler = (e) =>{
  const current = e.target.currentTime;
  const duration = e.target.duration;

  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const percentage = Math.round((roundedCurrent / roundedDuration) * 100);

  setSongInfo({...songInfo, 
                currentTime: current, 
                duration,
                animationPercentage: percentage,
                volume: e.target.volume,})
}

const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  if (isPlaying) audioRef.current.play();  
  return;
};
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}> 
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong ={currentSong} />
      <Player
          songs = {songs}
          setSongs={setSongs}
          audioRef={audioRef}
          setCurrentSong={setCurrentSong}
          songInfo={songInfo}
          setSongInfo= {setSongInfo} 
          audioRef={audioRef}
          setIsPlaying = {setIsPlaying} 
          isPlaying= {isPlaying} 
          currentSong ={currentSong} />
      <Library 
          libraryStatus={libraryStatus}
          setSongs = {setSongs}
          isPlaying= {isPlaying}
          setCurrentSong={setCurrentSong}
          songs= {songs} 
          audioRef= {audioRef}
          /> 
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata= {timeUpdateHandler}
        ref={audioRef} 
        onEnded={songEndHandler}
        src={currentSong.audio}>
      </audio>  
      <h1> &copy; by Sharmil Adroja </h1>
    </div>
  );
}

export default App;
