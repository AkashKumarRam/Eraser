import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <section className="bg-slate-900 text-white">
            <div className="mx-auto h-screen max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Documents & diagrams

                        <span className="sm:block"> for engineering teams </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero