import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from '../../image/SCE-Full.jpg';
import logoImage from '../../image/loginpagelogo.png';
import refreshIcon from '../../image/reflogo.png';

const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
};

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        fatherName: "",
        gender: "",
        collegeId: "",
        password: "",
        role: "",
        captchaInput: ""
    });

    const [captcha, setCaptcha] = useState(generateCaptcha());
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log("Form Submitted", formData);
        navigate('/'); // Redirect to login page on successful registration
    };

    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden">
            <img className="w-full h-full object-cover" src={backgroundImage} alt="background" />

            <div className="absolute inset-0 flex items-center justify-end pr-10">
                <form onSubmit={handleSubmit} className="bg-white/30 backdrop-blur-xl rounded-lg shadow-lg flex flex-col items-center w-96 max-h-[90vh] p-6 overflow-y-auto">
                    <div className="w-full mb-4">
                        <img className="mx-auto w-32 h-auto" src={logoImage} alt="logo" />
                    </div>

                    <div className="flex flex-col w-full px-3">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-1 mb-4 border rounded bg-white/70 placeholder-gray-500"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="text"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            className="w-full px-3 py-1 mb-4 border rounded bg-white/70 placeholder-gray-500"
                            placeholder="Father's Name"
                            required
                        />

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-3 py-1 mb-4 border rounded bg-white/70 placeholder-gray-500"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>

                        <input
                            type="text"
                            name="collegeId"
                            value={formData.collegeId}
                            onChange={handleChange}
                            className="w-full px-3 py-1 mb-4 border rounded bg-white/70 placeholder-gray-500"
                            placeholder="College ID"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-1 mb-4 border rounded bg-white/70 placeholder-gray-500"
                            placeholder="Password"
                            required
                        />

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-3 py-1 mb-4 border rounded bg-white/70 placeholder-gray-500"
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                        </select>

                        <div className="flex items-center gap-4 mb-4 p-1 border rounded bg-white/70">
                            <img src={refreshIcon} alt="Refresh CAPTCHA" className="cursor-pointer w-6" onClick={refreshCaptcha} />
                            <span className="text-lg font-semibold text-gray-700">{captcha}</span>
                        </div>

                        <input
                            type="text"
                            name="captchaInput"
                            value={formData.captchaInput}
                            onChange={handleChange}
                            className="w-full px-3 py-1 mb-4 border rounded bg-white/70 placeholder-gray-500"
                            placeholder="Enter CAPTCHA"
                            required
                        />

                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
                            Register
                        </button>

                        <div className="mt-4 text-center">
                            <Link to="/" className="text-blue-600 hover:underline">Already have an account? Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
