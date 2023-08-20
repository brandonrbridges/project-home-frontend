// Next
import { Metadata } from 'next'

// Components
import DashboardWrapper from '@/components/DashboardWrapper'
import Hydrator from '@/components/Hydrator'
import ProtectedRoute from '@/components/ProtectedRoute'
import SocketHandler from '@/components/SocketHandler'

export const metadata: Metadata = {
  title: 'Dashboard | Hello Home',
  description: 'Built with NextJS & NestJS',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Hydrator>
      <DashboardWrapper>
        <ProtectedRoute>
          <SocketHandler>{children}</SocketHandler>
        </ProtectedRoute>
      </DashboardWrapper>
    </Hydrator>
  )
}
