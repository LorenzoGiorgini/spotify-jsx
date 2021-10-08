import { useState } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './styles/album-page.css';
import './styles/artist-page.css';
import './styles/cards-album.css';
import './styles/cards.css';
import './styles/home.css';
import './styles/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import NavbarBottom from './components/NavbarBottom';
import Home from './views/Home'
import AlbumPage from './components/AlbumPage';



function App() {

  const [query , setQuery] = useState("eminem")

  return (
    <Router>
      <div className="container-master">
        <div className="aside-bar " style={{ height: "90vh !important" }}>
          <SideBar query={query} setQuery={setQuery}/>
          <Route path={"/"} exact render={(routerProps) => <Home {...routerProps} query={query} setQuery={setQuery} />}/>
          <Route path={"/album-page/:id"} exact render={(routerProps) => <AlbumPage {...routerProps} />} />
        </div>
        <NavbarBottom />
      </div>
    </Router>
  );
}

export default App;