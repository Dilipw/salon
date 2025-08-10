import React, { useState, useEffect } from "react";
import { User, Crown, Lock, Mail, Eye, EyeOff, Sparkles, Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [role, setRole] = useState("customer");
    const [form, setForm] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleLogin = () => {
        if (!form.username || !form.password) {
            alert("Please fill in all fields!");
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            if (role === "customer" && form.username === "customer@example.com" && form.password === "123") {
                console.log("Navigating to customer dashboard...");
                navigate("/customer");
            } else if (role === "owner" && form.username === "owner@example.com" && form.password === "123") {
                console.log("Navigating to owner dashboard...");
                navigate("/owner");
            } else {
                alert("Invalid credentials!");
            }
            setIsLoading(false);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    // Floating particles animation
    const FloatingParticle = ({ delay, size, color }) => (
        <div
            className={`absolute opacity-20 animate-bounce ${color} rounded-full`}
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${3 + Math.random() * 2}s`
            }}
        />
    );

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-4 sm:p-6">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-l from-purple-300 to-pink-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
                <FloatingParticle
                    key={i}
                    delay={i * 0.5}
                    size={Math.random() * 8 + 4}
                    color={['bg-pink-300', 'bg-purple-300', 'bg-indigo-300'][i % 3]}
                />
            ))}

            {/* Main Login Container */}
            <div className={`relative w-full max-w-sm mx-auto transform transition-all duration-1000 ${mounted ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}>
                {/* Glassmorphism Container */}
                <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-6 sm:p-8 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-pink-300/30 to-transparent rounded-full transform translate-x-12 -translate-y-12"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-purple-300/30 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>

                    {/* Header with Animation */}
                    <div className="text-center mb-6 sm:mb-8 relative z-10">
                        <div className="flex justify-center mb-3 sm:mb-4">
                            <div className="relative">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-500 hover:scale-110">
                                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                                    <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent mb-1 sm:mb-2">
                            Salon Pro
                        </h1>
                        <p className="text-white/80 text-xs sm:text-sm">Welcome back to your beauty journey</p>
                    </div>

                    {/* Enhanced Tabs */}
                    <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1.5 mb-4 sm:mb-6 border border-white/20">
                        <button
                            onClick={() => setRole("customer")}
                            className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 transform ${role === "customer"
                                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105"
                                    : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                Customer
                            </div>
                        </button>
                        <button
                            onClick={() => setRole("owner")}
                            className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 transform ${role === "owner"
                                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105"
                                    : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                                <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                Owner
                            </div>
                        </button>
                    </div>

                    {/* Login Form Header */}
                    <div className="text-center mb-4 sm:mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center justify-center gap-1.5 sm:gap-2">
                            {role === "customer" ? (
                                <>
                                    <User className="w-5 h-5 text-pink-300" />
                                    Customer Portal
                                </>
                            ) : (
                                <>
                                    <Crown className="w-5 h-5 text-purple-300" />
                                    Owner Dashboard
                                </>
                            )}
                        </h2>
                        <p className="text-white/60 text-xs sm:text-sm">
                            {role === "customer"
                                ? "Book your next appointment with ease"
                                : "Manage your salon like a pro"
                            }
                        </p>
                    </div>

                    {/* Enhanced Form Fields */}
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        {/* Username Field */}
                        <div className="relative">
                            <div className={`absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center transition-colors duration-300 ${focusedField === 'username' ? 'text-pink-300' : 'text-white/50'
                                }`}>
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                value={form.username}
                                onChange={(e) => setForm({ ...form, username: e.target.value })}
                                onFocus={() => setFocusedField('username')}
                                onBlur={() => setFocusedField(null)}
                                onKeyPress={handleKeyPress}
                                className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border rounded-2xl text-white placeholder-white/50 focus:outline-none transition-all duration-300 text-sm sm:text-base ${focusedField === 'username'
                                        ? 'border-pink-400 bg-white/20 shadow-lg transform scale-[1.02]'
                                        : 'border-white/30 hover:border-white/50'
                                    }`}
                            />
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'username' ? 'opacity-100' : ''
                                }`} />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <div className={`absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center transition-colors duration-300 ${focusedField === 'password' ? 'text-pink-300' : 'text-white/50'
                                }`}>
                                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                onFocus={() => setFocusedField('password')}
                                onBlur={() => setFocusedField(null)}
                                onKeyPress={handleKeyPress}
                                className={`w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border rounded-2xl text-white placeholder-white/50 focus:outline-none transition-all duration-300 text-sm sm:text-base ${focusedField === 'password'
                                        ? 'border-pink-400 bg-white/20 shadow-lg transform scale-[1.02]'
                                        : 'border-white/30 hover:border-white/50'
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-white/50 hover:text-pink-300 transition-colors duration-300"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                            </button>
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'password' ? 'opacity-100' : ''
                                }`} />
                        </div>
                    </div>

                    {/* Demo Credentials */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-white/20">
                        <h4 className="text-white/90 font-semibold mb-1 sm:mb-2 flex items-center gap-1.5 sm:gap-2 text-sm">
                            <Star className="w-3.5 h-3.5 text-yellow-300" />
                            Demo Credentials
                        </h4>
                        <div className="text-xs sm:text-sm text-white/70 space-y-0.5">
                            <p><strong>Customer:</strong> customer@example.com / 123</p>
                            <p><strong>Owner:</strong> owner@example.com / 123</p>
                        </div>
                    </div>

                    {/* Enhanced Login Button */}
                    <button
                        onClick={handleLogin}
                        disabled={isLoading}
                        className={`w-full py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform relative overflow-hidden group ${isLoading
                                ? 'bg-gray-500 cursor-not-allowed scale-100'
                                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-2xl active:scale-95'
                            }`}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Signing you in...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Sign In
                                </>
                            )}
                        </span>
                        {!isLoading && (
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                    </button>

                    {/* Forgot Password Link */}
                    <div className="text-center mt-4 sm:mt-6">
                        <a
                            href="#"
                            className="text-white/70 hover:text-pink-300 text-xs sm:text-sm transition-colors duration-300 hover:underline"
                        >
                            Forgot your password?
                        </a>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-6 pt-4 sm:pt-6 border-t border-white/20">
                        <p className="text-white/50 text-xs">
                            © 2025 Salon Pro. Crafted with <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline text-red-400" /> for beautiful experiences
                        </p>
                    </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-3xl blur-xl -z-10 animate-pulse"></div>
            </div>
        </div>
    );
}