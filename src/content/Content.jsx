import React, { Component, Fragment } from 'react';
import './Content.css';
import Post from './Post';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



class Content extends Component{
    state = {
        post: []
        
    }

    getPostApi = () => {
        axios.get('http://localhost:3004/posts')
        .then((res) => {
             //console.log(res.data);
            this.setState({
                post: res.data
            })
    })
        
    }
    handleOpen = (data => {
        console.log(data)
        //  <Ingredient />;
       
    })
    
    
    componentDidMount() {

        this.getPostApi();
        
    }
    render() {
        return (
            <Fragment>
                <p className="section-title">MENU</p>
                <div className="content-wrapper">
                {
                    this.state.post.map(post =>{
                        return <Post
                            key={post.idMeal}
                           data={post}
                        
                            open={this.handleOpen}
                        />
                    })
                    }
                    </div>
                
            </Fragment>
        )
    }
}

export default Content;