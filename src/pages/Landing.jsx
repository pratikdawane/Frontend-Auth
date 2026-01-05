import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

export default function Landing() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col font-sans">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Auth2
                </div>
                <div className="space-x-4">
                    <Link
                        to="/login"
                        className="px-4 py-2 rounded-lg text-gray-300 hover:text-white transition"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/register"
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition shadow-lg shadow-blue-500/30"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-4xl space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                        v2.0 Now Available
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                        Authentication <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Reimagined
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Secure, fast, and developer-friendly authentication for your modern
                        web applications. Built with the latest tech stack.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Link
                            to="/register"
                            className="group flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
                        >
                            Start Building
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                        </Link>
                        <Link
                            to="/login"
                            className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-750 transition"
                        >
                            Live Demo
                        </Link>
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl w-full px-4 mb-20">
                    {[
                        {
                            icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
                            title: "Bank-Grade Security",
                            desc: "HTTP-only cookies and JWT rotation keep your data safe.",
                        },
                        {
                            icon: <Zap className="w-8 h-8 text-yellow-400" />,
                            title: "Lightning Fast",
                            desc: "Optimized for speed with minimal latency overhead.",
                        },
                        {
                            icon: <Globe className="w-8 h-8 text-purple-400" />,
                            title: "Global Scale",
                            desc: "Ready to deploy anywhere with standard architecture.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition duration-300"
                        >
                            <div className="mb-4 bg-gray-900 w-16 h-16 rounded-xl flex items-center justify-center border border-gray-700">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
