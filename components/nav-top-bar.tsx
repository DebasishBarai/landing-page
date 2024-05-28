import { ModeToggle } from "./mode-toggle"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Image from 'next/image'
import Link from "next/link"

export const NavTopBar = () => {
    return (
        <div className="w-full h-[40px] flex justify-between items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-900 text-slate-950 dark:text-slate-50 px-40 py-10">
            <Link href='/'><Image src='home.svg' alt='home-image' width='50' height='50' /></Link>
            <div className='flex justify-end items-center space-x-2'>
            <ModeToggle />
            <Link href='https://github.com/DebasishBarai' rel="noopener noreferrer" target="_blank"><GitHubLogoIcon className="h-[1.5rem] w-[1.5rem]"/></Link>
            </div>
        </div>
    )
}