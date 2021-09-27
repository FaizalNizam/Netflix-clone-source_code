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
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj)=>
                    
                    <img onClick={() => {
                        history.push({
                            pathname: '/crew', state: { movieId: obj.id, poster: obj.backdrop_path, image:obj.poster_path, moviename:obj.original_title, date:obj.release_date, overview:obj.overview, rating:obj.vote_average}
                        })
                    } } className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.poster_path}`} title={obj.name} />
                     
                )} 
            </div>
         
          
            
        </div>
        
    )
}

export default Card
