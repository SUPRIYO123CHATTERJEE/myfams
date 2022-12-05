export default function Carousel_1(props){
    return(
        <>
        <div className="container-fluid caro">
      <img src="/images/slider-bg.jpg" className="caro-img" alt=""></img>
      <div id="carouselExampleSlidesOnly" className="carousel slide caro-1" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active car">
            <h1 style={{color : props.color || "red"}}>Sale 20% Off<br/> On Everything
            </h1>
            <p>

              Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.

            </p>
            <button className="btn btn-danger caro-btn">Shop Now</button>
          </div>
          <div className="carousel-item car">
            <h1 style={{color : props.color || "red"}}>Sale 20% Off<br />
              On Everything
            </h1>
            <p>

              Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudia earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.

            </p>
            <button className="btn btn-danger caro-btn">Shop Now</button>
          </div>
          <div className="carousel-item car">
            <h1 style={{color : props.color || "red"}}>Sale 20% Off<br />
              On Everything
            </h1>
            <p>

              Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.

            </p>
            <button className="btn btn-danger caro-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>

        </>
    )
}