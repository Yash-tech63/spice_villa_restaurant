import React from 'react'

const Carddish = (props) => {
    return (
        <div >
            <div className="border-2 w-60 rounded-2xl text-center flex flex-col  overflow-hidden">
                <img
                    className="w-full h-40 object-cover"
                    src={props.img}
                    alt="food"
                />

                <h1 className="font-bold text-lg">{props.name}</h1>
                <h2 className="text-sm text-gray-600">
                    ⭐ {props.rating} • {props.time}
                </h2>
                <p className="font-semibold text-green-600">
                    ₹{props.price}
                </p>
            </div>
        </div>

    )
}

export default Carddish
