import React from 'react'
import axios from '../../axios'
import {useState,useEffect} from 'react'
import {API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube';
import './Castcrew.css'
import {useLocation} from 'react-router-dom'
import {imageUrl} from '../../constants/constants'


function Castcrew() {
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const [key, setKey] = useState('')
    const location=useLocation()
   
    
    useEffect(()=>{
     
        axios.get(`/movie/${location.state.movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                setKey(response.data.results[0])
            }
            else{
              alert("oops..trailer not found")
            }
       
        })
    },[])

    useEffect(()=>{

        axios.get(`/movie/${location.state.movieId}/credits?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setCast(response.data.cast)    
        })
    },[])

    useEffect(()=>{

      axios.get(`/movie/${location.state.movieId}/credits?api_key=${API_KEY}&language=en-US`).then((response)=>{
          setCrew(response.data.crew)
               
             

      })
    },[])

    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };
     
   

    return (
  
      <div style={{backgroundImage:`url(${imageUrl+location.state.poster})`}} className="mainsec">
      
       
        <img alt='img..' src={`${imageUrl+location.state.image}`} className="coverimage"/>
        
        <div className="rightsection">
           <h1 className="moviename">{location.state.moviename}</h1>
           <h3 className="releasedate">Release Date: {location.state.date}</h3>
           <h3 className="rating">Rating: {location.state.rating}</h3>
           <h3 className="overviewhead">Overview</h3>
           <p className="overview">{location.state.overview}</p>
           <h3 className="overviewhead">CAST</h3>
           <div className="casts">
           {
             cast.map((castobj)=>
                  <div>
                  <img className="castcard" src={`${imageUrl+castobj.profile_path}`} alt='oops'/>
                  <h4>{castobj.original_name}</h4>
                  <h5>{castobj.character}</h5>
                  </div>
                
             )
           }
           </div>
        </div>

        <div className="youtube">
                {key && <YouTube videoId={key.key} opts={opts}/> } 
        </div>
        
       
        <div className="crewsec"> 
          {
            crew.map((crewobj)=>
                <div>
                <img className="crewcard" src={`${imageUrl+crewobj.profile_path}`}  />
                <h4>{crewobj.original_name}</h4>
                <h5>{crewobj.job}</h5>
                </div>
               
            )
          }
         
        
        </div>



    </div>
    
    
    )

    }
export default Castcrew
