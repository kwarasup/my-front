"use client";

import { auth } from "@/firebaseClient";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Profile() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [apiMessage, setApiMessage] = useState<string | null>(null);
    const [apiLoading, setApiLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.push("/login");
            } else {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => unsub();
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/login");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const callApi = async () => {
        if (!user) return;
        setApiLoading(true);
        setApiMessage(null);
        try {
            const token = await user.getIdToken();
            const response = await fetch("https://my-api-service-156743420844.asia-southeast1.run.app/", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.text();
            setApiMessage(data);
        } catch (error: any) {
            console.error("API Error:", error);
            setApiMessage(`Error: ${error.message}`);
        } finally {
            setApiLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2F5246]"></div>
            </div>
        );
    }

    if (!user) {
        return null; // Will redirect in useEffect
    }

    return (
        <main className="min-h-screen bg-[#F5F5F0] font-sans relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-64 bg-[#5D8C7B] z-0">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/hero-bg.png"
                        alt="Leaves Background"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10 pt-32">
                <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">

                    <div className="p-8 md:p-12 flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 mb-6">
                            {user.photoURL ? (
                                <Image
                                    src={user.photoURL}
                                    alt={user.displayName || "User"}
                                    fill
                                    className="rounded-full object-cover border-4 border-white shadow-md"
                                    unoptimized
                                />
                            ) : (
                                <div className="w-full h-full rounded-full bg-[#E3C099] flex items-center justify-center text-[#5D4037] text-4xl font-bold border-4 border-white shadow-md">
                                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
                                </div>
                            )}
                        </div>

                        <h1 className="text-3xl font-bold text-[#2F5246] mb-2">
                            {user.displayName || "Welcome User"}
                        </h1>
                        <p className="text-gray-500 mb-8">{user.email}</p>

                        <div className="w-full border-t border-gray-100 pt-8 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">User ID</p>
                                    <p className="text-[#4A3728] font-mono text-sm truncate" title={user.uid}>{user.uid}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Last Sign In</p>
                                    <p className="text-[#4A3728] text-sm">{user.metadata.lastSignInTime}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 w-full">
                            <button
                                onClick={callApi}
                                disabled={apiLoading}
                                className="w-full py-3 bg-[#E3C099] text-[#5D4037] font-bold rounded-xl hover:bg-[#dcb080] transition-colors shadow-lg flex items-center justify-center gap-2 mb-4 disabled:opacity-50"
                            >
                                {apiLoading ? (
                                    <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[#5D4037]"></span>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                )}
                                Call External API
                            </button>

                            {apiMessage && (
                                <div className="bg-gray-50 p-4 rounded-xl text-left border border-gray-200">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">API Response</p>
                                    <pre className="text-[#4A3728] text-sm whitespace-pre-wrap font-mono overflow-x-auto">
                                        {apiMessage}
                                    </pre>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={handleLogout}
                            className="mt-4 px-8 py-3 bg-[#2F5246] text-white font-bold rounded-xl hover:bg-[#1a3c33] transition-colors shadow-lg flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
