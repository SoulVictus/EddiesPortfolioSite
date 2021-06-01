import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-grid">
                <div className="sitetitle">
                    <h2>Eddie's World</h2>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;