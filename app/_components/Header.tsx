import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className="bg-slate-900 border-b-[1.5px] border-gray-700">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
               <Image src="/logo.png" width={100} height={100} alt='brand-logo'/>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link className="text-white transition hover:text-gray-100" href="#"> About </Link>
                            </li>

                            <li>
                                <Link className="text-white transition hover:text-gray-100" href="#"> Careers </Link>
                            </li>

                            <li>
                                <Link className="text-white transition hover:text-gray-100" href="#"> History </Link>
                            </li>

                            <li>
                                <Link className="text-white transition hover:text-gray-100" href="#"> Services </Link>
                            </li>

                            <li>
                                <Link className="text-white transition hover:text-gray-100" href="#"> Projects </Link>
                            </li>

                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <div
                                className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition"
                            >
                                <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
                            </div>

                            <div
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-slate-800 sm:block"
                                
                            >
                                <RegisterLink>Register</RegisterLink>
                            </div>
                        </div>

                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header