import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './css/App.css';
import Title from './components/Title'
import Photowall from './components/Photowall'
import AddPost from './components/AddPost'
import ViewPost from './components/ViewPost'


class App extends React.Component{
  state = {loading: true}
  
  componentDidMount(){
    this.props.startLoadingPosts().then(() => {
      this.setState({
        loading: false
      })
    })
    this.props.startLoadingComments()
  }
  render() {
    return (
      <div>
        <Link to = "/">
          <Title title = {'PhotoWall'}/>
        </Link>            
        
        <Route exact path = "/" render = {() => (
          <div>
            <div className = "text-center">
              <Link to = '/addPost' >
                <i className = "fas fa-plus-circle text-8xl"></i>
              </Link>
            </div>
            <Photowall {...this.props}  />
          </div>
        )} />    
          
        <Route path = "/addPost" render = {({history}) => (
          <div>
            <AddPost {...this.props} history = {history} />
          </div>
        )} />

        <Route path = "/view/:id" render = {(params) => (
          <ViewPost {...this.props} {...params} loading = {this.state.loading} />
        )} />
        {/* <Route path = "somePath" component = {someComponent} />   */}
      </div>
    );
  }
}


export default App;
