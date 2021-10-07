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
    const [key, setKey] = useState([])
    const location=useLocation()
   
    
    useEffect(()=>{
     
        axios.get(`/movie/${location.state.movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                setKey(response.data.results)
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
        height: '400px',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };

     
     
    return (
    <div>
      <div style={{backgroundImage:`url(${imageUrl+location.state.poster})`}} className="mainsec">
      
        <div className="leftsection">
           <img alt='img..' src={`${imageUrl+location.state.image}`} className="coverimage"/>
        </div>
        <div className="rightsection">
           <h1 className="moviename">{location.state.moviename}</h1>
           <h3 className="releasedate">{location.state.date} | Rated: {location.state.rating}/10 | {location.state.lang}</h3>
           <h3 className="overviewhead">Overview</h3>
           <p className="overview">{location.state.overview}</p>
           <h4 className="starring">Starring: {cast[0]?cast[0].original_name:null}, {cast[1]?cast[1].original_name:null}, {cast[2]?cast[2].original_name:null}</h4>
           
        </div>
      </div>
      <h2 className="casthead">CAST | <span className="videoname">{location.state.moviename}</span> </h2>
      <div className="cast">
           {
             cast.map((castobj)=>
             castobj.profile_path && <div>
                                      <img className="castcard" src={`${imageUrl+castobj.profile_path}`} alt='oops'/>
                                      <h4>{castobj.original_name}</h4>
                                      <h5>{castobj.character}</h5>
                                     </div>
                
             )
           }
      </div>
      <h2 className="videos">Videos | <span className="videoname">{location.state.moviename}</span> </h2>
      
      <div className="youtube">
                {key.map((keyobj)=>
                  <YouTube className="youtubecard" videoId={keyobj.key} opts={opts}/>) } 
      </div>
        
      <h2 className="crewmembers">CREW MEMBERS</h2> 
      <div className="crewsec"> 
          {
            crew.map((crewobj)=>
              crewobj.profile_path && <div>
                                       <img className="crewcard" src={`${imageUrl+crewobj.profile_path}`} alt='ops' />
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
