import { quizData } from "../../data/QuizData/QuizData";
import { Topic } from "./Topic";

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
        <Topic key={id} name={name} />
      ))}
    </>
  );
};

export default TopicList;
