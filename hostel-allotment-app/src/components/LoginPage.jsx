import React from 'react';
import scebackground from '../../image/SCE-Full.jpg';
import { Button } from './button';

const LoginPage = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden">
            <img className="w-full h-full object-cover" src={scebackground} alt="background" />

            <div className="absolute inset-0 flex items-center justify-center">
                <form className="bg-white p-6 rounded-lg shadow-md">
                    <label htmlFor="username" className="block mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="w-full mb-4 px-3 py-2 border rounded"
                    />

                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full mb-6 px-3 py-2 border rounded"
                    />

                    <Button label="Login" />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
