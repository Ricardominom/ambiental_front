import React from 'react';
import { useState } from 'react';
import PieChart from './PieChart';
import RIRReportForm from './RIRReportForm';
import { globalReportsManager, GlobalReport } from '../utils/globalStorage';
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
}

const MiDashboard: React.FC<MiDashboardProps> = ({ currentUser }) => {
  const [showRIRForm, setShowRIRForm] = useState(false);
  const [selectedCardType, setSelectedCardType] = useState<string>('');
  const [refreshKey, setRefreshKey] = useState(0);

  const isRIRUser = currentUser?.role === 'rir';

  const handleCreateReport = (reportData: any) => {
    // Crear reporte en el sistema global
    const globalReportData: Omit<GlobalReport, 'id'> = {
      type: 'dashboard' as const,
      cardType: selectedCardType,
      createdBy: currentUser?.nombre || currentUser?.username || 'Usuario Anónimo',
      createdByUserId: currentUser?.id || 'unknown',
      ...reportData,
      fuenteReporte: reportData.fuenteReporte || 'RIR - Reporte Interno',
      dependenciasInvolucradas: reportData.dependenciasInvolucradas || getDefaultDependencies(selectedCardType),
      operadorAsignado: reportData.operadorAsignado || getDefaultOperator(selectedCardType),
      fechaCreacion: new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })
    };

    globalReportsManager.addReport(globalReportData);
    setRefreshKey(prev => prev + 1);
    setShowRIRForm(false);
    setSelectedCardType('');
  };

  const getDefaultDependencies = (cardType: string): string[] => {
    switch (cardType) {
      case 'seguridad': return ['Seguridad', 'Operaciones'];
      case 'ambiental': return ['Medio Ambiente', 'Sostenibilidad'];
      case 'operacional': return ['Operaciones', 'Mantenimiento'];
      default: return ['General'];
    }
  };

  const getDefaultOperator = (cardType: string): string => {
    switch (cardType) {
      case 'seguridad': return 'Operador de Seguridad';
      case 'ambiental': return 'Especialista Ambiental';
      case 'operacional': return 'Supervisor de Operaciones';
      default: return 'Operador General';
    }
  };

  const dashboardCards = [
    {
      id: 'incidents',
      title: 'Incidentes Reportados',
      value: '24',
      change: '+12%',
      icon: Shield,
      color: 'bg-red-500',
      type: 'seguridad'
    },
    {
      id: 'visitors',
      title: 'Visitantes Hoy',
      value: '1,247',
      change: '+8%',
      icon: Users,
      color: 'bg-blue-500',
      type: 'operacional'
    },
    {
      id: 'conservation',
      title: 'Proyectos Activos',
      value: '18',
      change: '+3%',
      icon: Trees,
      color: 'bg-green-500',
      type: 'ambiental'
    },
    {
      id: 'revenue',
      title: 'Ingresos del Mes',
      value: '$45,230',
      change: '+15%',
      icon: DollarSign,
      color: 'bg-yellow-500',
      type: 'operacional'
    }
  ];

  const handleCardClick = (cardType: string) => {
    if (isRIRUser) {
      setSelectedCardType(cardType);
      setShowRIRForm(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard MI</h1>
          <p className="text-gray-600 mt-1">Monitoreo Integral de Parques Nacionales</p>
        </div>
        {isRIRUser && (
          <button
            onClick={() => setShowRIRForm(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Crear Reporte
          </button>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.type)}
              className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${
                isRIRUser ? 'cursor-pointer hover:shadow-md transition-shadow' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
                  <div className="flex items-center mt-2">
                    <ArrowUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600 ml-1">{card.change}</span>
                  </div>
                </div>
                <div className={`${card.color} p-3 rounded-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribución de Incidentes</h3>
          <PieChart />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <MessageCircle className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Nuevo mensaje del equipo</p>
                <p className="text-xs text-gray-500">Hace 5 minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <FileText className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Reporte completado</p>
                <p className="text-xs text-gray-500">Hace 15 minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Nueva ubicación registrada</p>
                <p className="text-xs text-gray-500">Hace 1 hora</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIR Report Form Modal */}
      {showRIRForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedCardType ? `Crear Reporte - ${selectedCardType}` : 'Crear Reporte RIR'}
              </h2>
              <button
                onClick={() => {
                  setShowRIRForm(false);
                  setSelectedCardType('');
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <RIRReportForm
              onSubmit={handleCreateReport}
              onCancel={() => {
                setShowRIRForm(false);
                setSelectedCardType('');
              }}
              cardType={selectedCardType}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MiDashboard;