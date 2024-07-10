import React from "react";
import Link from "next/link";

export default function ResturantHeader() {
    return (
            <div >
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link href="/" className="text-blue-500 hover:underline">Restaurant 1</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-blue-500 hover:underline">Login</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-blue-500 hover:underline">Profile</Link>
                    </li>
                </ul>
            </div>
    );
}
