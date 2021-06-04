
import './App.css';
import Header from "./components/Header";
import Avatar from "./components/Avatar";
import Title from "./components/Title";
import TextArea from "./components/TextArea";
import ArtGallery from "./components/ArtGallery";
import ArtImage from "./components/ArtImage";
import HorizontalSeparator from "./components/HorizontalSeparator";
import Decorative from "./components/Decorative";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <div id="aboutme" className="content-container">
          <div className="content-grid">
            <div className="content-place">
              <Title text={"About me"}/>
              <TextArea>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </TextArea>
              <TextArea>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </TextArea>
              <HorizontalSeparator />
              <Decorative />
            </div>
          </div>
        </div>
        <div className="middle-container">
          <div className="avatar-container">
            <Avatar />
          </div>
          <div className="separator-container">
            <div className="separator"></div>
          </div>
        </div>
        <div id="works" className="content-container">
          <div className="content-grid">
            <div className="content-place">
              <Title text={"My works"}/>
              <ArtGallery>
                <ArtImage url={"image1.jpg"} />
                <ArtImage url={"image2.jpg"} />
                <ArtImage url={"image3.jpg"} />
                <ArtImage url={"image4.jpg"} />
                <ArtImage url={"image5.jpg"} />
                <ArtImage url={"image6.jpg"} />
                <ArtImage url={"image4.jpg"} />
                <ArtImage url={"image5.jpg"} />
                <ArtImage url={"image6.jpg"} />
              </ArtGallery>
            </div>
          </div>
        </div>
      </div>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
