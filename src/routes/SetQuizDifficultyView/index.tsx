import { createFileRoute } from '@tanstack/react-router'
import SetQuizDifficulty from './SetQuizDifficulty'

export const Route = createFileRoute('/SetQuizDifficultyView/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SetQuizDifficulty/>
}
