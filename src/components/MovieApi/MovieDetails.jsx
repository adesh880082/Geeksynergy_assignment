import React, { useState, useEffect } from 'react'
import './MovieDetails.css'
import axios from 'axios';
import Card from './Card';

const MovieDetails = () => {

  const[data, setData] = useState();
  const[loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchData = async() => {
      setLoading(true);
      await axios.post("https://hoblist.com/api/movieList",{
              category:"movies",
              language:"kannada",
              genre:"all",
              sort:"voting"
      }).then((res)=>{
          setData(res.data.result);
          console.log("data :-", res);
      }).catch((err)=>{
          console.log(err);
      })
    setLoading(false);
    }
    fetchData();
  },[]);

    console.log("savedData :- ",data);

  return (
    <div className='container'>
     {
      loading ? (<div className='custom-loader'></div>):(<div className='gridMaker movieContainer'>
        {
          data.map((item, key)=>(
              <Card
                key={item._id}
                title={item.title}
                genre={item.genre}
                director={item.director}
                Starring={item.stars}
                language={item.language}
                totalVoted={item.totalVoted}
                views={item.pageViews}
                image={item.poster}
              />
          ))
        }
        </div>)
     }
    </div>
  )
}

export default MovieDetails