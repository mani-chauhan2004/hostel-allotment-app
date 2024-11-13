
// import React, { useState } from 'react';
// import scebackground from '../../image/SCE-Full.jpg';
// import loginlogo from '../../image/loginpagelogo.png';
// import { Button } from './button';
// import refresh from '../../image/reflogo.png';

// const generateCaptcha = () => {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let captcha = '';
//     for (let i = 0; i < 6; i++) {
//         captcha += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return captcha;
// };

// const LoginPage = () => {
//     const [captcha, setCaptcha] = useState(generateCaptcha());

//     const refreshCaptcha = () => {
//         setCaptcha(generateCaptcha());
//     };

//     return (
//         <div className="fixed inset-0 w-screen h-screen overflow-hidden">
//             <img
//                 className="w-full h-full object-cover"
//                 src={scebackground}
//                 alt="background"
//             />

//             <div className="absolute inset-0 flex items-center justify-end pr-10">
//                 <form className="bg-white/30 backdrop-blur-3xl  rounded-lg shadow-md flex flex-col justify-center items-center w-80">
//                    <div className="w-full h-16 mb-6 rounded-lg ">
//                    <img className='w-11/12 mx-auto my-2' src={loginlogo} alt="logo" />
//                    </div>

//                     <div className="flex flex-col w-full p-8">
//                         <div className="flex flex-row mb-4 items-center gap-1">
//                             <label htmlFor="username" className="mb-1">Username</label>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 id="username"
//                                 className="w-full px-3 py-2 border rounded"
//                                 placeholder="Username"
//                             />
//                         </div>

//                         <div className="flex flex-row items-center gap-2 mb-4">
//                             <label htmlFor="password" className="mb-1">Password</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 id="password"
//                                 className="w-full px-3 py-2 border rounded"
//                                 placeholder="Password"
//                             />
//                         </div>

//                         <div className="flex flex-col mb-2">
//                             <div className="w-full border rounded flex items-center justify-around gap-4 p-2">
//                                 <img src={refresh} alt="Refresh CAPTCHA" className="cursor-pointer" onClick={refreshCaptcha} />
//                                 <span className="text-lg font-semibold">{captcha}</span>
//                             </div>
//                             <label htmlFor="captcha" className="mb-1"></label>
//                             <div className="flex items-center gap-2">
//                                 <input
//                                     type="text"
//                                     name="captcha"
//                                     id="captcha"
//                                     className="w-full px-3 py-2 border rounded"
//                                     placeholder="Enter CAPTCHA"
//                                 />
//                             </div>
//                         </div>

//                         <Button label="Login" />

//                         <div className="mt-4 flex items-center justify-between w-full text-sm text-gray-600">
//                             <label className="flex items-center">
//                                 <input type="checkbox" className="mr-1" /> Remember me
//                             </label>
//                             <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
//                         </div>
//                        <div className='mt-2 text-black hover:text-blue-500'>
//                        <a href="#">New user/SignUp</a>
//                        </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;




import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import scebackground from '../../image/SCE-Full.jpg';
import loginlogo from '../../image/loginpagelogo.png';
import refresh from '../../image/reflogo.png';

const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
};

const LoginPage = () => {
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const navigate = useNavigate();

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Logic for authenticating the user
        navigate('/home'); // Redirect to home page on successful login
    };

    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden">
            <img className="w-full h-full object-cover" src={scebackground} alt="background" />

            <div className="absolute inset-0 flex items-center justify-end pr-10">
                <form onSubmit={handleLogin} className="bg-white/30 backdrop-blur-3xl rounded-lg shadow-md flex flex-col justify-center items-center w-80">
                    <div className="w-full h-16 mb-6 rounded-lg">
                        <img className="w-11/12 mx-auto my-2" src={loginlogo} alt="logo" />
                    </div>

                    <div className="flex flex-col w-full p-8">
                        <div className="flex flex-col mb-4">
                            {/* <label htmlFor="username" className="mb-1">Username</label> */}
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Username"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            {/* <label htmlFor="password" className="mb-1">Password</label> */}
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Password"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <div className="flex items-center justify-around gap-4 p-2 border rounded">
                                <img src={refresh} alt="Refresh CAPTCHA" className="cursor-pointer" onClick={refreshCaptcha} />
                                <span className="text-lg font-semibold">{captcha}</span>
                            </div>
                            <input
                                type="text"
                                name="captcha"
                                className="w-full px-3 py-2 mt-2 border rounded"
                                placeholder="Enter CAPTCHA"
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>

                        <div className="mt-4  text-gray-600 flex  flex-row  w-full items-center justify-between">
                            <label className="flex items-center gap-1">
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#" className="text-blue-500 hover:underline mt-2">Forgot password?</a>
                        </div>

                        <div className="mt-4 text-center">
                            <Link to="/register" className="text-blue-500 hover:underline">New user? Sign Up</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

