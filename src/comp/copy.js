export default function Copy(props) {
  return (
    <>
      <div className="d-flex copy" style={{backgroundColor : props.color || "black"}}>
        <p className="mx-auto">© 2021 All Rights Reserved By <a href="https://html.design/">Free Html Templates</a><br />

          Distributed By <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>

        </p>
      </div>
    </>
  )
}