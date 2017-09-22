import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';


class PostsList extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({posts: posts}))
    }

    render(){
        return (
            <div>
                <Link to={'/posts/add'}>Crear un Nuevo Post</Link>
                <hr/>
                {
                    this.state.posts ?
                        this.state.posts.map( (p,index) => {
                            return (
                                <PostItem key={index}  {...p}/>
                            )
                        })
                        :
                        'Cargando......'
                }
            </div>
        )
    }
}

export default PostsList;