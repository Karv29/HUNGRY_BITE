import React, { useState } from "react";

export default function ResturantLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle input changes
    const handleUsernameChange = (e:any) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e:any) => {
        setPassword(e.target.value);
    };

    // Function to handle login button click
    const handleLoginClick = () => {
        if (username && password) {
            alert("Login success");
        } else {
            alert("Please fill in both username and password fields.");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4">Restaurant Login</h2>
                <div className="mb-4">
                    <input type="text" placeholder="Username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="mb-4">
                    <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" value={password} onChange={handlePasswordChange} />
                </div>
                <button onClick={handleLoginClick} disabled={!username || !password} className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${(!username || !password) && 'opacity-50 cursor-not-allowed'}`}>Login</button>
            </div>
        </div>
    );
}
