import React from "react";

export default function ResturantSignUp() {
    return (
        <>
            <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl mb-4">Restaurant Sign Up</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Restaurant Name:
                                <input type="text" name="resturantName" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Restaurant Location:
                                <input type="text" name="resturantLocation" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Restaurant Contact:
                                <input type="text" name="resturantContact" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Restaurant Email:
                                <input type="text" name="resturantEmail" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Restaurant Password:
                                <input type="password" name="resturantPassword" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </label>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
