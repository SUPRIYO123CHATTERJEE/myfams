export default function PageHeading(props){
    return(
        <>
        <div className="container-fluid heading">
                <h1>{props.heading}</h1>
            </div>
        </>
    )
}