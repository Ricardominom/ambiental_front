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
      fechaCreacion: new