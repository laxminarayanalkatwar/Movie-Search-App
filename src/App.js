import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./App.css"

const  App = ()=> {

    const [movie, setMovie] = useState([])
    const [text, setText] = useState("")

    

    const getMovie = (e) =>{
      e.preventDefault();
      axios.get(`https://www.omdbapi.com/?s=${text}&apikey=b7ab0b87`).then((res)=>{
        console.log(res.data.Search);
        const time  = new Date()
        time.setMonth(8)
        console.log("today=",time);
        setMovie(res.data.Search)
      })
    }
    
    const changeText = event =>{
        setText(event.target.value)
      }
return (
  <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Movie  App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://www.omdbapi.com/">About</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search" onSubmit={getMovie}>
        <input className="form-control me-2" type="search" placeholder="Search Movie" aria-label="Search" onChange={changeText} value={text}/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="container ">
  <div className="row">
  {
    movie.map((value,index)=>{
      return(
        <div key={index} className="col-4 mb-4"  >
        <div className="card" style={{width: "18rem" }}>
      <img src={value.Poster} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title" >{value.Year}</h3>
        <h4 className="card-text" >{value.Title}</h4>
      </div>
    </div>
        </div>
      )
    })
  }
  </div>
</div>
</>    
)
}

export default App;

