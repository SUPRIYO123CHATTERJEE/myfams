export default function Customer(){
    return(
        <>
        <div className="container c-slide-container">
      <h1>Customer's Testimonial</h1>
      <div id="carouselExampleIndicators" className="carousel slide c-slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner c-slide-inner">
          <div className="carousel-item active">
            <div className="d-block w-100 "><img src="/images/client.jpg" className="c-slide-img" alt="..." />
              <div className="detail-box">
                <h5>
                  Anna Trevor
                </h5>
                <h6>
                  Customer
                </h6>
                <p>
                  Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100"><img src="/images/client.jpg" className="c-slide-img" alt="..." />
              <div className="detail-box">
                <h5>
                  Anna Trevor
                </h5>
                <h6>
                  Customer
                </h6>
                <p>
                  Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100"><img src="/images/client.jpg" className="c-slide-img" alt="..." />
              <div className="detail-box">
                <h5>
                  Anna Trevor
                </h5>
                <h6>
                  Customer
                </h6>
                <p>
                  Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev c-slide-btn-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next c-slide-btn-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
        </>
    )
}