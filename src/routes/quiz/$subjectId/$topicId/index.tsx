import { createFileRoute } from '@tanstack/react-router'
import { Quiz } from './Quiz'

export const Route = createFileRoute('/quiz/$subjectId/$topicId/')({
  component: Quiz,
})

function RouteComponent() {
  return(
    <Quiz/>
  ) 
}