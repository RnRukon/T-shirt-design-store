import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen max-w-screen flex justify-center items-center">
            <div className='text-center'>
                <img src="/logo192.png" alt="logo" width={200} />
                <p className="text-3xl font-bold text-orange-400 py-4"> Not Found page</p>
                <h1 className="text-6xl font-bold">
                    <span className='text-orange-400'>4</span>
                    <span className='text-red-500'>0</span>
                    <span className='text-orange-400'>4</span>
                    </h1>
                    <button className="text-xl bg-black px-3 py-2 mt-5 text-orange-400 font-bold rounded-lg hover:text-black hover:bg-orange-400">
                        Back to Home
                    </button>
            </div>
        </div>
    );
};

export default NotFound;