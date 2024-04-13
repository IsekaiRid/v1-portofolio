import Imglogo from "../asset/logo.jpg";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Delevoper', 'Desain', 'Studen'],
        loop: {},
    })


    return (
        <>
            <div className='container md:ml-10'>
                <section className="bg-white dark:bg-gray-900">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  font-Nabla bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-sky-300">I am a <span>{text}</span>
                                <Cursor cursorColor='blue' /></h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Class 10 PPLG 1 coding team portfolio to develop websites for everyone throughout Indonesia</p>
                            <a href="#projack" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-800 hover:bg-slate-600 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                            Recent Project
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                            <a href="#about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                About
                            </a>
                        </div>
                        <div className="mt-5 lg:mt-0 lg:col-span-5 lg:flex">
                            <img loading="lazy" className='rounded-lg shadow-lg h-[400px] ' src={Imglogo} alt="mockup" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero
