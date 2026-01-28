import { createFileRoute } from '@tanstack/react-router'
import { Quiz } from './Quiz'

export const Route = createFileRoute('/Quiz/')({
  component: Quiz,
})

function RouteComponent() {
  return(
    <Quiz/>
  ) 
}