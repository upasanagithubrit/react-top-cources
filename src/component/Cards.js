import React from "react";
import Card from'./Card';
import './cards.css'
import {useState} from "react"
const Cards=(props)=>
    {
        let courses=props.courses;
        let category=props.category;

        let [likedcources,setLikedcources]=useState([]);

         function getcourses(){
          if(category=== "All")
          {
            let allCourses=[];
            Object.values(courses).forEach(array=>          //array ke ander array hai to data nikalne ke liye 
                {
                    array.forEach(courseData=>
                        {
                            allCourses.push(courseData);
                        }
                    )
                }
            )
            return allCourses;
          }
          else{
            return courses[category]
          }
         }
        return(
            <div className="cards">
                {
                    getcourses().map((course)=>(
                        <Card 
                        key={course.id}
                         course={course} 
                         likedcources={likedcources}
                         setLikedcources={setLikedcources}/>
                    ))
                     
                }

            </div>
        )
    }

    export default Cards;


