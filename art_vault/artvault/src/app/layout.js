import './globals.css'
import { ReduxProvider } from './_redux/provider'
import { league_gothic, open_sans } from '@/_sharedComponents/Font/Font'
import { getServerSession } from 'next-auth'
import Logout from './logout'

export const metadata = {
    title: 'ArtVault',
    description: 'User Curated Arts Archive',
}

export default async function RootLayout({ children }) {
    const session = await getServerSession();
    return (
        <html lang="en" className={`${league_gothic.variable} font-mono, ${open_sans.variable} font-sans`}>
            <body className='flex flex-col items-center bg-white-100'>
                <nav>{!!session && <Logout />}</nav>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    )
}
