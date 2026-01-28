
// Router
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/EndOfQuiz/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EndOfQuiz/>
}




// Components
import React from 'react'

export default function EndOfQuiz() {
  return (
    <div>EndOfQuiz</div>
  )
}
