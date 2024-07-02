import React from 'react';
import image from './assets/profilei.png';

const Team = () => {
    const people = [
        {
            name: 'R V JADHAV',
            role: 'Founder, SDE CIVIL, BSNL',
            imageUrl: image,
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
        },
    ];

    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600 py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-pink-600 sm:text-5xl">Interior Designer’s Profile</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
                        Meet our talented team of interior designers who are dedicated to transforming spaces into works of art.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                    {people.map((person) => (
                        <div key={person.name} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                            <div className="p-6 flex flex-col items-center">
                                <img className="h-24 w-24 rounded-full mb-4" src={person.imageUrl} alt={person.name} />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{person.name}</h3>
                                <p className="text-pink-500 font-medium">{person.role}</p>
                                <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
                                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
