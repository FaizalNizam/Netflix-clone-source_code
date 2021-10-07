import React from 'react'
import './Card.css'
import {useState,useEffect} from 'react'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
import {useHistory} from 'react-router-dom'




function Card(props) {
    const [movie, setMovie] = useState([])
    const history=useHistory()

    useEffect(() => {
       axios.get(props.url).then((response)=>{
          setMovie(response.data.results) 

       })

    },[props.url])

    return (
        
        <div className="row">
            <h2 className="genre">{props.title}</h2>
            <div className="posters">
                {movie.map((obj)=>
                    <div>
                    <img onClick={() => {
                        history.push({
                            pathname: '/crew', state: { movieId: obj.id, poster: obj.backdrop_path, image:obj.poster_path, moviename:obj.original_title, date:obj.release_date, overview:obj.overview, rating:obj.vote_average,lang:obj.original_language}
                        })
                    } } className="poster" alt='pos' src={`${imageUrl + obj.backdrop_path}`} title={obj.name} />
                    <h4 className="h4align">{obj.original_title}</h4>
                    </div>
                     
                )} 
            </div>
         
          
            
        </div>
        
    )
}

export default Card
