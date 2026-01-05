import { useAuth } from "../context/AuthContext";
import { LogOut, User, LayoutDashboard, Settings } from "lucide-react";

export default function Dashboard() {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 border-r border-gray-700 hidden md:block">
                <div className="p-6">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Auth2
                    </h1>
                </div>
                <nav className="mt-6">
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 bg-gray-700/50 border-r-4 border-blue-500 text-gray-100"
                    >
                        <LayoutDashboard className="w-5 h-5 mr-3" />
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-700/50 hover:text-white transition"
                    >
                        <User className="w-5 h-5 mr-3" />
                        Profile
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-700/50 hover:text-white transition"
                    >
                        <Settings className="w-5 h-5 mr-3" />
                        Settings
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="h-16 bg-gray-800/50 backdrop-blur-md border-b border-gray-700 flex items-center justify-between px-6">
                    <div className="md:hidden font-bold">Auth2</div>
                    <div className="flex items-center space-x-4 ml-auto">
                        <span className="text-gray-300 hidden sm:block">
                            Welcome back, <span className="font-semibold text-white">{user?.name}</span>
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                            {user?.name?.charAt(0)}
                        </div>
                        <button
                            onClick={logout}
                            className="p-2 text-gray-400 hover:text-red-400 transition"
                            title="Logout"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                <div className="p-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Overview</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
                                <div className="text-gray-400 mb-2">Total Logins</div>
                                <div className="text-3xl font-bold">12</div>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
                                <div className="text-gray-400 mb-2">Account Status</div>
                                <div className="text-3xl font-bold text-green-400">Active</div>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
                                <div className="text-gray-400 mb-2">Security Level</div>
                                <div className="text-3xl font-bold text-blue-400">High</div>
                            </div>
                        </div>

                        <div className="mt-8 bg-gray-800 rounded-2xl border border-gray-700 p-8 text-center">
                            <h3 className="text-xl font-bold mb-4">Welcome to your Dashboard</h3>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                This is a protected route. You can only see this if you have a valid JWT Access Token.
                                Your session is maintained via HTTP-Only cookies for maximum security.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
