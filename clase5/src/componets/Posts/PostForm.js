import React from 'react';

class PostForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            post: {
                title: '',
                body: '',
            },
            saving: false,
        }
    }

    componentDidMount(){
        if(this.props.postId){
            console.log('Edicionnnn');
            fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.postId)
                .then(response => response.json())
                .then( post => this.setState({post: post}))
        } else {
            console.log('Creacion!');
        }
    }

    save = () => {
        console.log('Quiero salvar!');
        this.setState({saving: true});

        // Creacion
        fetch(
            'https://jsonplaceholder.typicode.com/posts/' + (this.props.postId ? this.props.postId : ''),
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                method: (this.props.id ? 'PUT': 'POST'),
                body: JSON.stringify(this.state.post)
            }
        )
            .then(response => response.json())
            .then(post => {
                console.log('Salve exito');
                this.setState({saving: false});
                console.log(post);
                alert(this.props.postId ? 'Se salvo con exito' : 'Cree con exito!');
                window.location.href = '/';
            })
            .catch( e => {
                alert('algo fallo');
                this.setState({saving: false})
            });





    };

    handleName = (event) => {
        console.log(event.target.value);
        let aux = this.state.post;
        aux.title = event.target.value;
        this.setState({post: aux});
    };

    handleBody = (event) => {
        console.log(event.target.value);
        let aux = this.state.post;
        aux.body = event.target.value;
        this.setState({post: aux});
    };

    render(){
        return(
            <div>
                <h3>{this.props.postId ? 'Editar Post' : 'Crear nuevo Post!'}</h3>
                <input
                    type="text"
                    disabled={this.state.saving}
                    placeholder="Titulo"
                    value={this.state.post.title}
                    onChange={this.handleName}
                />
                <br/>
                <input
                    type="text"
                    disabled={this.state.saving}
                    placeholder="Cuerpo del Mensaje"
                    value={this.state.post.body}
                    onChange={this.handleBody}
                />
                <br/>
                <button onClick={this.save}>{ this.props.postId ? 'Salvar!' : 'Crear!'}</button>
            </div>
        )
    }

}

export default PostForm;