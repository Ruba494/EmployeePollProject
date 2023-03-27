import { getInitialData, saveAnswer } from "../utils/api";
import { receiveQuestions, savePollAnswer } from "./questions";
import { receiveUsers, addAnswerToUser } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());

    return await getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleSaveAnswer(info) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(addAnswerToUser(info));
    dispatch(savePollAnswer(info));

    return await saveAnswer(info).catch((e) => {
      dispatch(savePollAnswer(info));
      dispatch(addAnswerToUser(info));
      console.warn("Error in Save Answer: ", e);
    });
  };
}
