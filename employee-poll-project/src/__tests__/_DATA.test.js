import { _saveQuestion } from "../utils/_DATA";
import { _saveAnswer } from "../utils/_DATA";

jest.setTimeout(30000);

describe("_saveQuestion", () => {
  it("should save a question", async () => {
    const question = {
      optionOneText: "optionOneText",
      optionTwoText: "optionTwoText",
      author: "author",
    };
    const result = await _saveQuestion(question);
    expect(result.author).toEqual("author");
    expect(result.optionOne.text).toEqual("optionOneText");
    expect(result.optionTwo.text).toEqual("optionTwoText");
  });

  it("should throw an error if one of the required fields is missing", async () => {
    const question = {
      optionOneText: "",
      optionTwoText: "",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveAnswer", () => {
  it("should return true when correct", async () => {
    const answer = _saveAnswer({
      authedUser: "tylermcginnis",
      question_id: "vthrdm985a262al8qx3do",
      answer: "optionTwo",
    });

    expect(answer).toBeInstanceOf(Promise);
    await expect(answer).resolves.toEqual(true);
  });

  it("should throw an error if one of the required fields is missing", async () => {
    const question = {
      authedUser: "user",
      question_id: "question_id",
    };
    await expect(_saveAnswer(question)).rejects.toEqual(
      "Please provide authedUser, question_id, and answer"
    );
  });
});
