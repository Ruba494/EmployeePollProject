import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import "./styles/Logout.css";

export const LogOut = (props) => {
  const navigate = useNavigate();
  const { name, avatarURL } = props;

  const handleLogout = () => {
    props.dispatch(setAuthedUser(null));
    navigate("/");
  };

  return (
    <div className="container">
      <div className="user-profile">
        <div className="user-profile-avatar">
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className="user-avatar"
          />
          {/* <div
              className="user-avatar"
              style={{
                width: 20,
                height: 20,
                backgroundImage: `url(${avatarURL})`,
              }}
          ></div> */}
        </div>
        <div className="user-card">
          <div className="user-info">
            <div className="user-name-container">
              <span className="user-name">{name}</span>
            </div>
            <div className="btn-container">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  const user = users[authedUser];
  const { name, avatarURL } = user;
  return {
    name,
    avatarURL,
  };
};

export default connect(mapStateToProps)(LogOut);
