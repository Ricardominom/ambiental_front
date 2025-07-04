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
  FileText
} from 'lucide-react';

const MiDashboard: React.FC = () => {
  return (
    <div className="h-[calc(100vh-5rem)] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
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
      <div className="relative z-10 p-4 h-full flex flex-col">
        {/* First Row - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4 flex-1">
          {/* Río Santa Catarina */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-center">Río Santa Catarina</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Últimos reportes
              </span>
            </div>
            <div className="space-y-1 text-xs text-gray-600 flex-1">
              <p><span className="font-semibold">Abstracto:</span> Se reporta tiradero clandestino bajo el Puente Multimodal</p>
              <p><span className="font-semibold">Hora del reporte:</span> 3:41 pm</p>
              <p><span className="font-semibold">Fecha del reporte:</span> viernes 4 de julio 2025</p>
              <p><span className="font-semibold">Ranger reportante:</span> Mauricio Hinojosa</p>
              <p><span className="font-semibold">Responsable del seguimiento:</span> Christian P.</p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="bg-emerald-50 p-2 rounded-lg text-center w-full">
                <div className="text-lg font-bold text-emerald-600">12</div>
                <div className="text-xs text-gray-600 font-medium">Número de reportes</div>
              </div>
            </div>
          </div>

          {/* Manejos de Fauna */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-center">Manejos de Fauna</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Últimos reportes
              </span>
            </div>
            <div className="space-y-1 text-xs text-gray-600 flex-1">
              <p><span className="font-semibold">Abstracto:</span> Se reporta avistamiento de oso negro en Col. Altavista</p>
              <p><span className="font-semibold">Hora del reporte:</span> 3:41 pm</p>
              <p><span className="font-semibold">Fecha del reporte:</span> viernes 4 de julio 2025</p>
              <p><span className="font-semibold">Ranger reportante:</span> Mauricio Hinojosa</p>
              <p><span className="font-semibold">Responsable del seguimiento:</span> Christian P.</p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="bg-emerald-50 p-2 rounded-lg text-center w-full">
                <div className="text-lg font-bold text-emerald-600">8</div>
                <div className="text-xs text-gray-600 font-medium">Número de reportes</div>
              </div>
            </div>
          </div>

          {/* Protección de ANPs */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-center">Protección de ANPs</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Últimos reportes
              </span>
            </div>
            <div className="space-y-1 text-xs text-gray-600 flex-1">
              <p><span className="font-semibold">Abstracto:</span> Se atiende amenaza de construcción en ANP</p>
              <p><span className="font-semibold">ANP involucrada:</span> La Huasteca</p>
              <p><span className="font-semibold">Hora del reporte:</span> 3:41 pm</p>
              <p><span className="font-semibold">Fecha del reporte:</span> viernes 4 de julio 2025</p>
              <p><span className="font-semibold">Ranger reportante:</span> Mauricio Hinojosa</p>
              <p><span className="font-semibold">Responsable del seguimiento:</span> Christian P.</p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="bg-emerald-50 p-2 rounded-lg text-center w-full">
                <div className="text-lg font-bold text-emerald-600">5</div>
                <div className="text-xs text-gray-600 font-medium">Número de reportes</div>
              </div>
            </div>
          </div>

          {/* Temporadas de servicios */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-center">Temporadas de servicios</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                Próximas temporadas
              </span>
            </div>
            <div className="space-y-1 text-xs text-gray-600 mb-2 flex-1">
              <p className="text-sm"><span className="font-semibold text-red-600">VENADO:</span> 1 DE JULIO</p>
              <p className="text-sm"><span className="font-semibold text-blue-600">PALOMA:</span> 2 DE ENERO</p>
              <p className="text-sm"><span className="font-semibold text-green-600">PESCA:</span> 5 DE MARZO</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-lg font-bold text-emerald-600">189</div>
                <div className="text-xs text-gray-500">Licencias otorgadas en el mes</div>
              </div>
              <div>
                <div className="text-lg font-bold text-emerald-600">400</div>
                <div className="text-xs text-gray-500">Permisos otorgados en el mes</div>
              </div>
              <div>
                <div className="text-lg font-bold text-emerald-600">295</div>
                <div className="text-xs text-gray-500">UMAs registradas en total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 flex-1">
          {/* Comunicación */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-center">Comunicación</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                Cumplimiento de metas
              </span>
            </div>
            <div className="grid grid-cols-5 gap-1 items-center">
              {/* Color grid representing communication metrics */}
              {[
                'bg-red-500', 'bg-green-500', 'bg-green-500', 'bg-red-500', 'bg-green-500',
                'bg-green-500', 'bg-red-500', 'bg-green-500', 'bg-green-500', 'bg-green-500'
              ].map((color, index) => (
                <div key={index} className={`w-6 h-6 ${color} rounded`}></div>
              ))}
            </div>
          </div>

          {/* Parques Estatales */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-center">Parques Estatales</h3>
            <div className="space-y-2 flex-1">
              <div className="bg-gray-50 p-2 rounded-xl">
                <p className="font-semibold text-xs">Parque Estatal El Cuchillo</p>
                <p className="text-xs text-gray-600">Asistentes: 320</p>
                <p className="text-xs text-gray-600">Corte de caja: $85,000</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-xl">
                <p className="font-semibold text-xs">Parque Estatal La Huasteca</p>
                <p className="text-xs text-gray-600">Asistentes: 450</p>
                <p className="text-xs text-gray-600">Corte de caja: $120,000</p>
              </div>
            </div>
          </div>

          {/* Turismo */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-center">Turismo</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Últimos reportes
              </span>
            </div>
            <div className="space-y-1 flex-1">
              <div className="bg-gray-50 p-2 rounded-xl">
                <p className="font-semibold text-xs">Gran Carrera La Estanzuela</p>
                <p className="text-xs text-gray-600">Asistentes: 850</p>
                <p className="text-xs text-gray-600">Corte de caja: $150,000</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-xl">
                <p className="font-semibold text-xs">Concierto El Cuchillo</p>
                <p className="text-xs text-gray-600">Asistentes: 1100</p>
                <p className="text-xs text-gray-600">Corte de caja: $450,000</p>
              </div>
              <div className="grid grid-cols-2 gap-1 mt-1">
                <div className="bg-emerald-50 p-1.5 rounded-lg text-center">
                  <div className="text-sm font-bold text-emerald-600">12</div>
                  <div className="text-xs text-gray-600 font-medium">Número de eventos</div>
                </div>
                <div className="bg-emerald-50 p-1.5 rounded-lg text-center">
                  <div className="text-sm font-bold text-emerald-600">$600K</div>
                  <div className="text-xs text-gray-600 font-medium">Total recaudado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Ingresos y datos financieros */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-2 text-center">Ingresos y datos financieros</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                Comparativa anual
              </span>
            </div>
            <div className="space-y-1 text-xs text-gray-600 mb-2 flex-1">
              <div className="bg-gray-50 p-2 rounded">
                <span className="font-semibold">Ingresos 2024: $2,450,000</span>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <span className="font-semibold">Ingresos 2025: $4,620,000</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 flex items-center">
                  189%
                  <ArrowUp className="w-4 h-4 ml-1 text-emerald-600" />
                </div>
              </div>
              <PieChart
                data={[
                  { label: '2024', value: 2450000, color: '#ef4444' },
                  { label: '2025', value: 4620000, color: '#10b981' }
                ]}
                size={200}
                centerText="2025"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiDashboard;