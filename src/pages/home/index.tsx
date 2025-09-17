import { memo } from 'react'
import { ReactTyped } from "react-typed";
import image from "../../assets/portfolioImage.jpg"

const Home = () => {
    return (
        <div className='container flex items-center justify-between h-full'>
            <div className='flex flex-col gap-6'>
                <p className='text-3xl'>Hello I'm</p>
                <h1 className='text-5xl font-semibold'>Barchinoy Yusupova</h1>
                <div className='text-3xl'>
                    <ReactTyped
                        strings={[
                            "a full-stack developer",
                            "a backend developer",
                            "a frontend developer",
                        ]}
                        typeSpeed={80}
                        backSpeed={40}
                        loop
                    />
                </div>
            </div>
            <div>
                <img className='w-[500px] h-[500px] object-cover rounded-full' src={image} alt="" />
            </div>
        </div>
    )
}

export default memo(Home)
