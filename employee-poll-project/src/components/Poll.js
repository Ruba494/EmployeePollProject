import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PollDetail from "./PollDetail";

function Poll(props) {
  const { questionArray } = props;
  const { question_id } = useParams();
  const id = question_id.replace(":question_", "");

  return questionArray.includes(id) ? <PollDetail id={id} /> : <>error</>;
}

const mapStateToProps = ({ questions }) => {
  const questionArray = Object.keys(questions);
  return {
    questionArray,
  };
};

export default connect(mapStateToProps)(Poll);
