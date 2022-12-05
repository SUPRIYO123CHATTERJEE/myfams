import About_footer from "../comp/about-footer";
import Copy from "../comp/copy";
import Header from "../comp/header";
import PageHeading from "../comp/pageheading";

export default function Contact_page(){
    return(
        <>
        <Header/>
        <PageHeading heading="Contact Us"/>
        <div className="container mt-5 mb-5" style={{backgroundColor: "black", color : "white"}}>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message Us</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Confirm</label>
  </div>
  <button type="submit" className="btn btn-primary mb-5">Submit</button>
</form>
</div>
<About_footer/>
<Copy/>
        </>
    )}