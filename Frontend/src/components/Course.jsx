import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json"
import { Link } from "react-router-dom"
function Course() {
    return (
        <>
            <div className="max-w-screen-2xl py-4 container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">We're delighted to have you <span className="text-purple-800">here! :)</span></h1>
                    <p className="mt-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore exercitationem, ut consequatur placeat voluptatibus debitis labore eveniet rerum id officiis culpa laudantium earum velit similique magnam ex quo. Quas, quam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore exercitationem, ut consequatur placeat voluptatibus debitis labore eveniet rerum id officiis culpa laudantium earum velit similique magnam ex quo. Quas, quam!
                        Lorem ipsum dolor sit amet consectetu</p>
                    <Link to="/">
                        <button className="mt-6 bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 duration-300">
                            Back
                        </button>
                    </Link>
                </div>
                <div className=" mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course