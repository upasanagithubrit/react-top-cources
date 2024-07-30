import React from "react";
import './filter.css'

const Filter=(props)=>
    {
        let filterData=props.filterData;
        let category=props.category;
        let setCategory=props.setCategory;

        function filterhandler(title){
            setCategory(title);
        }
        return(
            <div  className="filter">
               
               {
                filterData.map((data)=>
                (
                    <button className={`button ${category === data.title? "active" : "dull"}`}
                    Key={data.id}
                    onClick={()=>filterhandler(data.title)} >{data.title} </button>
                ))
               }
            </div>
        )
    }

    export default Filter;


