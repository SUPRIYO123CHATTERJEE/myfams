export default function Footer(){
    return(
        <>
        <div className="container-fluid footer">
      <div className="row footer-row-home">
        <div className="col-4">
          <img src="/images/logo.png" className="footer-img" />
          <div>
            <p><strong>ADDRESS:</strong> 28 White tower, Street Name New<br /> York City, USA</p>
            <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
            <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-5">
              <div className="row">
                <div className="col-6">
                  <div className="widget_menu">
                    <h3>Menu</h3>
                    <ul>
                      <li><a className="wid-a" href="/">Home</a></li>
                      <li><a className="wid-a" href="#">About</a></li>
                      <li><a className="wid-a" href="#">Services</a></li>
                      <li><a className="wid-a" href="#">Testimonial</a></li>
                      <li><a className="wid-a" href="#">Blog</a></li>
                      <li><a className="wid-a" href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="widget_menu">
                    <h3>Account</h3>
                    <ul className="widget_menu-ul">
                      <li><a className="wid-a" href="#">Login</a></li>
                      <li><a className="wid-a" href="#">Register</a></li>
                      <li><a className="wid-a" href="#">Checkout</a></li>
                      <li><a className="wid-a" href="#">Shopping</a></li>
                      <li><a className="wid-a" href="#">Account</a></li>
                      <li><a className="wid-a" href="#">Widget</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="col-9 l-col">
                <div className="widget_menu">
                  <h3>Newsletter</h3>
                  <div className="information_f">
                    <p>Subscribe by our newsletter and get update protidin.</p>
                  </div>
                  <div className="form_sub">
                    <form>
                      <div className="field">
                        <input type="email" placeholder="Enter Your Mail" name="email" />
                        <input type="submit" className="field-btn" value="Subscribe" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
        </>
    )
}