import { memo } from 'react'
import Navbar from '../../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer'

const Layout = () => {
    return (
        <>
            <Navbar />
            {/* <div className='flex flex-col justify-between h-full'> */}
                <Outlet />
                <Footer />
            {/* </div> */}
        </>
    )
}

export default memo(Layout)