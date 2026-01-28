import { createFileRoute } from '@tanstack/react-router'
import Report from './Report'

export const Route = createFileRoute('/Report/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Report/>
}
