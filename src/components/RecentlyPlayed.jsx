import SingleSong from "./SingleSong"

const RecentlyPlayed = (props) => {
    return (
        <div className="main-content-album">
            <div>
                <div className="padding-content">
                <section id="second-section">
                    <div className="container" style={{ marginBottom: 64 }}>
                    <div className="d-flex justify-content-between mt-3">
                        <h4 style={{ width: "bold" }}>Recently played</h4>
                        <p>
                        <span className="text-muted"> SEE All</span>
                        </p>
                    </div>
                    <div className="row py-1 d-flex" id="recently-played">
                        {
                            props.fetchData && 
                            props.fetchData.map(morning => {
                                return <SingleSong data={morning} />
                            })
                        }
                    </div>
                    </div>
                </section>
                </div>
            </div>
        </div>
    )
}

export default RecentlyPlayed