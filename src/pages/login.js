import {useState} from "react";
export default function Login() {
  // const [fname,setfname]= useState("");
  // const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  function loginUser(e){
    e.preventDefault();
  // console.log(fname,lname,email,password);
  let data= {email,password};
  fetch("http://app.shibajidebnath.com/login",{
    method:"post",
    headers: {
      "accept":"aplication/json",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((result)=> result.json()).then((data)=>{
    console.log(data);
  })
}
  return (
    <>
      <div className="container-fluid bg-dark text-light">
        <div className="container pt-5 pb-5" style={{width: "50%"}}>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name="email" value={email} onChange={(e=>setEmail(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" name="password" value={password} className="form-control" id="exampleInputPassword1" onChange={(e=>setPassword(e.target.value))}/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remenber me</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={loginUser}>Log in</button>
          </form>
          
        </div>
      </div>
    </>
  )
}