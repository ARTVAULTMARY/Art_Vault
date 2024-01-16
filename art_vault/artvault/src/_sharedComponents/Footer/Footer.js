import NewsSignup from './NewsSignup'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center h-2/5 max-h-[300px] w-full min-w-[1200px] 2xl:w-5/6 bg-alto p-10">
            <div className="flex flex-row justify-between w-4/5">
                <NewsSignup />

                <div className="flex flex-col items-center justify-center w-1/3">
                    <Link href="" className="text-xl">
                        My Account
                    </Link>
                    <Link href="" className="text-xl">
                        FAQ
                    </Link>
                </div>

                <div className="flex flex-row justify-end items-center gap-5 w-1/3">
                    <Link href="https://www.instagram.com/artvault.pro/" target='blank' passHref={true} className='w-1/5'>
                        <img src="Instagram Logo.svg"/>
                    </Link>
                    <Link href="https://www.tiktok.com/@artvault.pro" target='blank' passHref={true} className='w-1/5'>
                        <img src="tiktok Logo.svg" className='grayscale'></img>  
                    </Link>
                </div>
            </div>
        </div>
    )
}
