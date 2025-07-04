import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Calendar, 
  MessageCircle, 
  Trees, 
  MapPin, 
  DollarSign,
  ArrowUp,
  FileText
} from 'lucide-react';

const MiDashboard: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-radial from-emerald-200/40 via-emerald-300/20 to-transparent rounded-full animate-float-1 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-radial from-teal-200/50 via-teal-300/25 to-transparent rounded-full animate-float-2 blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-radial from-green-200/35 via-green-300/20 to-transparent rounded-full animate-float-3 blur-3xl"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-1/6 right-1/4 w-48 h-48 bg-gradient-radial from-emerald-300/30 via-emerald-400/15 to-transparent rounded-full animate-wave-slow blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-radial from-teal-300/40 via-teal-400/20 to-transparent rounded-full animate-wave-medium blur-2xl"></div>
        
        {/* Flowing wave effects */}
        <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent animate-wave-flow-1 blur-sm"></div>
        <div className="absolute bottom-1/3 right-0 w-full h-24 bg-gradient-to-l from-transparent via-teal-200/25 to-transparent animate-wave-flow-2 blur-sm"></div>
        
        {/* Particle effects */}
        <div className="absolute bottom-0 left-1/6 w-2 h-2 bg-emerald-400/60 rounded-full animate-particle-1"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-teal-400/70 rounded-full animate-particle-2"></div>
        <div className="absolute bottom-0 right-1/6 w-3 h-3 bg-green-400/50 rounded-full animate-particle-3"></div>
      </div>

      {/* Overlay for better content readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]"></div>

      {/* Dashboard Content */}
      <div className="relative z-10 p-8">
        {/* First Row - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {/* Río Santa Catarina */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-96">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Río Santa Catarina</h3>
            <div className="flex items-center justify-center mb-4 w-full">
              <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Últimos reportes
              </span>
            </div>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <p><span className="font-semibold">Abstracto:</span> Se reporta tiradero clandestino bajo el Puente Multimodal</p>
              <p><span className="font-semibold">Hora del reporte:</span> 3:41 pm</p>
              <p><span className="font-semibold">Fecha del reporte:</span> viernes 4 de julio 2025</p>
              <p><span className="font-semibold">Ranger reportante:</span> Mauricio Hinojosa</p>
              <p><span className="font-semibold">Responsable del seguimiento:</span> Christian P.</p>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-gray-500">Número de reportes</span>
              <div className="w-16 h-8 bg-emerald-100 rounded flex items-center justify-center">
                <span className="text-lg font-bold text-emerald-600">12</span>
              </div>
            </div>
          </div>

          {/* Manejos de Fauna */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-96">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Manejos de Fauna</h3>
            <div className="flex items-center justify-center mb-4 w-full">
              <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Últimos reportes
              </span>
            </div>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <p><span className="font-semibold">Abstracto:</span> Se reporta avistamiento de oso negro en Col. Altavista</p>
              <p><span className="font-semibold">Hora del reporte:</span> 3:41 pm</p>
              <p><span className="font-semibold">Fecha del reporte:</span> viernes 4 de julio 2025</p>
              <p><span className="font-semibold">Ranger reportante:</span> Mauricio Hinojosa</p>
              <p><span className="font-semibold">Responsable del seguimiento:</span> Christian P.</p>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-gray-500">Número de reportes</span>
              <div className="w-16 h-8 bg-emerald-100 rounded flex items-center justify-center">
                <span className="text-lg font-bold text-emerald-600">8</span>
              </div>
            </div>
          </div>

          {/* Protección de ANPs */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-96">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Protección de ANPs</h3>
            <div className="flex items-center justify-center mb-4 w-full">
              <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Últimos reportes
              </span>
            </div>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <p><span className="font-semibold">Abstracto:</span> Se atiende amenaza de construcción en ANP</p>
              <p><span className="font-semibold">ANP involucrada:</span> La Huasteca</p>
              <p><span className="font-semibold">Hora del reporte:</span> 3:41 pm</p>
              <p><span className="font-semibold">Fecha del reporte:</span> viernes 4 de julio 2025</p>
              <p><span className="font-semibold">Ranger reportante:</span> Mauricio Hinojosa</p>
              <p><span className="font-semibold">Responsable del seguimiento:</span> Christian P.</p>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-gray-500">Número de reportes</span>
              <div className="w-16 h-8 bg-emerald-100 rounded flex items-center justify-center">
                <span className="text-lg font-bold text-emerald-600">5</span>
              </div>
            </div>
          </div>

          {/* Temporadas de servicios */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-96">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Temporadas de servicios</h3>
            <div className="flex items-center justify-center mb-4 w-full">
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                Próximas temporadas
              </span>
            </div>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <p><span className="font-semibold text-red-600">VENADO:</span> 1 DE JULIO</p>
              <p><span className="font-semibold text-blue-600">PALOMA:</span> 2 DE ENERO</p>
              <p><span className="font-semibold text-green-600">PESCA:</span> 5 DE MARZO</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center mt-auto">
              <div>
                <div className="text-3xl font-bold text-emerald-600">189</div>
                <div className="text-xs text-gray-500">Licencias otorgadas en el mes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">400</div>
                <div className="text-xs text-gray-500">Permisos otorgados en el mes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">295</div>
                <div className="text-xs text-gray-500">UMAs registradas en total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-end">
          {/* Comunicación */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-48">
            <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Comunicación</h3>
            <div className="flex items-center justify-center mb-3 w-full">
              <span className="text-xs font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                Cumplimiento de metas
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {/* Color grid representing communication metrics */}
              {[
                'bg-red-500', 'bg-green-500', 'bg-green-500', 'bg-red-500', 'bg-green-500',
                'bg-green-500', 'bg-red-500', 'bg-green-500', 'bg-green-500', 'bg-green-500'
              ].map((color, index) => (
                <div key={index} className={`w-5 h-5 ${color} rounded`}></div>
              ))}
            </div>
          </div>

          {/* Parques Estatales */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-80">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Parques Estatales</h3>
            <div className="flex items-center justify-center mb-4 w-full">
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Actividades recientes
              </span>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-xl">
                <p className="font-semibold text-sm">Parque Estatal El Cuchillo</p>
                <p className="text-xs text-gray-600">Asistentes: 320</p>
                <p className="text-xs text-gray-600">Corte de caja: $85,000</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <p className="font-semibold text-sm">Parque Estatal La Huasteca</p>
                <p className="text-xs text-gray-600">Asistentes: 450</p>
                <p className="text-xs text-gray-600">Corte de caja: $120,000</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">Total visitantes</span>
              <span className="text-xs text-gray-500">Ingresos totales</span>
            </div>
          </div>

          {/* Turismo */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-80">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Turismo</h3>
            <div className="flex items-center justify-center mb-4 w-full">
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                Eventos recientes
              </span>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-xl">
                <p className="font-semibold text-sm">Gran Carrera La Estanzuela</p>
                <p className="text-xs text-gray-600">Asistentes: 850</p>
                <p className="text-xs text-gray-600">Corte de caja: $150,000</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <p className="font-semibold text-sm">Concierto El Cuchillo</p>
                <p className="text-xs text-gray-600">Asistentes: 1100</p>
                <p className="text-xs text-gray-600">Corte de caja: $450,000</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">Número de eventos</span>
              <span className="text-xs text-gray-500">Total recaudado</span>
            </div>
          </div>

          {/* Ingresos y datos financieros */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-80">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Ingresos y datos financieros</h3>
            <div className="flex items-center justify-center mb-4 w-full">
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                Comparativa anual
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="bg-gray-50 p-2 rounded">
                <span className="font-semibold">Ingresos 2024: $2,450,000</span>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <span className="font-semibold">Ingresos 2025: $4,620,000</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 flex items-center">
                  189%
                  <ArrowUp className="w-6 h-6 ml-2 text-emerald-600" />
                </div>
              </div>
              <div className="w-20 h-20">
                {/* Simple pie chart representation */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 to-red-400 relative">
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-700">2025</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs text-gray-500">Crecimiento interanual</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiDashboard;