import React from "react";
import { toast } from "react-toastify";
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import './card.css'

const Card=(props)=>
    {
        let course=props.course;                    
        let likecources=props.likedcources;            // for toast record
        let setLikedcources=props.setLikedcources;      // usestate function for toast record
        function handleclick()                // jab favourite par click hoga 
        {
            if(likecources.includes(course.id))
            {
                // agar course like hai to ye chalega 
                setLikedcources((prev)=>prev.filter((cid)=>(cid!==course.id)))
                toast.warning("Liked removed")

            }
            else{

                // course unlike hai to ye chalega 
                if(likecources.length==0)
                    setLikedcources([course.id]);
                else{
                    setLikedcources((prev)=>[...prev,course.id])

                }
                toast.success("liked")

            }

        }
        return(
            <div className="card">
                <div className="img-cover">
                 <img src={course.image.url}/>
                 <div className="fav">
                    <button onClick={handleclick}>
                        {
                            likecources.includes(course.id)?
                            (<FcLike/>):
                            (<FcLikePlaceholder/>)
                        }
                        
                        </button>
                 </div>
                 </div>
                 <div>
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                 </div>

            </div>
        )
    }

    export default Card;


