import { quizData } from "../../data/QuizData/QuizData";
import { Link } from "@tanstack/react-router";
import { Topic } from "./Topic";
import { useParams } from "@tanstack/react-router";

export const TopicList = ({ selectedSubjectId }) => {
  console.log("TopicList rendered with:", selectedSubjectId);

  if (!selectedSubjectId) return null;

  const subject = quizData.subjects.find(
    (s) => s.id === selectedSubjectId,
  );

  if (!subject) {
    console.error("Subject not found");
    return null;
  }

  return (
    <>
      {subject.topics.map(({ id, name }) => (
        <Link to="/quiz/$subjectId/$topicId" params={{subjectId:selectedSubjectId, topicId:id}} key={id}>
          <Topic name={name}></Topic>
        </Link>
      ))}
    </>
  );
};

export default TopicList;
