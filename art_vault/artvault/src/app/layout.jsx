import './globals.css'
import { ReduxProvider } from './_redux/provider'
import { league_gothic, open_sans } from '@/_sharedComponents/Font/Font'
import Modal from '@/_sharedComponents/Modal/Modal'
import Script from 'next/script'

export const metadata = {
    title: 'ArtVault',
    description: 'User Curated Art Galleries',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${league_gothic.variable} font-mono, ${open_sans.variable} font-sans, customScrollbarStyle`}>
            <Script src="https://kit.fontawesome.com/1b32cc131c.js"/>
            <body>
                <ReduxProvider>
                    {children}
                    <Modal />
                </ReduxProvider>
            </body>
        </html>
    )
}
