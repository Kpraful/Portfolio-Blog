import React,{useContext} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { dataContext } from '../context/context'; // Import the context

function Middle({ img, title, content, id }) {
    const data = useContext(dataContext); // Access the context
    console.log(data);
    return (
        <div className='m-auto flex justify-center items-center w-[80%]'>
            <div className='mt-4 w-full h-full'>
                <div className='m-auto w-[80%]'>
                    <img src={img} className='rounded-lg object-cover h-auto w-full' alt="" srcset="" />
                    {/* https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg */}
                </div>
                <div className='m-auto mt-4 w-[70%] text-left'>

                    <h1 className="font-bold text-3xl">{title}</h1>

                    <div className='h-32 overflow-ellipsis overflow-hidden '>
                        <p className='overflow-hidden text-ellipsis line-clamp-4'>{content}</p>
                    </div>
                    <div className='mb-8'>
                        <NavLink className='mt-4 bg-white text-black border  hover:bg-orange-600 border-orange-600 cursor-pointer py-2 px-4 rounded-lg' to={`/detail`}>Read More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle
