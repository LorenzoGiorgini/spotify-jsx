const Tracks = (props) => {
    return (
        <div className="row">
            <div className="col-1">
            <p className="song-number">{props.i + 1}</p>
            </div>
            <div className="col-10">
            <p className="song-text">{props.albumChosen.tracks.data[props.i].title}</p>
            <span className="br" />
            <p className="song-artist align-top">{props.albumChosen.tracks.data[props.i].artist.name}</p>
            </div>
            <div className="col">
            <p className="song-time">{props.albumChosen.tracks.data[props.i].duration}</p>
            </div>
        </div>
    )
}

export default Tracks