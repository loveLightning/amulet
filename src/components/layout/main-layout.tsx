import React from 'react'

import { Container, Footer, Header } from 'src/components'

interface Props {
  children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
