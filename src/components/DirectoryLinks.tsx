import React from 'react';
import { Link } from 'lucide-react';

const DirectoryLinks: React.FC = () => {
    return (
        <div className="min-h-[calc(100vh-5rem)] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
            {/* Animated Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large floating orbs */}
                <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-radial from-emerald-200/40 via-emerald-300/20 to-transparent rounded-full animate-float-1 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-radial from-teal-200/50 via-teal-300/25 to-transparent rounded-full animate-float-2 blur-2xl"></div>
                <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-radial from-green-200/35 via-green-300/20 to-transparent rounded-full animate-float-3 blur-3xl"></div>
            </div>

            {/* Overlay for better content readability */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]"></div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center px-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl border-2 border-white/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-emerald-200">
                    <Link className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 bg-clip-text text-transparent mb-6 tracking-wide">
                    Directorio de Enlaces
                </h1>
                <p className="text-gray-700 text-2xl leading-relaxed font-medium max-w-2xl">
                    Enlaces útiles a dependencias ambientales y servicios relacionados
                </p>
            </div>
        </div>
    );
};

export default DirectoryLinks;
