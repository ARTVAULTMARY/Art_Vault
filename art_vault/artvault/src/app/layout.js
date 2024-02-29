import './globals.css'
import { ReduxProvider } from './_redux/provider'
import { league_gothic, open_sans } from '@/_sharedComponents/Font/Font'
import { getServerSession } from 'next-auth'
import Logout from './logout'
import Modal from '@/_sharedComponents/Modal/Modal'

export const metadata = {
    title: 'ArtVault',
    description: 'User Curated Art Galleries',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${league_gothic.variable} font-mono, ${open_sans.variable} font-sans`}>
            <body className='flex justify-center'>
                <ReduxProvider>
                    {children}
                    <Modal />
                </ReduxProvider>
            </body>
        </html>
    )
}
