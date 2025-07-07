import { useState, useEffect } from 'react';

export interface DashboardReport {
  id: string;
  cardType: string;
  createdBy: string;
  abstracto?: string;
  descripcion: string;
  ubicacion?: string;
  telefonoContacto?: string;
  fechaReporte?: string;
  horaReporte: string;
  rangerReportante?: string;
  responsableSeguimiento?: string;
  anpInvolucrada?: string;
  parqueEstatal?: string;
  nombreEvento?: string;
  asistentes?: string;
  corteCaja?: string;
  fechaCreacion: string;
  estado: 'Pendiente' | 'En proceso' | 'Completado' | 'Cancelado';
}

export const useReports = () => {
  const [reports, setReports] = useState<DashboardReport[]>([]);

  // Cargar reportes desde localStorage al inicializar
  useEffect(() => {
    const savedReports = localStorage.getItem('dashboardReports');
    if (savedReports && savedReports !== '[]') {
      try {
        const parsedReports = JSON.parse(savedReports);
        if (parsedReports.length > 0) {
          setReports(parsedReports);
        } else {
          initializeDefaultReports();
        }
      } catch (error) {
        console.error('Error al cargar reportes desde localStorage:', error);
        // Si hay error, inicializar con reportes de ejemplo
        initializeDefaultReports();
      }
    } else {
      // Si no hay reportes guardados, crear algunos de ejemplo
      initializeDefaultReports();
    }
  }, []);

  // Guardar reportes en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('dashboardReports', JSON.stringify(reports));
  }, [reports]);

  const initializeDefaultReports = () => {
    const defaultReports: DashboardReport[] = [
      // Río Santa Catarina - 1 reporte
      {
        id: 'rsc-default-1',
        cardType: 'rio-santa-catarina',
        createdBy: 'RIR Oriente',
        abstracto: 'Tiradero clandestino bajo Puente Multimodal',
        descripcion: 'Acumulación de residuos sólidos y líquidos contaminantes.',
        ubicacion: 'Puente Multimodal, Río Santa Catarina',
        fechaReporte: '2025-01-04',
        horaReporte: '15:41',
        rangerReportante: 'Mauricio Hinojosa',
        responsableSeguimiento: 'Christian P.',
        fechaCreacion: new Date().toISOString(),
        estado: 'En proceso'
      },

      // Manejos de Fauna - 1 reporte
      {
        id: 'mf-default-1',
        cardType: 'manejos-fauna',
        createdBy: 'RIR Poniente',
        abstracto: 'Avistamiento de oso negro en Col. Altavista',
        descripcion: 'Oso negro adulto en zona residencial, requiere reubicación.',
        ubicacion: 'Colonia Altavista, Monterrey',
        fechaReporte: '2025-01-03',
        horaReporte: '08:30',
        rangerReportante: 'Ana García',
        responsableSeguimiento: 'Luis M.',
        fechaCreacion: new Date().toISOString(),
        estado: 'En proceso'
      },

      // Protección ANPs - 1 reporte
      {
        id: 'anp-default-1',
        cardType: 'proteccion-anps',
        createdBy: 'RIR Oriente',
        abstracto: 'Construcción irregular en ANP La Huasteca',
        descripcion: 'Construcción sin permisos en zona protegida.',
        ubicacion: 'ANP La Huasteca, sector oeste',
        anpInvolucrada: 'La Huasteca',
        fechaReporte: '2025-01-02',
        horaReporte: '12:15',
        rangerReportante: 'Carlos Mendoza',
        responsableSeguimiento: 'María S.',
        fechaCreacion: new Date().toISOString(),
        estado: 'En proceso'
      },

      // Parques Estatales - 1 reporte
      {
        id: 'pe-default-1',
        cardType: 'parques-estatales',
        createdBy: 'RIR Poniente',
        parqueEstatal: 'El Cuchillo',
        asistentes: '320',
        corteCaja: '$85,000',
        descripcion: 'Reporte diario de actividades del parque.',
        fechaCreacion: new Date().toISOString(),
        horaReporte: '18:00',
        estado: 'Completado'
      },

      // Turismo - 1 reporte
      {
        id: 'tur-default-1',
        cardType: 'turismo',
        createdBy: 'RIR Oriente',
        nombreEvento: 'Gran Carrera La Estanzuela',
        asistentes: '850',
        corteCaja: '$150,000',
        descripcion: 'Evento deportivo con gran participación.',
        fechaCreacion: new Date().toISOString(),
        horaReporte: '20:30',
        estado: 'Completado'
      }
    ];

    setReports(defaultReports);
    // Forzar guardado inmediato en localStorage
    localStorage.setItem('dashboardReports', JSON.stringify(defaultReports));
  };

  const addReport = (reportData: Omit<DashboardReport, 'id' | 'fechaCreacion'>) => {
    const newReport: DashboardReport = {
      ...reportData,
      id: `report-${Date.now()}`,
      fechaCreacion: new Date().toISOString()
    };

    setReports(prev => [newReport, ...prev]);
    return newReport;
  };

  const updateReport = (id: string, updates: Partial<DashboardReport>) => {
    setReports(prev => 
      prev.map(report => 
        report.id === id ? { ...report, ...updates } : report
      )
    );
  };

  const deleteReport = (id: string) => {
    setReports(prev => prev.filter(report => report.id !== id));
  };

  const getReportsByCardType = (cardType: string) => {
    return reports.filter(report => report.cardType === cardType);
  };

  const getReportsCount = (cardType: string) => {
    return reports.filter(report => report.cardType === cardType).length;
  };

  const getLatestReport = (cardType: string) => {
    const cardReports = getReportsByCardType(cardType);
    return cardReports.length > 0 ? cardReports[0] : null;
  };

  return {
    reports,
    addReport,
    updateReport,
    deleteReport,
    getReportsByCardType,
    getReportsCount,
    getLatestReport
  };
};