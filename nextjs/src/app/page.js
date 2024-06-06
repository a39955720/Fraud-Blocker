"use client"
import Head from "next/head"
import Header from "../../components/Header"

export default function Home() {
    return (
        <div className="flex-col min-h-screen">
            <Head>
                <title>Fraud Blocker</title>
                <meta name="description" content="Fraud Blocker" />
                <link rel="icon" href="/logo1.png" />
            </Head>
            <Header />
        </div>
    )
}