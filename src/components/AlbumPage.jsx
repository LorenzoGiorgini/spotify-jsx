import { useState, useEffect } from "react";
import Tracks from "./Tracks";

const AlbumPage = ({ match }) => {
  const [albumChosen, setAlbumChosen] = useState(null);

  const fetchAlbum = async (songClicked) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + songClicked
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAlbumChosen(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //New URLparams but in react
    let songClicked = match.params.id;
    //Fetching functions
    fetchAlbum(songClicked);
  }, []);

  return (
    <>
      {albumChosen !== null && (
        <div className="music-container">
        <section id="navbar">
          <div className="container-fluid p-0">
            <div className="container-fluid p-0">
              <div className="jumbotron-album">
                <div className="row">
                  <div className="col-12 d-flex">
                    <img
                      src={albumChosen.artist.picture_medium}
                      className="img-fluid"
                      style={{
                        height: 232,
                        width: 232,
                        margin: 30,
                        filter: "drop-shadow(30px 10px 4px #0000001f)"
                      }}
                    />
                    <div
                      className="d-flex flex-column justify-content-end"
                      style={{ marginBottom: 30 }}
                    >
                      <div>
                        <h2
                          style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
                        >
                          ALBUM
                        </h2>
                      </div>
                      <div>
                        <h1 style={{ color: "white", fontWeight: "bold" }}>
                          {albumChosen.title.picture_small}
                        </h1>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={albumChosen.artist.picture_small}
                          style={{
                            height: 24,
                            width: 24,
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginRight: 5
                          }}
                        />
                        <h2
                          style={{
                            fontSize: 14,
                            color: "white",
                            marginBottom: 0,
                            fontWeight: "bold"
                          }}
                        >
                          {albumChosen.artist.name}
                        </h2>
                        <span
                          className="text-muted"
                          style={{ fontSize: 14, marginLeft: 5 }}
                        >
                          • 2018 • {albumChosen.tracks.data.length} , 1 hr 19 min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content-album">
            <div>
              <div className="buttons-row">
                <div className="play-button">
                  <div className="play">
                    <i className="bi bi-play-fill" />
                  </div>
                </div>
                <svg
                  className="liked"
                  width={150}
                  height={150}
                  viewBox="0 0 150 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M125.784 35.0369C113.039 22.2916 92.9859 21.3682 79.1227 32.8994C79.1062 32.9135 77.318 34.3807 75 34.3807C72.6234 34.3807 70.9266 32.9416 70.8609 32.8853C57.0141 21.3682 36.9609 22.2916 24.2156 35.0369C17.6695 41.583 14.0625 50.2877 14.0625 59.5478C14.0625 68.808 17.6695 77.5127 24.0914 83.9228L64.3078 131.006C66.9844 134.14 70.882 135.938 75 135.938C79.1203 135.938 83.0156 134.14 85.6922 131.009L125.782 84.0611C139.301 70.5447 139.301 48.5533 125.784 35.0369ZM122.346 80.8807L82.1297 127.964C80.3461 130.05 77.7469 131.25 75 131.25C72.2531 131.25 69.6562 130.053 67.8703 127.964L27.532 80.7447C21.8695 75.0822 18.75 67.5541 18.75 59.5478C18.75 51.5392 21.8695 44.0135 27.5297 38.351C33.3961 32.4822 41.0555 29.5127 48.7336 29.5127C55.4742 29.5127 62.2289 31.8025 67.7977 36.4338C68.0977 36.7033 70.8586 39.0682 75 39.0682C79.0266 39.0682 81.8578 36.7314 82.1367 36.49C94.1109 26.5291 111.45 27.3307 122.47 38.351C134.159 50.0393 134.159 69.0564 122.346 80.8807Z"
                    fill="#535353"
                  />
                </svg>
                <a
                  className="btn nav-btn "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  <i className="bi bi-three-dots tr-dots" />
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <div className="padding-content">
                <div className="container-fluid p-0 m-0">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <p className="title-heading">#TITLE</p>
                    </div>
                    <hr className="line-break" />
                  </div>
                  <div className="container-fluid p-0 m-0">
                    {
                      albumChosen.tracks && 
                      albumChosen.tracks.data.map((elem , i) => {
                        return <Tracks albumChosen={albumChosen} i={i}/>
                      })
                    }
                  </div>
                </div>
                <a href>
                  <h1 className="see-more" style={{ marginBottom: 20 }}>
                    SEE MORE
                  </h1>
                </a>
                <section id="second-section">
                  <div className="container-fluid p-0" style={{ marginBottom: 64 }}>
                    <div className="d-flex justify-content-between mt-3">
                      <h4 style={{ width: "bold" }}>Recently played</h4>
                      <p>
                        <span className="text-muted"> SEE All</span>
                      </p>
                    </div>
                    <div className="row py-1 d-flex">
                      <div className="col-2 h-100">
                        <div className="card">
                          <img
                            src="./img/artist-img/curtis6.jpg"
                            className="card-img-top"
                            alt="img-fluid"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Burning Jazz-rock</h5>
                            <p className="dotted">
                              you'll find fiery, modern,groovy, jazz-rock
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 h-100">
                        <div className="card">
                          <img
                            src="./img/artist-img/abba2.jpg"
                            className="card-img-top"
                            alt="img-fluid"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Burning Jazz-rock</h5>
                            <p className="dotted">
                              you'll find fiery, modern,groovy, jazz-rock
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 h-100">
                        <div className="card">
                          <img
                            src="./img/artist-img/george3.jpg"
                            className="card-img-top"
                            alt="img-fluid"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Burning Jazz-rock</h5>
                            <p className="dotted">
                              you'll find fiery, modern,groovy, jazz-rock
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 h-100">
                        <div className="card">
                          <img
                            src="./img/artist-img/the5.jpg"
                            className="card-img-top"
                            alt="img-fluid"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Burning Jazz-rock</h5>
                            <p className="dotted">
                              you'll find fiery, modern,groovy, jazz-rock
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 h-100">
                        <div className="card">
                          <img
                            src="./img/artist-img/the4.jpg"
                            className="card-img-top"
                            alt="img-fluid"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Burning Jazz-rock</h5>
                            <p className="dotted">
                              you'll find fiery, modern,groovy, jazz-rock
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 h-100">
                        <div className="card">
                          <img
                            src="./img/artist-img/janis7.jpg"
                            className="card-img-top"
                            alt="img-fluid"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Burning Jazz-rock</h5>
                            <p className="dotted">
                              you'll find fiery, modern,groovy, jazz-rock
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      )}
    </>
  );
};

export default AlbumPage