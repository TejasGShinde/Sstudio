import React from 'react'
import image from './assets/profilei.png'
 

const Team = () => {
    const people = [
        {
            name: 'R V JADHAV',
            role: 'Founder, SDE CIVIL, BSNL',
            imageUrl:  image,
        },
        {
            name: 'SWARAJ JADHAV',
            role: 'Director, Interior Designer',
            imageUrl: image,
        },
        {
            name: 'ANIKET HANWATE',
            role: 'Interior Designer',
            imageUrl: image,
        },
        {
            name: 'SHUBHAM BANPEL',
            role: 'Interior Designer',
            imageUrl: image,
        },
        {
            name: 'SHWETA GOSAVI',
            role: 'Interior Designer',
            imageUrl: image,
        }
    ];


    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Interior Designer’s Profile
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                        suspendisse.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-pink-500">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Team