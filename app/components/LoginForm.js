
"use client"

import {  useState } from "react";
import Loading from "./Loading";


export default function LoginForm() {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (formData.email == '' && formData.password == '') {
                alert('Please fill in all fields');
                setLoading(false);
            }
            else {
                const response = await fetch('/api/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setLoading(false); 
                    alert('Email sent successfully');
                   
                    // Handle success, e.g., show a success message to the user
                } else {
                    setLoading(false); 
                    alert('Failed to send email');
                   
                    // Handle failure, e.g., show an error message to the user
                }
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setLoading(false); 
            // Handle network or other errors
        }
    };



    return (
        <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <input type="tel"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <label htmlFor="remember" className="text-gray-600">
                        <input type="checkbox" id="remember" name="remember" className="mr-2 leading-tight" />
                        Remember me
                    </label>
                    <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                </div>
                <button type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>

                
            </form>
            <p className="mt-4 text-gray-600 text-sm">Dont have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
            {loading && <Loading />}
        </div>
         
    )
}