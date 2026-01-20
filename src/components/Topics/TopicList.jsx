import { quizData } from "../../data/QuizData/QuizData";
import { Topic } from "./Topic";

const subject = quizData.subjects

export const TopicList = () => {
  return (
    <>
      {subject.map((subjecti) =>
        subjecti.topics.map(({ name, id }) => (
          <Topic key={id} name={name} />
        ))
      )}
    </>
  );
};



function TopicListBySubject({subject}) {
  return (
    <div>
      
    </div>
  )
}

export default TopicList
