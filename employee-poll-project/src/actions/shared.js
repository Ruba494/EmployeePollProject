import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
import {createQuestion, receiveUsers, saveAnswer} from "./users";
import {addQuestion, receiveQuestions, saveVote} from "./questions";
import {showLoading, hideLoading} from "react-redux-loading-bar";

export const handleInitialData = () => async (dispatch) => {
    dispatch(showLoading());
    const users=await _getUsers()
    const questions=await _getQuestions()
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
};

export const handleSaveQuestionAnswer = (questionId, answerId) => (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    dispatch(saveAnswer(authedUser, questionId, answerId));
    dispatch(saveVote(authedUser, questionId, answerId));
    dispatch(hideLoading());
    return _saveQuestionAnswer({authedUser, questionId, answerId});
};

export const createPoll = (optionOne, optionTwo) => async (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    try {
        const question = await _saveQuestion({
            author: authedUser,
            optionOne,
            optionTwo,
        });
        dispatch(createQuestion(question));
        dispatch(addQuestion(question));
    } catch (e) {
        console.error("Error in createPoll: ", e);
    }
    dispatch(hideLoading());
};