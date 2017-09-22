import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
    return (
        <div>
            <h1>{ props.title}</h1>
            <br/>
            <p>{props.body}</p>
            <Link to={'/posts/detail/' + props.id}>Detalle de Post</Link>
            <Link to={'/posts/edit/' + props.id}> Editar</Link>
            <hr/>
        </div>
    )
};

export default PostItem;