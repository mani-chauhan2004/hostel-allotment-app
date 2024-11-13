import React from 'react';
import scebackground from '../../image/SCE-Full.jpg';

const LoginPage = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen flex overflow-hidden">
            <img className="w-full h-full object-cover" src={scebackground} alt="background" />

            <div>
                <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
