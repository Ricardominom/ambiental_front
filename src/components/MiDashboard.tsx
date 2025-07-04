import React from 'react';
import PieChart from './PieChart';
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
  FileText,
  Activity,
  Target,
  Zap,
  Award
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          {/* Río Santa Catarina - Diseño con gradiente y mejor jerarquía */}
          <div className="group relative bg-gradient-to-br from-white via-white to-blue-50/30 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-blue-200/50 hover:shadow-2xl hover:border-blue-300/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
            
            {/* Icon header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1.5 rounded-full shadow-sm">
                Últimos reportes
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
              Río Santa Catarina
            </h3>
            
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="bg-gray-50/80 p-3 rounded-xl border border-gray-100">
                <p className="font-semibold text-gray-800 mb-1">Abstracto:</p>
                <p className="text-gray-600">Se reporta tiradero clandestino bajo el Puente Multimodal</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-semibold text-blue-600">Hora:</span>
                  <p className="text-gray-600">3:41 pm</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-600">Fecha:</span>
                  <p className="text-gray-600">4 jul 2025</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-600">Ranger:</span>
                  <p className="text-gray-600">M. Hinojosa</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-600">Responsable:</span>
                  <p className="text-gray-600">Christian P.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl border border-blue-200/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
                <div className="text-xs text-gray-600 font-medium">Número de reportes</div>
              </div>
            </div>
          </div>

          {/* Manejos de Fauna - Diseño con tema verde */}
          <div className="group relative bg-gradient-to-br from-white via-white to-emerald-50/30 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-200/50 hover:shadow-2xl hover:border-emerald-300/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
            
            {/* Icon header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Trees className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1.5 rounded-full shadow-sm">
                Últimos reportes
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
              Manejos de Fauna
            </h3>
            
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="bg-gray-50/80 p-3 rounded-xl border border-gray-100">
                <p className="font-semibold text-gray-800 mb-1">Abstracto:</p>
                <p className="text-gray-600">Se reporta avistamiento de oso negro en Col. Altavista</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-semibold text-emerald-600">Hora:</span>
                  <p className="text-gray-600">3:41 pm</p>
                </div>
                <div>
                  <span className="font-semibold text-emerald-600">Fecha:</span>
                  <p className="text-gray-600">4 jul 2025</p>
                </div>
                <div>
                  <span className="font-semibold text-emerald-600">Ranger:</span>
                  <p className="text-gray-600">M. Hinojosa</p>
                </div>
                <div>
                  <span className="font-semibold text-emerald-600">Responsable:</span>
                  <p className="text-gray-600">Christian P.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-2xl border border-emerald-200/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">8</div>
                <div className="text-xs text-gray-600 font-medium">Número de reportes</div>
              </div>
            </div>
          </div>

          {/* Protección de ANPs - Diseño con tema púrpura */}
          <div className="group relative bg-gradient-to-br from-white via-white to-purple-50/30 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-purple-200/50 hover:shadow-2xl hover:border-purple-300/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
            
            {/* Icon header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1.5 rounded-full shadow-sm">
                Últimos reportes
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
              Protección de ANPs
            </h3>
            
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="bg-gray-50/80 p-3 rounded-xl border border-gray-100">
                <p className="font-semibold text-gray-800 mb-1">Abstracto:</p>
                <p className="text-gray-600">Se atiende amenaza de construcción en ANP</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-semibold text-purple-600">ANP:</span>
                  <p className="text-gray-600">La Huasteca</p>
                </div>
                <div>
                  <span className="font-semibold text-purple-600">Fecha:</span>
                  <p className="text-gray-600">4 jul 2025</p>
                </div>
                <div>
                  <span className="font-semibold text-purple-600">Ranger:</span>
                  <p className="text-gray-600">M. Hinojosa</p>
                </div>
                <div>
                  <span className="font-semibold text-purple-600">Responsable:</span>
                  <p className="text-gray-600">Christian P.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-2xl border border-purple-200/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">5</div>
                <div className="text-xs text-gray-600 font-medium">Número de reportes</div>
              </div>
            </div>
          </div>

          {/* Temporadas de servicios - Diseño con múltiples colores */}
          <div className="group relative bg-gradient-to-br from-white via-white to-orange-50/30 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-orange-200/50 hover:shadow-2xl hover:border-orange-300/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
            
            {/* Icon header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1.5 rounded-full shadow-sm">
                Próximas temporadas
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-700 transition-colors duration-300">
              Temporadas de servicios
            </h3>
            
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center justify-between bg-red-50 p-2 rounded-lg border border-red-200">
                <span className="font-bold text-red-700">VENADO:</span>
                <span className="text-red-600 font-semibold">1 DE JULIO</span>
              </div>
              <div className="flex items-center justify-between bg-blue-50 p-2 rounded-lg border border-blue-200">
                <span className="font-bold text-blue-700">PALOMA:</span>
                <span className="text-blue-600 font-semibold">2 DE ENERO</span>
              </div>
              <div className="flex items-center justify-between bg-green-50 p-2 rounded-lg border border-green-200">
                <span className="font-bold text-green-700">PESCA:</span>
                <span className="text-green-600 font-semibold">5 DE MARZO</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-3 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">189</div>
                <div className="text-xs text-gray-600 leading-tight">Licencias otorgadas</div>
              </div>
              <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-3 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">400</div>
                <div className="text-xs text-gray-600 leading-tight">Permisos otorgados</div>
              </div>
              <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-3 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">295</div>
                <div className="text-xs text-gray-600 leading-tight">UMAs registradas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - 4 Cards con diseños únicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Comunicación - Diseño con grid visual */}
          <div className="group relative bg-gradient-to-br from-white via-white to-pink-50/30 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-200/50 hover:shadow-2xl hover:border-pink-300/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1.5 rounded-full shadow-sm">
                Cumplimiento de metas
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-6 group-hover:text-pink-700 transition-colors duration-300">
              Comunicación
            </h3>
            
            <div className="grid grid-cols-5 gap-3 mb-4">
              {[
                'bg-red-400', 'bg-emerald-400', 'bg-emerald-400', 'bg-red-400', 'bg-emerald-400',
                'bg-emerald-400', 'bg-red-400', 'bg-emerald-400', 'bg-emerald-400', 'bg-emerald-400'
              ].map((color, index) => (
                <div key={index} className={`w-6 h-6 ${color} rounded-lg shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer`}></div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-3 rounded-xl border border-pink-200">
              <div className="text-center">
                <div className="text-lg font-bold text-pink-600">70%</div>
                <div className="text-xs text-gray-600">Efectividad</div>
              </div>
            </div>
          </div>

          {/* Parques Estatales - Diseño con lista mejorada */}
          <div className="group relative bg-gradient-to-br from-white via-white to-teal-50/30 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-teal-200/50 hover:shadow-2xl hover:border-teal-300/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-80">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Trees className="w-6 h-6 text-white" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-6 group-hover:text-teal-700 transition-colors duration-300">
              Parques Estatales
            </h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-2xl border border-teal-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-teal-800">El Cuchillo</p>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>
                    <span className="font-semibold">Asistentes:</span>
                    <p className="text-teal-700 font-bold">320</p>
                  </div>
                  <div>
                    <span className="font-semibold">Ingresos:</span>
                    <p className="text-teal-700 font-bold">$85,000</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-2xl border border-teal-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-teal-800">La Huasteca</p>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>
                    <span className="font-semibold">Asistentes:</span>
                    <p className="text-teal-700 font-bold">450</p>
                  </div>
                  <div>
                    <span className="font-semibold">Ingresos:</span>
                    <p className="text-teal-700 font-bold">$120,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Turismo - Diseño con métricas destacadas */}
          <div className="group relative bg-gradient-to-br from-white via-white to-indigo-50/30 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-indigo-200/50 hover:shadow-2xl hover:border-indigo-300/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-80">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1.5 rounded-full shadow-sm">
                Últimos reportes
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
              Turismo
            </h3>
            
            <div className="space-y-3 mb-4">
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-3 rounded-xl border border-indigo-200">
                <p className="font-bold text-indigo-800 text-sm">Gran Carrera La Estanzuela</p>
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>850 asistentes</span>
                  <span className="font-bold text-indigo-600">$150,000</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-3 rounded-xl border border-indigo-200">
                <p className="font-bold text-indigo-800 text-sm">Concierto El Cuchillo</p>
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>1100 asistentes</span>
                  <span className="font-bold text-indigo-600">$450,000</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-3 rounded-xl text-center border border-indigo-300">
                <div className="text-2xl font-bold text-indigo-700">12</div>
                <div className="text-xs text-gray-600 font-medium">Eventos</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-3 rounded-xl text-center border border-indigo-300">
                <div className="text-2xl font-bold text-indigo-700">$600K</div>
                <div className="text-xs text-gray-600 font-medium">Recaudado</div>
              </div>
            </div>
          </div>

          {/* Ingresos y datos financieros - Diseño con gráfico mejorado */}
          <div className="group relative bg-gradient-to-br from-white via-white to-green-50/30 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-green-200/50 hover:shadow-2xl hover:border-green-300/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-80">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1.5 rounded-full shadow-sm">
                Comparativa anual
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
              Ingresos Financieros
            </h3>
            
            <div className="space-y-2 mb-4">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-xl border border-red-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-red-700">2024</span>
                  <span className="text-sm font-bold text-red-600">$2,450,000</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-xl border border-green-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-green-700">2025</span>
                  <span className="text-sm font-bold text-green-600">$4,620,000</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-green-600">189%</span>
                  <ArrowUp className="w-6 h-6 ml-2 text-green-600" />
                </div>
                <div className="text-xs text-gray-600 font-medium">Crecimiento</div>
              </div>
              <div className="relative">
                <PieChart
                  data={[
                    { label: '2024', value: 2450000, color: '#ef4444' },
                    { label: '2025', value: 4620000, color: '#10b981' }
                  ]}
                  size={80}
                  centerText="2025"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiDashboard;