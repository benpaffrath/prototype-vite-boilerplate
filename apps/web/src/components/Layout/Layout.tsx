import { ReactNode } from 'react'
import { styled } from '@mui/material'
import Navigation from '../Navigation/Navigation'
import withAuth from '../../hoc/withAuth'

const ContentWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(3),
}))

function AppLayout({ children }: { children?: ReactNode }) {
    return (
        <section>
            <Navigation />
            <ContentWrapper>{children}</ContentWrapper>
        </section>
    )
}

export default withAuth(AppLayout)
