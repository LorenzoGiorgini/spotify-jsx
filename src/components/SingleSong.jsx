import { Link } from "react-router-dom"

const SingleSong = (props) => {
    return (
        <Link to={'/album-page/' + props.data.album.id}>
            <div className="card" style={{ marginBottom: 25 }}>
                <img src={props.data.album.cover_medium} className="card-img-top img-fluid" />
                <div className="card-body">
                    <h5 className="card-title dotted">
                        {props.data.album.title}
                    </h5>
                </div>
            </div>
        </Link>
    )
}

export default SingleSong