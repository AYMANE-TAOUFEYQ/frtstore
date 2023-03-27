//react
import { useState, useEffect, Fragment } from "react";

//components
import SearchBox from "./components/search-box/search-box.component";
import Item from "./components/item/item.component";
import Popup from "./components/popup/popup.component";

//data
import DATA from './store/data';

// styles
import './body.scss';

const Body = () => {
  const [screen, setScreen] = useState(false);
  const [apps, setApps] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [popupContent, setPopupContent] = useState([]);
  const [popupToggle, setPopupToggle] = useState(false);



  useEffect(()=> {
    setApps(DATA);
  }, [])

  //for mobiles and tablet only
  useEffect(()=> {
    if(window.innerWidth<768){
      setScreen(true);
    }
  }, []);


  const onSearchChange = () => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filterApps = apps.filter((apps) => {
    return apps.title.toLocaleLowerCase().includes(searchField);
  });

  const changeContent = (item) => {
    setPopupContent([item]);
    setPopupToggle(!popupToggle);
  }

  return (
    <Fragment>
      {screen?
          <div className="container">
            <header className="header">
              <h2 className="header__title">#1 Tweaked App Store</h2>
              <SearchBox placeholder='Search for apps...' onSearchHandler={onSearchChange} />
            </header>
            
            <main className="main">
              {filterApps.map((item, index)=> <Item key={index} item={item} changeContent={changeContent} /> )}
            </main>

            {popupToggle&& popupContent.map((item, index)=> <Popup key={index} item={item} close={changeContent} />) }
          </div>
      : 
          <h1 className="error">PLEASE RETURN ON A MOBILE DEVICE</h1>
      }
    </Fragment>
  );
}

export default Body;
