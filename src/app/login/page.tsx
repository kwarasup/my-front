"use client";

import Image from "next/image";
import { auth, googleProvider } from "@/firebaseClient";
import { signInWithPopup, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";




export default function Login() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // ฟังสถานะ user (login / logout)
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // ถ้ามี user แล้ว อยาก redirect ไปหน้าอื่น
            if (currentUser) {
                router.push("/profile"); // ตรงนี้เปลี่ยนได้ เช่น "/dashboard"
            }
        });
        return () => unsub();
    }, [router]);

    const handleGoogleLogin = async () => {
        if (loading) return; // กันกดรัว ๆ

        setLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            router.push("/profile");
        } catch (error: any) {
            // ถ้าเป็นแค่ popup ถูกยกเลิก/ปิดไป ก็ไม่ต้องถือว่าเป็น error ร้ายแรง
            if (
                error?.code === "auth/cancelled-popup-request" ||
                error?.code === "auth/popup-closed-by-user"
            ) {
                console.log("Popup ถูกยกเลิกหรือถูกปิดโดยผู้ใช้");
            } else {
                console.error("Firebase auth error:", error);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#5D8C7B] relative overflow-hidden font-sans">
            {
                //Background Image Overlay
            }
            <div className="absolute inset-0 z-0 opacity-30">
                <Image
                    src="/hero-bg.png"
                    alt="Leaves Background"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-md z-10 relative mx-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#2F5246] mb-2">Welcome Back</h1>
                    <p className="text-gray-500 text-sm">Enter your details to access your account</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#4A3728] mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#5D8C7B] focus:ring-2 focus:ring-[#5D8C7B]/20 outline-none transition-all bg-gray-50"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="password" className="block text-sm font-medium text-[#4A3728]">
                                Password
                            </label>
                            <a href="#" className="text-xs text-[#5D8C7B] hover:underline">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#5D8C7B] focus:ring-2 focus:ring-[#5D8C7B]/20 outline-none transition-all bg-gray-50"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full py-3.5 bg-[#2F5246] text-white font-bold rounded-xl hover:bg-[#1a3c33] transition-colors shadow-lg"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="w-full py-3.5 bg-[#2F5246] text-white font-bold rounded-xl hover:bg-[#1a3c33] transition-colors shadow-lg"
                        disabled={loading}
                        onClick={handleGoogleLogin}
                    >
                        {loading ? "Signing in..." : "Sign in with Google"}
                    </button>

                    {user ? (
                        <div>
                            <p>คุณล็อกอินแล้วด้วยบัญชี:</p>
                            <p><b>{user.displayName}</b> ({user.email})</p>
                            <p>กำลัง redirect...</p>
                        </div>
                    ) : (
                        <div>
                            <p>คุณยังไม่ล็อกอิน</p>
                        </div>
                    )}

                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Don't have an account?{" "}
                        <a href="#" className="text-[#5D8C7B] font-semibold hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
