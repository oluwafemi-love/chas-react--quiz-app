import { createFileRoute } from '@tanstack/react-router'
import Leaderboard from './Leaderboard'

export const Route = createFileRoute('/Leaderboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Leaderboard/>
}
