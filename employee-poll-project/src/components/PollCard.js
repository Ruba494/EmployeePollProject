import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helpers";
import "./styles/Poll.css";

export const PollCard = (props) => {
  const navigate = useNavigate();

  const details = (e, id) => {
    e.preventDefault();
    navigate(`/questions/:question_${id}`);
  };

  if (!props.question === null) {
    return <>error</>;
  }

  const { name, avatar, optionOne, optionTwo, timestamp, question, id } =
    props.question;

  return (
    <Link to={`/questions/${id}`}>
      <div className="question-container">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="question-info">
          <div>
            <span className="author">{name}</span>
            {question && (
              <button onClick={(e) => details(e, question.id)}></button>
            )}
            <p>{`Would you rather ${optionOne.text.text} or ${optionTwo.text.text}?`}</p>
            <p>Asked at: {formatDate(timestamp)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    users,
    question: question && formatQuestion(question, users[question.author]),
  };
};

export default connect(mapStateToProps)(PollCard);
