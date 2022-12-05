import React from 'react';

const Register = () => {
    const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  function saveUser(e){
    e.preventDefault();
  // console.log(fname,lname,email,password);
  let data= {name,email,password,role:"user", isActive:true};
  fetch("http://app.shibajidebnath.com/register",{
    method:"post",
    headers: {
      "accept":"aplication/json",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((result)=>{
console.log(result.json());
  })
  }
  return (
    <div className="container-fluid">
            <h1>sign up</h1>

            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="fullname" aria-label="fullname" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Set Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remenber me</label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={saveUser}>Register</button>
            </form>
          </div>
  )
}

export default Register;