import { saveQuestion } from "../utils/api";
import { addQuestionToUser } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(q) {
  return {
    type: ADD_QUESTION,
    q,
  };
}

export function handleAddQuestion(q) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion(q).then((q) => {
      dispatch(addQuestion(q));
      dispatch(addQuestionToUser(q));
      dispatch(hideLoading());
    });
  };
}

export function savePollAnswer({ authedUser, question_id, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    question_id,
    answer,
  };
}
