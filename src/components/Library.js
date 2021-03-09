import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs,libraryStatus  }) =>{
    return(
        <div className={`library ${libraryStatus ? "active-library" : " "}`}>
            <h1>Library</h1>
            <div className="library-songs">
                {songs.map(song => 
                 <LibrarySong 
                    audioRef= {audioRef} 
                    songs={songs} 
                    setSongs={setSongs}
                    id = {song.id}
                    key = {song.id}
                    setCurrentSong={setCurrentSong} 
                    isPlaying= {isPlaying}
                    song={song} /> ) }
            </div>
        </div>
    )
}

export default Library;