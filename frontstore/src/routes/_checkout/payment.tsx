import Payment from '@/components/Checkout/Payment'
import { Container } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_checkout/payment')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container>
      <Payment/>
    </Container>
  )
}
