import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import PostsList from './componets/Posts/PostsList';
import PostDetail from './componets/Posts/PostDetail';
import PostForm from './componets/Posts/PostForm';

class App extends Component {

    /**
     * '/' PostList
     *
     * '/posts/detail/:id'
     *
     * */

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Mi Listado de Posts</h2>
                </div>
                <div className="App-intro">
                    <Router>
                        <div>
                            <Route path={'/'} exact={true} component={PostsList}/>
                            <Route
                                path={'/posts/detail/:postId'}
                                exact={true}
                                render={({match}) => {
                                    return <PostDetail postId={match.params.postId}/>
                                }}
                            />
                            <Route
                                path={'/posts/add'}
                                exact={true}
                                component={PostForm}
                            />
                            <Route
                                path={'/posts/edit/:postId'}
                                exact={true}
                                render={({match}) => {
                                    return <PostForm postId={match.params.postId}/>
                                }}
                            />

                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
