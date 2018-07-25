import React, {Component} from 'react';
import UserList from '../components/UserList';
import {connect} from 'react-redux';
import {fetchUsers, trackPages, goBackPages} from '../actions';
import {Link} from 'react-router-dom';
import './Users.css';
import createHistory from "history/createBrowserHistory";

const history = createHistory();

class Users extends Component {

  constructor() {
    super();
    this.state = {
      nextPage: 0
    }
  }

  getUsers(sinceParam) {
    this.props.dispatch(fetchUsers(`/api/users?since=${sinceParam}`));
  }

  componentDidMount() {
    if (this.props.sinceParam) {
      this.setState({nextPage: this.props.sinceParam});
      this._navigate(this.props.sinceParam);
    } else {
      this._navigate(this.state.nextPage);
    }
  }

  _navigate(nextPage) {

    // Track pages to navigate back
    this.props.dispatch(trackPages(nextPage))

    this.getUsers(nextPage);
    history.push(`/users/${nextPage}`)
  }

  _goBack(page) {

    const param = history.location.pathname.match(/\d+/);

    this.setState({
      nextPage: this.props.pages[this.props.pages.length - 1]
    })

    if(this.props.pages.length < 1 && param > 30){
      this.props.dispatch(trackPages(param - 30));
    }
    this.props.dispatch(goBackPages());

    const whereToGo = this.props.pages[this.props.pages.length - 1] || ((param - 30) > 30 ? param - 30 : 0)

    history.push(`/users/${whereToGo}`)

    this.getUsers(whereToGo);
  }

  render() {
    const users = this.props.users.users;

    if(!this.props.nextPage){
      console.log(this.props.users)
      return (
        <div className='container'>Sorry, there was an error getting user list...</div>
      )
    }

    const nextPage = this.props.nextPage.substring(this.props.nextPage.indexOf('=') + 1);

    return (
      <div className='container'>
        <div className='nav-button'>
          <hr></hr>
          <button className='btn btn-default' onClick={this._goBack.bind(this)}>Go Back</button>
          <button className='btn btn-default' onClick={this._navigate.bind(this, nextPage)}>Next</button>
          <hr></hr>
        </div>
        <UserList users={users}/>
        <div className='nav-button'>
          <hr></hr>
          <button className='btn btn-default' onClick={this._goBack.bind(this)}>Go Back</button>
          <button className='btn btn-default' onClick={this._navigate.bind(this, nextPage)}>Next</button>
          <hr></hr>
        </div>
      </div>)
  }
}

function mapStateToProps({users, nextPageLink, pages}) {
  return {
    users,
    nextPage: users.nextPageLink,
    pages: pages.pages
  }
}

export default connect(mapStateToProps)(Users);
