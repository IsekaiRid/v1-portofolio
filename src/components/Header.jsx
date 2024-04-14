import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [openNav, setOpenNav] = React.useState(false);

    window.onscroll = function () {
        const header = document.querySelector('header')
        const fiexnav = header.offsetTop;

        if (window.pageYOffset > fiexnav) {
            header.classList.add('fixed-class')
        } else {
            header.classList.remove('fixed-class')
        }
    }


    return (
        <header className=' w-full'>
            <div className=' container '>
                <nav className=' flex justify-between px-2 items-center relative'>
                    <div className='logo font-bold text-2xl mb-1 mt-1 font-Nabla bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-400' >
                        <h1>MociSoup</h1>
                    </div>
                    <button className='block bottom-0 md:hidden items-center' onClick={() => setOpenNav(!openNav)}>
                        <span className={`transition duration-300 ease-in-out w-[33px] h-[3px] block mb-[5px] bg-black relative rounded-lg ${openNav ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`transition duration-300 ease-in-out w-[33px] h-[3px] block mb-[5px] bg-black relative rounded-lg ${openNav ? 'opacity-0' : ''}`}></span>
                        <span className={`transition duration-300 ease-in-out w-[33px] h-[3px] block mb-[5px] bg-black relative rounded-lg ${openNav ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                    <ul className=' hidden md:flex items-center text-black font-bold'>
                        <li className='mx-4'><a href='#about'>About</a></li>
                        <li className='mx-4'><a href='#projack'>Project</a></li>
                        <Link to='/bio'><li className='mx-4'>Tim</li></Link>
                    </ul>
                </nav>
                <div className={`siderbar md:hidden fixed right-0 h-auto pb-10 z-40 bg-slate-900 w-full transform transition ease-in-out duration-300 ${openNav ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className='list-none text-white'>
                        <li className='mx-4 my-2'><a href='#about'>About</a></li>
                        <li className='mx-4 my-2'><a href='#'>Product</a></li>
                        <Link to='/bio'><li className='mx-4 my-2'>Tim</li></Link>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
