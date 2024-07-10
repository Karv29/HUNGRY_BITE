"use client";
import React from "react";
import ResturantSignUp from "../_components/resturantSignUp";
import ResturantLogin from "../_components/resturantLogin";
import ResturantHeader from "../_components/resturantHeader";

export default function Home() {
    const [login, setLogin] = React.useState(false );
    return (
        
        <div className="container mx-auto flex justify-center items-center h-screen">
            <div className="max-w-md w-full">
                {login ? <ResturantLogin /> : <ResturantSignUp />}
                <div className="mt-4 flex justify-center">
                    <button onClick={() => setLogin(!login)} className="text-blue-500 hover:underline focus:outline-none">
                        {login ? "Sign Up" : "Login"}
                    </button>
                </div>
            </div>
        </div>
    );
}  