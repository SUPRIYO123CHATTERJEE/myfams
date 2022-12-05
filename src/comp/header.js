// import {useState} from "react";
import { Link } from "react-router-dom";
// import Cart from "./cart";
export default function Header(){
  // const [cartnav , setcartnav] = useState(false);
    return(
        <>
            <div className="header-section">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid hd-fl">
            <a className="navbar-brand" href="/"><img src="/images/logo.png" className="img" id="logo-img" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse main-nav" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0 main-ul" style={{ paddingLeft: "35px" }}>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link active" aria-current="page" id="home">HOME</Link>
                </li>
                <li className="nav-item dropdown ">
                  <a className="nav-link dropdown-toggle main-an" href="#" id="pages" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to={"/about"} className="dropdown-item">About</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to={"/productsPage"} className="nav-link" id="products">PRODUCTS</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/blog-page"} className="nav-link" id="blogs">BLOGS</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact-page"} className="nav-link" id="contact">CONTACT</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link" id="login" style={{color: "black"}}>Log in</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    
    
    
        </>
    )
}