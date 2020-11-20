import React from 'react'

const Song = ({currrentSong}) => {
    return(
        <div className='song-container' >
            <img src={currrentSong.cover} />
             <h2>{currrentSong.name}</h2>
            <h3>{currrentSong.artist}</h3>
        </div>

    )
}

export default Song