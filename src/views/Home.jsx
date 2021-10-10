import { useState, useEffect } from "react";
import NavbarTop from "../components/NavbarTop";
import GoodMorning from "../components/GoodMorning";
import RecentlyPlayed from "../components/RecentlyPlayed";

const Home = (props) => {
  const [fetchData, setFetchedData] = useState([]);

  const fetchingData = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        props.query
    );
   
    if (response.ok) {
      let data = await response.json();
      setFetchedData(data.data);
    }
   
  };

  useEffect(() => {
    fetchingData();
  }, [props.query]);

  return (
    <>
      {fetchData && (
        <div className="w-100">
          <NavbarTop />
          <div className="music-home">
            <section id="navbar">
              <div className="container">
                <GoodMorning fetchData={fetchData} />
              </div>
              <div class="main-content-album">
                <RecentlyPlayed fetchData={fetchData} />
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
