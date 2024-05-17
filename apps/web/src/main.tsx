import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { UserProvider } from '@panocreation/react-auth'
import { DefaultTheme } from './config/theme'
import { MessageProvider } from './contexts/MessageContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={DefaultTheme}>
            <UserProvider>
                <MessageProvider>
                    <CssBaseline />
                    <App />
                </MessageProvider>
            </UserProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
