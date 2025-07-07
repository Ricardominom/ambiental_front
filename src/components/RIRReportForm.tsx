import React, { useState } from 'react';
import { X, Save, MapPin, Phone, FileText, AlertTriangle, Users, Calendar, Clock } from 'lucide-react';

interface RIRReportFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
  cardType: 'rio-santa-catarina' | 'manejos-fauna' | 'proteccion-anps' | 'parques-estatales' | 'turismo';
}

const RIRReportForm: React.FC<RIRReportFormProps> = ({ onClose, onSubmit, cardType }) => {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const reportData = {
      ...formData,
      cardType,
      fuenteReporte: 'RIR - Reporte Interno',
      operadorAsignado: 'RIR',
      dependenciasInvolucradas: getDefaultDependencies(cardType),
    };

    onSubmit(reportData);
    onClose();
  };

  const getDefaultDependencies = (type: string): string[] => {
    switch (type) {
      case 'rio-santa-catarina':
        return ['SIMEPRODE', 'Agua y Drenaje', 'PEMA'];
      case 'manejos-fauna':
        return ['PEMA', 'Protección Civil'];
      case 'proteccion-anps':
        return ['PEMA', 'Guardia Nacional'];
      case 'parques-estatales':
        return ['PEMA', 'Servicios Públicos del Municipio'];
      case 'turismo':
        return ['PEMA', 'Protección Civil', 'Servicios Públicos del Municipio'];
      default:
        return ['PEMA'];
    }
  };

  const getFormTitle = (): string => {
    switch (cardType) {
      case 'rio-santa-catarina':
        return 'Nuevo Reporte - Río Santa Catarina';
      case 'manejos-fauna':
        return 'Nuevo Reporte - Manejos de Fauna';
      case 'proteccion-anps':
        return 'Nuevo Reporte - Protección de ANPs';
      case 'parques-estatales':
        return 'Nuevo Reporte - Parques Estatales';
      case 'turismo':
        return 'Nuevo Reporte - Turismo';
      default:
        return 'Nuevo Reporte';
    }
  };

  const renderSpecificFields = () => {
    switch (cardType) {
      case 'rio-santa-catarina':
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tipo de contaminación *
              </label>
              <select
                value={formData.tipoContaminacion || ''}
                onChange={(e) => handleInputChange('tipoContaminacion', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                required
              >
                <option value="">Seleccionar tipo</option>
                <option value="Aguas residuales">Aguas residuales</option>
                <option value="Químicos">Químicos</option>
                <option value="Basura">Basura</option>
                <option value="Aceites">Aceites</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Nivel de severidad *
              </label>
              <select
                value={formData.nivelSeveridad || ''}
                onChange={(e) => handleInputChange('nivelSeveridad', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                required
              >
                <option value="">Seleccionar nivel</option>
                <option value="Bajo">Bajo</option>
                <option value="Medio">Medio</option>
                <option value="Alto">Alto</option>
                <option value="Crítico">Crítico</option>
              </select>
            </div>
          </>
        );

      case 'manejos-fauna':
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tipo de fauna *
              </label>
              <select
                value={formData.tipoFauna || ''}
                onChange={(e) => handleInputChange('tipoFauna', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                required
              >
                <option value="">Seleccionar tipo</option>
                <option value="Oso negro">Oso negro</option>
                <option value="Venado">Venado</option>
                <option value="Jabalí">Jabalí</option>
                <option value="Aves rapaces">Aves rapaces</option>
                <option value="Reptiles">Reptiles</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Acción requerida *
              </label>
              <select
                value={formData.accionRequerida || ''}
                onChange={(e) => handleInputChange('accionRequerida', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                required
              >
                <option value="">Seleccionar acción</option>
                <option value="Rescate">Rescate</option>
                <option value="Reubicación">Reubicación</option>
                <option value="Monitoreo">Monitoreo</option>
                <option value="Atención médica">Atención médica</option>
                <option value="Control poblacional">Control poblacional</option>
              </select>
            </div>
          </>
        );

      case 'proteccion-anps':
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                ANP involucrada *
              </label>
              <select
                value={formData.anpInvolucrada || ''}
                onChange={(e) => handleInputChange('anpInvolucrada', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                required
              >
                <option value="">Seleccionar ANP</option>
                <option value="La Huasteca">La Huasteca</option>
                <option value="Cerro de la Silla">Cerro de la Silla</option>
                <option value="Cumbres de Monterrey">Cumbres de Monterrey</option>
                <option value="El Cerrito">El Cerrito</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tipo de amenaza *
              </label>
              <select
                value={formData.tipoAmenaza || ''}
                onChange={(e) => handleInputChange('tipoAmenaza', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                required
              >
                <option value="">Seleccionar amenaza</option>
                <option value="Construcción irregular">Construcción irregular</option>
                <option value="Tala ilegal">Tala ilegal</option>
                <option value="Caza furtiva">Caza furtiva</option>
                <option value="Contaminación">Contaminación</option>
                <option value="Invasión de terrenos">Invasión de terrenos</option>
              </select>
            </div>
          </>
        );

      case 'parques-estatales':
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Parque estatal *
              </label>
              <select
                value={formData.parqueEstatal || ''}
                onChange={(e) => handleInputChange('parqueEstatal', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                required
              >
                <option value="">Seleccionar parque</option>
                <option value="El Cuchillo">El Cuchillo</option>
                <option value="La Huasteca">La Huasteca</option>
                <option value="Cerro de la Silla">Cerro de la Silla</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tipo de incidente *
              </label>
              <select
                value={formData.tipoIncidente || ''}
                onChange={(e) => handleInputChange('tipoIncidente', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                required
              >
                <option value="">Seleccionar tipo</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Seguridad">Seguridad</option>
                <option value="Daño a infraestructura">Daño a infraestructura</option>
                <option value="Emergencia médica">Emergencia médica</option>
                <option value="Vandalismo">Vandalismo</option>
              </select>
            </div>
          </>
        );

      case 'turismo':
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tipo de evento *
              </label>
              <select
                value={formData.tipoEvento || ''}
                onChange={(e) => handleInputChange('tipoEvento', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                required
              >
                <option value="">Seleccionar tipo</option>
                <option value="Concierto">Concierto</option>
                <option value="Carrera">Carrera</option>
                <option value="Festival">Festival</option>
                <option value="Exposición">Exposición</option>
                <option value="Actividad recreativa">Actividad recreativa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Asistentes estimados
              </label>
              <input
                type="number"
                value={formData.asistentesEstimados || ''}
                onChange={(e) => handleInputChange('asistentesEstimados', e.target.value)}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                placeholder="Número de asistentes"
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl my-8 border border-emerald-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{getFormTitle()}</h2>
              <p className="text-emerald-100">Completa la información del reporte</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Información Básica */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                Información Básica
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Descripción del reporte *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.descripcion || ''}
                    onChange={(e) => handleInputChange('descripcion', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                    placeholder="Describe detalladamente el incidente..."
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <MapPin className="w-4 h-4 inline mr-2 text-emerald-600" />
                    Ubicación *
                  </label>
                  <input
                    type="text"
                    value={formData.ubicacion || ''}
                    onChange={(e) => handleInputChange('ubicacion', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                    placeholder="Ubicación específica del incidente"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Campos Específicos por Tipo */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-white" />
                </div>
                Detalles Específicos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderSpecificFields()}
              </div>
            </section>

            {/* Información de Contacto */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Teléfono de contacto
                  </label>
                  <input
                    type="tel"
                    value={formData.telefonoContacto || ''}
                    onChange={(e) => handleInputChange('telefonoContacto', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                    placeholder="+52 81 1234 5678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Petición del reportante
                  </label>
                  <textarea
                    rows={3}
                    value={formData.peticionReportante || ''}
                    onChange={(e) => handleInputChange('peticionReportante', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300"
                    placeholder="Petición o solicitud..."
                  />
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-200 flex items-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Crear Reporte</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RIRReportForm;