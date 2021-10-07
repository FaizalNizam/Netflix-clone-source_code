import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../navBar/Navbar.css'
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'
function Navbar2() {

    const [searchmovie, setSearchMovie] = useState([])
    const history=useHistory();

     function Search(event){
        axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${event.target.value}`).then((response)=>{
            setSearchMovie(response.data.results[0])
        }) 
     }

     function getMovieId(){
         console.log(searchmovie.id)
         history.push({pathname:'/crew2', state:{movieId:searchmovie.id, poster:searchmovie.backdrop_path, image:searchmovie.poster_path, moviename:searchmovie.original_title, date:searchmovie.release_date, overview:searchmovie.overview, rating:searchmovie.vote_average,lang:searchmovie.original_language}})

     }

    return (
        <div className="navbar">
            <a href="http://localhost:3000/netflix-clone"> <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="oopss" /> </a>
            <div className="right">
            <input onChange={Search} className="ultsm" type="text" placeholder="UNLIMITED TV SHOWS & MOVIES" />
            <button className="searchbutton" onClick={getMovieId}>search</button>
            <button className="buttonjoin">JOIN NOW</button>
            <button className="buttonsign">SIGN IN</button>
            </div>
            
        </div>
    )
}

export default Navbar2
