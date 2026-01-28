import { createFileRoute } from '@tanstack/react-router'
import Settings from './Settings'

export const Route = createFileRoute('/Settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Settings />
}
