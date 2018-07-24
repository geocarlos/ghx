import React, {Component} from 'react';
import UserList from '../components/UserList';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';
import {Link} from 'react-router-dom';
import './Users.css';
import createHistory from "history/createBrowserHistory";

const history = createHistory();

class Users extends Component {

  constructor() {
    super();
    this.state = {
      nextPage: 0,
      previous: []
    }
  }

  getUsers(sinceParam) {
    this.props.dispatch(fetchUsers(`http://localhost:3000/api/users?since=${sinceParam}`));
  }

  componentDidMount() {
    if (this.props.sinceParam) {
      this.setState({nextPage: this.props.sinceParam});
    }
    this._navigate(this.state.nextPage);
  }

  _navigate(nextPage) {
    this.setState({
      previous: this.state.previous.concat([nextPage])
    })

    this.getUsers(nextPage);
    history.push(`/users/${nextPage}`)
  }

  _goBack(page) {
    history.goBack();
    this.setState({
      nextPage: this.state.previous.length - 1
    })
    this.setState((state) => {
      state.previous.splice(state.previous.length - 1, 1);
      return state.previous;
    })
    this.getUsers(this.state.previous[this.state.previous.length - 1]);
  }

  render() {
    const users = this.props.users.users;
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

function mapStateToProps({users, nextPageLink}) {
  return {users, nextPage: users.nextPageLink}
}

export default connect(mapStateToProps)(Users);
