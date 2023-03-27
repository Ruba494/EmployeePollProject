import React from 'react'
import {Link} from 'react-router-dom'
import LogOut from './LogOut'
import { connect } from "react-redux";


export const Nav = (props) => {

    return <nav className='nav'>
        <ul>
            <li key='home'>
                <Link to='/'>Home</Link>
            </li>
            <li key='leadBoard'>
                <Link to='/leaderboard'>Lead Board</Link>
            </li>
            <li key='new'>
                <Link to='/add'>Lead Board</Link>
            </li>
        </ul>
        <div>
        {props.authedUser === null  ? <></>:<LogOut />}
      </div>
    </nav>
  
}
const mapStateToProps = ({ authedUser}) => ({
    authedUser,
  });

export default connect(mapStateToProps)(Nav);
