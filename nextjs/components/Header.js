"use client"
import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="p-5 border-b-10 flex flex-row justify-between items-center bg-red-600">
            <div className="flex items-center">
                <h1 className="font-orbitron text-white py-4 px-4 font-bold text-4xl ml-5">Fraud Blocker</h1>
            </div>
            <div className="flex flex-row justify-end">
                <Link href="/" legacyBehavior>
                    <a className="bg-blue-600 hover:bg-gray-700 h-12 text-white font-bold py-2 mr-4 px-4 rounded-lg ml-auto flex items-center ">
                        Request Audit
                    </a>
                </Link>
                <Link href="/" legacyBehavior>
                    <a className="bg-blue-600 hover:bg-gray-700 h-12 text-white font-bold py-2 mr-4 px-4 rounded-lg ml-auto flex items-center">
                        Audit Project
                    </a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}