import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import './Card.css'

const Card = ({
              title,
              genre,
              director,
              Starring,
              language,
              totalVoted,
              views,
              image
}) => {

    const [count, setCount] = useState(1);

  return (
    <div className='card-container'>

        <div className='container2'>
            <div className='innerContainer1'>
                <div onClick={()=>setCount((value)=> value=value+1)}><AiFillCaretUp className='aero'/></div>
                <div style={{fontSize: '35px', display: 'flex', alignContent: 'center', justifyContent:'center'}}> {count} </div>
                <div onClick={()=>setCount((value)=> value=value-1)}><AiFillCaretDown className='aero'/></div>
                <div style={{fontSize: '1.5rem', color:'black', fontWeight:'bold'}}>Votes</div>
            </div>
            <div className='innerContainer2'>
                <img src={image} alt=''style={{width: '150px', height: '190px', margin: '5px 20px', objectFit: 'cover'}}/>
            </div>
            <div className='innerContainer3'>

                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'black'}}>
                    {title}
                </div>

                <div style={{margin: 0, padding: 0}}>
                <p style={{fontSize: '1rem', color: 'gray', margin: '5px', padding: 0}}>
                    Genre:{" "}
                    <span style={{fontSize: '1rem', color:'black'}}>
                        {genre}
                    </span>
                </p>
                </div>

                <div style={{margin: 0, padding: 0}}>
                <p style={{fontSize: '1rem', color: 'gray', margin: '5px', padding: 0}}>
                    Director:{" "}
                    <span style={{fontSize: '1rem', color:'black'}}>
                        {director}
                    </span>
                </p>
                </div>

                <div style={{margin: 0, padding: 0}}>
                <p style={{fontSize: '1rem', color: 'gray', margin: '5px', padding: 0}}>
                    Starring:{" "}
                        {
                            Starring.map((item,key)=>(
                                <span style={{fontSize: '1rem', color:'black'}}>{item},</span>
                            ))
                        }
                </p>
                </div>

                <div style={{margin: 0, padding: 0}}>
                <p style={{fontSize: '1rem', color: 'gray', margin: '5px', padding: 0}}>
                    Mins | {language} | 2 Apr
                </p>
                </div>

                <div style={{margin: 0, padding: 0}}>
                <p style={{fontSize: '1rem', color: 'blue', margin: '5px', padding: 0}}>
                    {views} Views | Voted by {totalVoted}
                </p>
                </div>
            </div>
        </div>
        <div className='Trailer'> Watch Trailer </div>
        <div className='shadow'></div>

    </div>
  )
}

export default Card