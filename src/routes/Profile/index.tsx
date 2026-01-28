//Route Only
import { createFileRoute } from '@tanstack/react-router'
import Profile from './Profile'

export const Route = createFileRoute('/Profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Profile />
}
