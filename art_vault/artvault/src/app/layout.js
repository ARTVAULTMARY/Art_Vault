import './globals.css'
import { ReduxProvider } from './_redux/provider'
import { league_gothic, open_sans } from '@/_sharedComponents/Font/Font'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${league_gothic.variable} font-mono, ${open_sans.variable} font-sans`}>
            <body>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    )
}
