import React, { useState } from 'react';
import { ArrowLeft, FileText, Calendar, User, MapPin, Clock, Filter, Search, Eye, Edit, Trash2 } from 'lucide-react';
import { globalReportsManager, GlobalReport } from '../utils/globalStorage';

interface ReportsDetailViewProps {
  cardType: string;
  cardTitle: string;
  onGoBack: () => void;
  currentUser?: any;
}

const ReportsDetailView: React.FC<ReportsDetailViewProps> = ({ 
  cardType, 
  cardTitle, 
  onGoBack,
  currentUser 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedReport, setSelectedReport] = useState<GlobalReport | null>(null);

  // Obtener reportes específicos de esta categoría
  const categoryReports = globalReportsManager.getDashboardReportsByCardType(cardType);

  // Filtrar reportes según búsqueda y filtros
  const filteredReports = categoryReports.filter(report => {
    const matchesSearch = 
      report.abstracto?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.descripcion?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.createdBy?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.rangerReportante?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.responsableSeguimiento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.nombreEvento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.parqueEstatal?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !statusFilter || report.estado === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'En proceso': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Cancelado': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatCardTypeTitle = (type: string): string => {
    switch (type) {
      case 'rio-santa-catarina':
        return 'Río Santa Catarina';
      case 'manejos-fauna':
        return 'Manejos de Fauna';
      case 'proteccion-anps':
        return 'Protección de ANPs';
      case 'parques-estatales':
        return 'Parques Estatales';
      case 'turismo':
        return 'Turismo';
      default:
        return cardTitle;
    }
  };

  const renderReportCard = (report: GlobalReport) => {
    return (
      <div key={report.id} className="bg-white border-2 border-emerald-100 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 transform hover:scale-[1.01]">
        {/* Header del reporte */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-gray-800">
                {report.abstracto || report.nombreEvento || report.parqueEstatal || `Reporte #${report.id.slice(-6)}`}
              </h3>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(report.estado)}`}>
                {report.estado}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600 space-x-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1 text-emerald-600" />
                <span className="font-medium">{report.createdBy}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-emerald-600" />
                <span>{report.fechaCreacion}</span>
              </div>
              {report.horaReporte && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-emerald-600" />
                  <span>{report.horaReporte}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => setSelectedReport(report)}
              className="p-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100 rounded-xl transition-all duration-300 transform hover:scale-110"
              title="Ver detalles"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contenido específico según el tipo */}
        <div className="space-y-3">
          {/* Información común */}
          {report.descripcion && (
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <span className="font-bold text-gray-800 block mb-1 text-sm">Descripción</span>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                {report.descripcion}
              </p>
            </div>
          )}

          {/* Campos específicos por tipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {report.rangerReportante && (
              <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                <span className="font-bold text-gray-800 block text-sm">Ranger Reportante</span>
                <span className="text-gray-600 text-sm">{report.rangerReportante}</span>
              </div>
            )}
            
            {report.responsableSeguimiento && (
              <div className="bg-purple-50 p-3 rounded-xl border border-purple-100">
                <span className="font-bold text-gray-800 block text-sm">Responsable</span>
                <span className="text-gray-600 text-sm">{report.responsableSeguimiento}</span>
              </div>
            )}

            {report.anpInvolucrada && (
              <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                <span className="font-bold text-gray-800 block text-sm">ANP Involucrada</span>
                <span className="text-gray-600 text-sm">{report.anpInvolucrada}</span>
              </div>
            )}

            {report.asistentes && (
              <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                <span className="font-bold text-gray-800 block text-sm">Asistentes</span>
                <span className="text-gray-600 text-sm">{report.asistentes}</span>
              </div>
            )}

            {report.corteCaja && (
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <span className="font-bold text-gray-800 block text-sm">Corte de Caja</span>
                <span className="text-gray-600 text-sm font-medium">{report.corteCaja}</span>
              </div>
            )}
          </div>

          {/* Ubicación si existe */}
          {report.ubicacion && (
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-bold text-gray-800 block text-sm">Ubicación</span>
                  <span className="text-gray-600 text-sm">{report.ubicacion}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="min-h-[calc(100vh-5rem)] bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onGoBack}
                className="p-3 hover:bg-white/20 rounded-2xl transition-colors duration-200"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-3xl font-bold">Reportes de {formatCardTypeTitle(cardType)}</h1>
                <p className="text-emerald-100 mt-1">
                  {filteredReports.length} reporte{filteredReports.length !== 1 ? 's' : ''} encontrado{filteredReports.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white/20 px-4 py-2 rounded-xl">
                <span className="text-emerald-100 text-sm font-medium">
                  Total: {categoryReports.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros y búsqueda */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Búsqueda */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar reportes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filtro por estado */}
            <div className="md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
              >
                <option value="">Todos los estados</option>
                <option value="Pendiente">Pendiente</option>
                <option value="En proceso">En proceso</option>
                <option value="Completado">Completado</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista de reportes */}
        <div className="p-6">
          {filteredReports.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No se encontraron reportes
              </h3>
              <p className="text-gray-600">
                {searchTerm || statusFilter 
                  ? 'Intenta ajustar los filtros de búsqueda'
                  : 'No hay reportes disponibles para esta categoría'
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredReports.map(renderReportCard)}
            </div>
          )}
        </div>
      </div>

      {/* Modal de detalles del reporte */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-start justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl my-8 border border-emerald-100 overflow-hidden">
            {/* Header del modal */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Detalles del Reporte</h2>
                  <p className="text-emerald-100 text-sm mt-1">ID: {selectedReport.id}</p>
                </div>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors text-2xl leading-none"
                  title="Cerrar"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto space-y-6">
              {/* Información general */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-emerald-600" />
                  Información General
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="text-sm font-semibold text-gray-700 block mb-2">Creado por</span>
                    <p className="text-gray-900 font-medium">{selectedReport.createdBy}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="text-sm font-semibold text-gray-700 block mb-2">Estado</span>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border-2 ${getStatusColor(selectedReport.estado)}`}>
                      {selectedReport.estado}
                    </span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="text-sm font-semibold text-gray-700 block mb-2">Fecha de Creación</span>
                    <p className="text-gray-900 font-medium">{selectedReport.fechaCreacion}</p>
                  </div>
                  {selectedReport.horaReporte && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">Hora del Reporte</span>
                      <p className="text-gray-900 font-medium">{selectedReport.horaReporte}</p>
                    </div>
                  )}
                </div>
              </section>

              {/* Descripción */}
              {selectedReport.descripcion && (
                <section>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Descripción</h3>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-900 leading-relaxed">{selectedReport.descripcion}</p>
                  </div>
                </section>
              )}

              {/* Detalles específicos */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Detalles Específicos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedReport.abstracto && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">Abstracto</span>
                      <p className="text-gray-900 font-medium">{selectedReport.abstracto}</p>
                    </div>
                  )}
                  {selectedReport.rangerReportante && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">Ranger Reportante</span>
                      <p className="text-gray-900 font-medium">{selectedReport.rangerReportante}</p>
                    </div>
                  )}
                  {selectedReport.responsableSeguimiento && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">Responsable del Seguimiento</span>
                      <p className="text-gray-900 font-medium">{selectedReport.responsableSeguimiento}</p>
                    </div>
                  )}
                  {selectedReport.anpInvolucrada && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">ANP Involucrada</span>
                      <p className="text-gray-900 font-medium">{selectedReport.anpInvolucrada}</p>
                    </div>
                  )}
                  {selectedReport.nombreEvento && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">Nombre del Evento</span>
                      <p className="text-gray-900 font-medium">{selectedReport.nombreEvento}</p>
                    </div>
                  )}
                  {selectedReport.parqueEstatal && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">Parque Estatal</span>
                      <p className="text-gray-900 font-medium">{selectedReport.parqueEstatal}</p>
                    </div>
                  )}
                  {selectedReport.asistentes && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">Asistentes</span>
                      <p className="text-gray-900 font-medium">{selectedReport.asistentes}</p>
                    </div>
                  )}
                  {selectedReport.corteCaja && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">Corte de Caja</span>
                      <p className="text-gray-900 font-medium">{selectedReport.corteCaja}</p>
                    </div>
                  )}
                </div>
              </section>

              {/* Ubicación */}
              {selectedReport.ubicacion && (
                <section>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                    Ubicación
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-900 font-medium">{selectedReport.ubicacion}</p>
                  </div>
                </section>
              )}

              {/* Dependencias */}
              {selectedReport.dependenciasInvolucradas.length > 0 && (
                <section>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Dependencias Involucradas</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedReport.dependenciasInvolucradas.map((dep, index) => (
                      <span key={index} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium border border-emerald-200">
                        {dep}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportsDetailView;