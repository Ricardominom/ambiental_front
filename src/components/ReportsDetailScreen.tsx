import React from 'react';
import { ArrowLeft, FileText, Calendar, Clock, User, MapPin, AlertTriangle } from 'lucide-react';
import { globalReportsManager, GlobalReport } from '../utils/globalStorage';

interface ReportsDetailScreenProps {
  cardType: string;
  cardTitle: string;
  onGoBack: () => void;
}

const ReportsDetailScreen: React.FC<ReportsDetailScreenProps> = ({ 
  cardType, 
  cardTitle, 
  onGoBack 
}) => {
  const reports = globalReportsManager.getDashboardReportsByCardType(cardType);

  const getPolo = (createdBy: string) => {
    if (createdBy === 'Polo Oriente') return 'Polo Oriente';
    if (createdBy === 'Polo Poniente') return 'Polo Poniente';
    return createdBy;
  };

  const renderReportCard = (report: GlobalReport) => {
    return (
      <div key={report.id} className="bg-white border-2 border-emerald-100 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 transform hover:scale-[1.01]">
        {/* Header del reporte */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {getPolo(report.createdBy)}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido específico por tipo de card */}
        <div className="space-y-4">
          
          {/* Campos específicos según el tipo de card */}
          {(cardType === 'rio-santa-catarina' || cardType === 'manejos-fauna') && (
            <>
              {report.abstracto && (
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-gray-800 block mb-2 text-sm">Abstracto:</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{report.abstracto}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.horaReporte && (
                  <div className="flex items-start text-gray-700 bg-purple-50 p-3 rounded-xl border border-purple-100">
                    <Clock className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Hora:</span>
                      <span className="text-gray-600 text-sm">{report.horaReporte}</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start text-gray-700 bg-blue-50 p-3 rounded-xl border border-blue-100">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-gray-800 block text-sm">Fecha:</span>
                    <span className="text-gray-600 text-sm">{report.fechaCreacion}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.rangerReportante && (
                  <div className="flex items-start text-gray-700 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <User className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Ranger:</span>
                      <span className="text-gray-600 text-sm">{report.rangerReportante}</span>
                    </div>
                  </div>
                )}
                
                {report.responsableSeguimiento && (
                  <div className="flex items-start text-gray-700 bg-orange-50 p-3 rounded-xl border border-orange-100">
                    <User className="w-4 h-4 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Responsable:</span>
                      <span className="text-gray-600 text-sm">{report.responsableSeguimiento}</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {cardType === 'proteccion-anps' && (
            <>
              {report.abstracto && (
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-gray-800 block mb-2 text-sm">Abstracto:</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{report.abstracto}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.horaReporte && (
                  <div className="flex items-start text-gray-700 bg-purple-50 p-3 rounded-xl border border-purple-100">
                    <Clock className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Hora:</span>
                      <span className="text-gray-600 text-sm">{report.horaReporte}</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start text-gray-700 bg-blue-50 p-3 rounded-xl border border-blue-100">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-gray-800 block text-sm">Fecha:</span>
                    <span className="text-gray-600 text-sm">{report.fechaCreacion}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.rangerReportante && (
                  <div className="flex items-start text-gray-700 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <User className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Ranger:</span>
                      <span className="text-gray-600 text-sm">{report.rangerReportante}</span>
                    </div>
                  </div>
                )}
                
                {report.responsableSeguimiento && (
                  <div className="flex items-start text-gray-700 bg-orange-50 p-3 rounded-xl border border-orange-100">
                    <User className="w-4 h-4 mr-2 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Responsable:</span>
                      <span className="text-gray-600 text-sm">{report.responsableSeguimiento}</span>
                    </div>
                  </div>
                )}
              </div>
              
              {report.anpInvolucrada && (
                <div className="flex items-start text-gray-700 bg-green-50 p-3 rounded-xl border border-green-100">
                  <MapPin className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-gray-800 block text-sm">ANP:</span>
                    <span className="text-gray-600 text-sm">{report.anpInvolucrada}</span>
                  </div>
                </div>
              )}
            </>
          )}

          {(cardType === 'parques-estatales' || cardType === 'turismo') && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.horaReporte && (
                  <div className="flex items-start text-gray-700 bg-purple-50 p-3 rounded-xl border border-purple-100">
                    <Clock className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Hora:</span>
                      <span className="text-gray-600 text-sm">{report.horaReporte}</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start text-gray-700 bg-blue-50 p-3 rounded-xl border border-blue-100">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-gray-800 block text-sm">Fecha:</span>
                    <span className="text-gray-600 text-sm">{report.fechaCreacion}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.parqueEstatal && (
                  <div className="flex items-start text-gray-700 bg-green-50 p-3 rounded-xl border border-green-100">
                    <MapPin className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Parque:</span>
                      <span className="text-gray-600 text-sm">{report.parqueEstatal}</span>
                    </div>
                  </div>
                )}
                
                {report.nombreEvento && (
                  <div className="flex items-start text-gray-700 bg-purple-50 p-3 rounded-xl border border-purple-100">
                    <FileText className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Evento:</span>
                      <span className="text-gray-600 text-sm">{report.nombreEvento}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {report.asistentes && (
                  <div className="flex items-start text-gray-700 bg-blue-50 p-3 rounded-xl border border-blue-100">
                    <User className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Asistentes:</span>
                      <span className="text-gray-600 text-sm">{report.asistentes}</span>
                    </div>
                  </div>
                )}
                
                {report.corteCaja && (
                  <div className="flex items-start text-gray-700 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <AlertTriangle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 block text-sm">Corte de Caja:</span>
                      <span className="text-gray-600 text-sm font-semibold">{report.corteCaja}</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onGoBack}
              className="p-3 hover:bg-white/20 rounded-2xl transition-colors duration-200"
              title="Volver al dashboard"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-3xl font-bold">Reportes de {cardTitle}</h1>
              <p className="text-emerald-100 mt-1">
                {reports.length} reporte{reports.length !== 1 ? 's' : ''} encontrado{reports.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {reports.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reports.map(renderReportCard)}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No hay reportes disponibles
            </h2>
            <p className="text-gray-600 text-lg">
              No se encontraron reportes para {cardTitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsDetailScreen;