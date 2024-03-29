import NewsSignup from './NewsSignup'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center max-h-[300px] w-full min-w-[1200px] bg-alto p-10">
            <div className="flex flex-row justify-between w-4/5">
                <NewsSignup />

                <div className="flex flex-col items-center justify-center w-1/3">
                    <Link href="/dashboard" className="text-xl">
                        My Account
                    </Link>
                    <Link href="" className="text-xl">
                        FAQ
                    </Link>
                </div>

                <div className="flex flex-row justify-end items-center gap-5 w-1/3">
                    <Link href="https://www.instagram.com/artvault.pro/" target='blank' passHref={true} className='w-1/5'>
                        <img src="/images/InstagramLogo.svg"/>
                    </Link>
                    <Link href="https://www.tiktok.com/@artvault.pro" target='blank' passHref={true} className='w-1/5'>
                        <img src="/images/TiktokLogo.svg" className='grayscale'></img>  
                    </Link>
                </div>
            </div>
        </div>
    )
}
