import './globals.css'
import { ReduxProvider } from './_redux/provider'
import { league_gothic, open_sans } from '@/_sharedComponents/Font/Font'

export const metadata = {
    title: 'ArtVault',
    description: 'User Curated Arts Archive',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${league_gothic.variable} font-mono, ${open_sans.variable} font-sans`}>
            <body className='flex flex-col items-center bg-white-100'>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    )
}
