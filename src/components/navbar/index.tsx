import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import img from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className='container__navbar p-5 flex items-center gap-10 my-auto justify-between text-2xl'>
            <div>
                <NavLink to="/">
                    <img className='w-20' src={img} alt="" />
                </NavLink>
            </div>

            <div className='flex items-center gap-10 my-auto justify-end'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </div>
        </div>
    )
}

export default memo(Navbar)