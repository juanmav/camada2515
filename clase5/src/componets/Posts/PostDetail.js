import React from 'react';
import { Link } from 'react-router-dom';

class PostDetail extends React.Component {

    constructor(props){
        super(props);
        // props.id ... tengo el id del post.
        this.state = {

        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.postId)
            .then(response => response.json())
            .then(post => this.setState({post: post}));
    }

    render(){
        console.log(this.state.post);
        return (
            <div>
                {
                    this.state.post ?
                        (
                            <div>
                                <label>Titulo:</label>
                                { this.state.post.title}
                                <br/>
                                <label>Cuerpo:</label>
                                {this.state.post.body}
                                <label>UserId:</label>
                                {this.state.post.userId}
                                <br/>
                                <Link to={'/'}>Volver</Link>
                            </div>
                        )
                        :
                        'Cargando....'
                }
            </div>
        )
    }
}

export default PostDetail;