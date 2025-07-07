import React from 'react';
import { useState } from 'react';
import PieChart from './PieChart';
import RIRReportForm from './RIRReportForm';
import { useReports } from '../hooks/useReports';
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
  Plus
} from 'lucide-react';

interface MiDashboardProps {
  currentUser?: any;
  onCreateReport?: (data: any) => void;
}

const MiDashboard: React.FC<MiDashboardProps> = ({ currentUser, onCreateReport }) => {
  const [showRIRForm, setShowRIRForm] = useState(false);
  const [selectedCardType, setSelectedCardType] = useState<string>('');
  
  const { 
    reports, 
    addReport, 
    getReportsCount, 
    getReportsByCardType 
  } = useReports();

  const isRIRUser = currentUser?.role === 'rir';

  const handleCreateReport = (reportData: any) => {
    // Agregar información del usuario que crea el reporte
    const reportWithUser = {
      ...reportData,
      createdBy: currentUser?.nombre || currentUser?.username || 'Usuario Anónimo'
    };

    // Guardar en el sistema de reportes del dashboard
    addReport(reportWithUser);

    // También llamar al callback original si existe (para compatibilidad)
    if (onCreateReport) {
      onCreateReport(reportWithUser);
    }
  };

  const renderReportCard = (
    title: string, 
    cardType: string, 
    statusColor: string = 'red',
    statusText: string = 'Últimos reportes'
  ) => {
    const reportsCount = getReportsCount(cardType);
    const cardReports = getReportsByCardType(cardType).slice(0, 6); // Máximo 6 reportes

    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-emerald-100 flex flex-col h-full">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-gray-800 text-center flex-1">{title}</h3>
          {isRIRUser && (
            <button
              onClick={() => {
                setSelectedCardType(cardType);
                setShowRIRForm(true);
              }}
              className="w-5 h-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0"
              title="Crear nuevo reporte"
            >
              <Plus className="w-3 h-3" />
            </button>
          )}
        </div>
        
        <div className="flex items-center justify-center mb-2 w-full">
          <span className={`text-xs font-semibold text-${statusColor}-600 bg-${statusColor}-100 px-2 py-1 rounded-full`}>
            {statusText}
          </span>
        </div>
        
        {/* Área de reportes con scroll */}
        <div className="flex-1 overflow-y-auto max-h-32 space-y-1 mb-2 custom-scrollbar">
          {cardReports.length > 0 ? (
            cardReports.map((report, index) => (
              <div key={report.id}>
                <div className="text-xs text-gray-600 space-y-1 p-2 bg-gray-50 rounded-lg">
                  <p><span className="font-bold text-gray-800">{report.createdBy}</span></p>
                  {report.abstracto && (
                    <p><span className="font-semibold">Abstracto:</span> {report.abstracto}</p>
                  )}
                  {report.horaReporte && (
                    <p><span className="font-semibold">Hora:</span> {report.horaReporte}</p>
                  )}
                  {report.fechaReporte && (
                    <p><span className="font-semibold">Fecha:</span> {new Date(report.fechaReporte).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  )}
                  {report.rangerReportante && (
                    <p><span className="font-semibold">Ranger:</span> {report.rangerReportante}</p>
                  )}
                  {report.responsableSeguimiento && (
                    <p><span className="font-semibold">Responsable:</span> {report.responsableSeguimiento}</p>
                  )}
                  {report.anpInvolucrada && (
                    <p><span className="font-semibold">ANP:</span> {report.anpInvolucrada}</p>
                  )}
                </div>
                {/* División entre reportes */}
                {index < cardReports.length - 1 && (
                  <div className="border-b border-gray-200 my-1"></div>
                )}
              </div>
            ))
          ) : (
            <p className="text-xs text-gray-500 italic p-2">No hay reportes disponibles</p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="bg-emerald-50 p-2 rounded-lg text-center w-full">
            <div className="text-lg font-bold text-emerald-600">{reportsCount}</div>
            <div className="text-xs text-gray-600 font-medium">Número de reportes</div>
          </div>
        </div>
      </div>
    );
  };

  const renderEventCard = (title: string, cardType: string) => {
    const reportsCount = getReportsCount(cardType);
    const cardReports = getReportsByCardType(cardType).slice(0, 6); // Máximo 6 reportes

    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-emerald-100 flex flex-col h-full">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-gray-800 text-center flex-1">{title}</h3>
          {isRIRUser && (
            <button
              onClick={() => {
                setSelectedCardType(cardType);
                setShowRIRForm(true);
              }}
              className="w-5 h-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0"
              title="Crear nuevo reporte"
            >
              <Plus className="w-3 h-3" />
            </button>
          )}
        </div>
        
        <div className="flex items-center justify-center mb-2 w-full">
          <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded-full">
            Últimos eventos
          </span>
        </div>
        
        {/* Área de eventos con scroll */}
        <div className="flex-1 overflow-y-auto max-h-32 space-y-1 mb-2 custom-scrollbar">
          {cardReports.length > 0 ? (
            cardReports.map((report, index) => (
              <div key={report.id}>
                <div className="bg-gray-50 p-2 rounded-lg">
                  <p className="font-bold text-xs text-gray-800 mb-1">
                    {report.createdBy}
                  </p>
                  <p className="font-semibold text-xs">
                    {report.nombreEvento || report.parqueEstatal || 'Evento'}
                  </p>
                  {report.asistentes && (
                    <p className="text-xs text-gray-600">Asistentes: {report.asistentes}</p>
                  )}
                  {report.corteCaja && (
                    <p className="text-xs text-gray-600">Corte: {report.corteCaja}</p>
                  )}
                </div>
                {/* División entre reportes */}
                {index < cardReports.length - 1 && (
                  <div className="border-b border-gray-200 my-1"></div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-gray-50 p-2 rounded-lg">
              <p className="text-xs text-gray-500 italic">No hay eventos registrados</p>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-emerald-50 p-1.5 rounded-lg text-center">
            <div className="text-sm font-bold text-emerald-600">{reportsCount}</div>
            <div className="text-xs text-gray-600 font-medium">Eventos</div>
          </div>
          <div className="bg-emerald-50 p-1.5 rounded-lg text-center">
            <div className="text-sm font-bold text-emerald-600">
              ${cardReports.reduce((total, report) => {
                const amount = report.corteCaja?.replace(/[$,]/g, '') || '0';
                return total + parseInt(amount);
              }, 0).toLocaleString()}
            </div>
            <div className="text-xs text-gray-600 font-medium">Total</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[calc(100vh-5rem)] bg-white">
      {/* Dashboard Content */}
      <div className="relative z-10 p-4 h-full flex flex-col gap-2">
        {/* First Row - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 flex-1">
          {/* Río Santa Catarina */}
          {renderReportCard('Río Santa Catarina', 'rio-santa-catarina')}

          {/* Manejos de Fauna */}
          {renderReportCard('Manejos de Fauna', 'manejos-fauna')}

          {/* Protección de ANPs */}
          {renderReportCard('Protección de ANPs', 'proteccion-anps')}

          {/* Temporadas de servicios */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-emerald-100 flex flex-col h-full">
            <h3 className="text-sm font-bold text-gray-800 mb-2 text-center">Temporadas de servicios</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                Próximas temporadas
              </span>
            </div>
            <div className="space-y-1 text-xs text-gray-600 mb-2 flex-1">
              <p><span className="font-semibold text-red-600">VENADO:</span> 1 DE JULIO</p>
              <p><span className="font-semibold text-blue-600">PALOMA:</span> 2 DE ENERO</p>
              <p><span className="font-semibold text-green-600">PESCA:</span> 5 DE MARZO</p>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center">
              <div>
                <div className="text-sm font-bold text-emerald-600">189</div>
                <div className="text-xs text-gray-500">Licencias</div>
              </div>
              <div>
                <div className="text-sm font-bold text-emerald-600">400</div>
                <div className="text-xs text-gray-500">Permisos</div>
              </div>
              <div>
                <div className="text-sm font-bold text-emerald-600">295</div>
                <div className="text-xs text-gray-500">UMAs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 flex-1">
          {/* Comunicación */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-emerald-100 flex flex-col h-full">
            <h3 className="text-sm font-bold text-gray-800 mb-2 text-center">Comunicación</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
                Cumplimiento de metas
              </span>
            </div>
            <div className="grid grid-cols-5 gap-1 flex-1 items-center">
              {/* Color grid representing communication metrics */}
              {[
                'bg-red-500', 'bg-green-500', 'bg-green-500', 'bg-red-500', 'bg-green-500',
                'bg-green-500', 'bg-red-500', 'bg-green-500', 'bg-green-500', 'bg-green-500'
              ].map((color, index) => (
                <div key={index} className={`w-8 h-8 ${color} rounded`}></div>
              ))}
            </div>
          </div>

          {/* Parques Estatales */}
          {renderEventCard('Parques Estatales', 'parques-estatales')}

          {/* Turismo */}
          {renderEventCard('Turismo', 'turismo')}

          {/* Ingresos y datos financieros */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-emerald-100 flex flex-col h-full">
            <h3 className="text-sm font-bold text-gray-800 mb-2 text-center">Ingresos y datos financieros</h3>
            <div className="flex items-center justify-center mb-2 w-full">
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                Comparativa anual
              </span>
            </div>
            <div className="space-y-1 text-xs text-gray-600 mb-2 flex-1">
              <div className="bg-gray-50 p-1 rounded text-center">
                <span className="font-semibold">2024: $2,450,000</span>
              </div>
              <div className="bg-gray-50 p-1 rounded text-center">
                <span className="font-semibold">2025: $4,620,000</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 flex items-center">
                  189%
                  <ArrowUp className="w-4 h-4 ml-1 text-emerald-600" />
                </div>
              </div>
              <PieChart
                data={[
                  { label: '2024', value: 2450000, color: '#ef4444' },
                  { label: '2025', value: 4620000, color: '#10b981' }
                ]}
                size={60}
                centerText="2025"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* RIR Report Form Modal */}
      {showRIRForm && (
        <RIRReportForm
          cardType={selectedCardType as any}
          onClose={() => {
            setShowRIRForm(false);
            setSelectedCardType('');
          }}
          onSubmit={(data) => {
            handleCreateReport(data);
            setShowRIRForm(false);
            setSelectedCardType('');
          }}
        />
      )}
    </div>
  );
};

export default MiDashboard;