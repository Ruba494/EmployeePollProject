import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PollCard from "./PollCard";
import "./styles/Poll.css";

const Home = ({ authedUser, questions }) => {
  const [newQuestions, setNewQuestions] = useState([]);
  const [completedQuestions, setCompletedQuestions] = useState([]);

  useEffect(() => {
    setCompletedQuestions(
      questions
        .filter(
          (question) =>
            question.optionOne.votes.includes(authedUser) ||
            question.optionTwo.votes.includes(authedUser)
        )
        .sort((a, b) => b.timestamp - a.timestamp)
    );

    setNewQuestions(
      questions
        .filter(
          (question) =>
            !question.optionOne.votes.includes(authedUser) &&
            !question.optionTwo.votes.includes(authedUser)
        )
        .sort((a, b) => b.timestamp - a.timestamp)
    );
  }, [authedUser, questions]);

  const [activeTab, setActiveTab] = useState("");
  return (
    <>
      <div>
        <div>
          <div className="q-container">
            <div>
              <div className={'title-wrapper'} onClick={()=>setActiveTab('new')}>
                <h3>New Questions</h3>
              </div>
              {(activeTab==='new'||activeTab==='')&&
                  <ul className="questions-container-list">
                    {newQuestions.map((question) => {
                      return (
                          <li key={question.id} className="question-card">
                            <PollCard id={question.id} />
                          </li>
                      );
                    })}
                  </ul>
              }
            </div>
          </div>
        </div>
        <div>
          <div className="q-container">
            <div>
              <div className={'title-wrapper'}  onClick={()=>setActiveTab('completed')}>
                <h3>Completed Questions</h3>
              </div>
              {activeTab === 'completed' &&
                  <ul className="questions-container-list">
                    {completedQuestions.map((question) => {
                      return (
                          <li key={question.id} className="question-card">
                            <PollCard id={question.id}/>
                          </li>
                      );
                    })}
                  </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ questions, authedUser }) => ({
  questions: Object.values(questions),
  authedUser,
});

export default connect(mapStateToProps)(Home);
