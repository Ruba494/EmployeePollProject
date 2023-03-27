import React, { Fragment,useEffect } from "react";
import { connect } from "react-redux";
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import LeadBoard from './LeadBoard'
import NewPoll from './NewPoll'
import Poll from './Poll'
import LogIn from './LogIn'
import Nav from './Nav'
import {handleInitialData} from "../actions/shared";


const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <>
      <Fragment>
        <Nav />
        <div>
          <Routes>
            {props.authedUser === null  ?  (
              <>
                <Fragment>
                  <Route path="*" element={<LogIn />} />
                </Fragment>
              </>
            ):(
              <>
                <Fragment>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/leaderboard" element={<LeadBoard />} />
                  <Route path="/add" element={<NewPoll />} />
                  <Route path="/questions/:question_id" element={<Poll />} />
                </Fragment>
              </>
            )}
          </Routes>
        </div>
      </Fragment>
    </>
  );
};

const mapStateToProps = ({ authedUser}) => ({
  authedUser,
});
export default connect(mapStateToProps)(App);
