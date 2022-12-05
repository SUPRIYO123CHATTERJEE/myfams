export default function Arrival(props){
    return(
        <>
        <div className="container-fluid arrival">
      <img src="/images/arrival-bg.png"></img>
      <div className="container arr-con ">
        <h1 style={{color : props.color || "red"}}>#New Arrivals</h1>
        <p>Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
        </p>
        <div className="arr-con-div"><button className="btn btn-danger">Shop Now</button></div>
      </div>
    </div>
        </>
    )}