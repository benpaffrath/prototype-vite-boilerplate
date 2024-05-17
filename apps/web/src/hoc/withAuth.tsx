'use client'

import React, { ComponentType, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authenticate, UserContext } from '@panocreation/react-auth'
import { PageLoader } from '../components/PageLoader/PageLoader'

const withAuth = <P extends object>(
    WrappedComponent: ComponentType<P>,
): React.FC<P> => {
    return (props) => {
        const { user, setUser } = useContext(UserContext)
        const [loading, setLoading] = useState(true)
        const [isAuthenticated, setIsAuthenticated] = useState(false)
        const router = useRouter()

        useEffect(() => {
            async function auth() {
                const res = await authenticate(user)
                setUser(res)
                setIsAuthenticated(!!res)
                setLoading(false)

                if (!res) {
                    router.push('/login')
                }
            }

            void auth()
        }, [user, setUser, router])

        if (loading) {
            return <PageLoader text="Bitte warten..." />
        }

        return isAuthenticated ? <WrappedComponent {...props} /> : null
    }
}

export default withAuth
