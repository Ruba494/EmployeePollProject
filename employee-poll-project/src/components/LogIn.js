import React, { useState ,useEffect} from "react";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";

export const LogIn = ({users,dispatch}) => {

    const [selectUser, setSelectUser] = useState("");
    
    const handleLogin = (e) => {
      e.preventDefault();
      dispatch(setAuthedUser(selectUser));
    };
  
    const disabled = selectUser === "";
    
    return (
      <div className='login-container'>
        <form className='login-form'>
          <h3 className='login-title'>Employee Polls</h3>
          <h5>Please select a user:</h5>
          <div className='users-container'>
            {users.map((user) => {
              return (
                <div className='user-card' key={user.id}>
                  <img
                    src={user.avatarURL}
                    alt={user.name}
                    className='user-img'
                  />
                  <input
                    type='radio'
                    name='user'
                    className='user-select'
                    value={user.id}
                    onChange={(e) => setSelectUser(e.target.value)}
                  />
                  <label>{user.name}</label>
                </div>
              );
            })}
          </div>
          <button className='btn' onClick={handleLogin} disabled={disabled}>
            Log in
          </button>
        </form>
      </div>
    );
  };
  
  const mapStateToProps = ({ users}) => ({
    users:Object.keys(users).map((id) => users[id]),
  });

  export default connect(mapStateToProps)(LogIn);
