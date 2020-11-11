import React from 'react'


const Post = (props) => {
    return (
        
        <div className="container">
            <div>
             
        <div className="post" onClick={()=>props.open(props.data.idMeal)}>
                    <div className="img-thumb">
                        <img src={props.data.strMealThumb} alt="Dessert Pie" />
                     </div>
                    <div className="content">
                <p className="title">{props.data.strMeal}</p>
                {/* <p className="desc"> {props.data.strMealThumb} </p> */}
              {/* <button className="remove" onClick= {()=> props.remove(props.data.id)}>Remove</button> */}
                    </div>

                </div>
                </div>
        </div>
    
    )
}

export default Post;