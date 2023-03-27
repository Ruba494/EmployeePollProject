import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { handleSaveAnswer } from "../actions/shared.js";
import { formatDate } from "../utils/helpers";
import Nav from "./Nav";

function PollDetail({ questions, authedUser, users }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { question_id } = useParams();
  let question = questions.find((question) => question.id === question_id.trim());
  let author = users[question.author];
  let timestamp = question.timestamp;

  const [selectOption, setSelectOption] = useState({
    optionOne: "",
    optionTwo: "",
  });


  const selectedOption = {
    authedUser: authedUser,
    question_id: question_id,
    answer: selectOption.optionOne === "selected" ? "optionOne" : "optionTwo",
  };

  const optionOneStats = () => {
    return (
        (question.optionOne.votes.length /
            (question.optionOne.votes.length + question.optionTwo.votes.length)) *
        100
    ).toFixed(2);
  };

  const optionTwoStats = () => {
    return (
        (question.optionTwo.votes.length /
            (question.optionOne.votes.length + question.optionTwo.votes.length)) *
        100
    ).toFixed(2);
  };
  const onAnswerSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSaveAnswer(selectedOption));
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div>
      <div className='container'>
        <div className='question-info'>
          <img
            src={author.avatarURL}
            alt={author.name}
            className='author-img'
          />
          <h4>{author.name}</h4>
          <h5>Asked at: {formatDate(timestamp)}</h5>
        </div>
        <form onSubmit={onAnswerSubmit}>
          <div className='form-group'>
            <h2>Would you rather:</h2>
            <div className='form-check'>
              <input
                type='radio'
                name='option'
                value='optionOne'
                className='form-check-input'
                checked={selectOption.optionOne === "selected"}
                onChange={(e) => setSelectOption({ optionOne: "selected" })}
              />
              <label>{question.optionOne.text}</label>
            </div>
            <div className='form-check'>
              <input
                type='radio'
                name='option'
                value='optionTwo'
                className='form-check-input'
                checked={selectOption.optionTwo === "selected"}
                onChange={(e) => setSelectOption({ optionTwo: "selected" })}
              />
              <label>{question.optionTwo.text}</label>
            </div>
            <button
              className='btn'
              type='submit'
              disabled={
                selectOption.optionOne === "" || selectOption.optionTwo === ""
              }
            >
              Submit
            </button>
          </div>
        </form>
        <div className='card'>
          {question.optionOne.votes.includes(authedUser) && (
              <div>
                <h5>
                  {optionOneStats()}% of employees selected to{" "}
                  {question.optionOne.text}
                </h5>
                <h5 className='votes'>
                  {question.optionOne.votes.length} users voted for this answer
                </h5>
              </div>
          )}
          {question.optionTwo.votes.includes(authedUser) && (
              <div>
                <h5>
                  {optionTwoStats()}% of employees selected to{" "}
                  {question.optionTwo.text}
                </h5>
                <h5 className='votes'>
                  {question.optionTwo.votes.length} users voted for this answer
                </h5>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    questions: Object.keys(questions).map((key) => questions[key]),
  };
};

export default connect(mapStateToProps)(PollDetail);
