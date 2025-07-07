import React, { useState } from "react";
import Layout from "./components/Layout";
import LoginScreen from "./components/LoginScreen";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import MyReports from "./components/MyReports";
import ManagementDashboard from "./components/ManagementDashboard";
import DirectoryLinks from "./components/DirectoryLinks";
import MiDashboard from "./components/MiDashboard";

interface Report {
  id: string;
  fuenteReporte: string;
  descripcion: string;
  telefonoContacto: string;
  peticionReportante: string;
  fotosVideos: File | null;
  ubicacion: string;
  dependenciasInvolucradas: string[];
  operadorAsignado: string;
  fechaCreacion: string;
  estado: "Pendiente" | "En proceso" | "Completado" | "Cancelado";
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [activeSection, setActiveSection] = useState("reportes");
  const [showManagementDashboard, setShowManagementDashboard] = useState(false);
  const [reports, setReports] = useState<Report[]>([
    {
      id: "1",
      fuenteReporte: "Llamada de teléfono a la Guardia Forestal",
      descripcion:
        "Se reporta vertido de aguas residuales sin tratamiento en el Río Tijuana, cerca del puente vehicular. El agua presenta coloración oscura y mal olor. Se observan peces muertos flotando en la superficie. Los vecinos reportan que esto ocurre desde hace 3 días de manera continua.",
      telefonoContacto: "+52 664 123 4567",
      peticionReportante: "Solicita limpieza inmediata del río y identificación del origen de la contaminación",
      fotosVideos: null,
      ubicacion: "Río Tijuana, Puente Vehicular Zona Centro, Tijuana, B.C.",
      dependenciasInvolucradas: [
        "Fuerza Civil",
        "Agua y Drenaje",
        "PROFEPA",
        "Procuraduría Ambiental",
      ],
      operadorAsignado: "Limpieza de ríos",
      fechaCreacion: "15 de enero de 2025, 14:30",
      estado: "En proceso" as const,
    },
    {
      id: "2",
      fuenteReporte: "Mensaje por instagram a PVSNL",
      descripcion:
        "Empresa constructora está talando árboles centenarios sin permisos en zona protegida. Se han derribado aproximadamente 15 árboles de gran tamaño. La maquinaria pesada está operando sin autorización ambiental y está afectando el hábitat de especies locales.",
      telefonoContacto: "+52 664 987 6543",
      peticionReportante: "Detención inmediata de la tala y sanción a la empresa",
      fotosVideos: null,
      ubicacion: "Zona Protegida Cerro Colorado, Playas de Tijuana, B.C.",
      dependenciasInvolucradas: [
        "PROFEPA",
        "Procuraduría Ambiental",
        "Guardia Nacional",
        "Fuerza Civil",
      ],
      operadorAsignado: "ANPs",
      fechaCreacion: "12 de enero de 2025, 09:15",
      estado: "Completado" as const,
    },
  ]);

  const handleLoginSuccess = (user: any) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActiveSection("reportes");
    setShowManagementDashboard(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const handleSectionChange = (section: string) => {
    console.log("App handleSectionChange:", section);
    setShowManagementDashboard(false);
    setActiveSection(section);
  };

  const handleCreateReport = (reportData: {
    fuenteReporte: string;
    descripcion: string;
    telefonoContacto: string;
    peticionReportante: string;
    fotosVideos: File | null;
    ubicacion: string;
    dependenciasInvolucradas: string[];
    operadorAsignado: string;
  }) => {
    try {
      const newReport: Report = {
        ...reportData,
        id: Date.now().toString(),
        fechaCreacion: new Date().toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        estado: "Pendiente" as const,
      };

      setReports((prev) => [newReport, ...prev]);
      console.log("Reporte creado exitosamente:", newReport);
    } catch (error) {
      console.error("Error al crear el reporte:", error);
      alert("Error inesperado al crear el reporte");
    }
  };

  const handleDeleteReport = (id: string) => {
    setReports((prev) => prev.filter((report) => report.id !== id));
  };

  const handleGoToManagementDashboard = () => {
    setShowManagementDashboard(true);
  };

  const handleBackFromManagementDashboard = () => {
    setShowManagementDashboard(false);
  };

  const handleUpdateReport = async (updatedReport: Report) => {
    try {
      setReports((prev) =>
        prev.map((r) =>
          r.id === updatedReport.id ? { ...r, ...updatedReport } : r
        )
      );
    } catch {
      alert("Error al actualizar el reporte");
    }
  };

  // Si no está logueado, mostrar pantalla de login
  if (!isLoggedIn) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }

  // Renderizar contenido según la sección activa
  const renderContent = () => {
    if (showManagementDashboard) {
      return (
        <ManagementDashboard
          onGoBack={handleBackFromManagementDashboard}
          reports={reports}
          onUpdateReport={handleUpdateReport}
          onCreateReport={handleCreateReport}
        />
      );
    }

    switch (activeSection) {
      case "mis-mensajes":
        return <Chat />;
      case "mis-reportes":
        return (
          <MyReports
            reports={reports}
            onDeleteReport={handleDeleteReport}
            onGoToDashboard={handleGoToManagementDashboard}
          />
        );
      case "directorio-enlaces":
        return <DirectoryLinks />;
      case "mi-dashboard":
        return <MiDashboard currentUser={currentUser} onCreateReport={handleCreateReport} />;
      case "reportes":
      default:
        return <Dashboard onCreateReport={handleCreateReport} />;
    }
  };

  const getTitle = () => {
    if (showManagementDashboard) {
      return "Dashboard de Gestión";
    }

    switch (activeSection) {
      case "mis-mensajes":
        return "Mis Mensajes";
      case "mis-reportes":
        return "Mis Reportes";
      case "directorio-enlaces":
        return "Directorio de Enlaces";
      case "mi-dashboard":
        return "Mi dashboard";
      case "reportes":
      default:
        return "Reportes";
    }
  };

  return (
    <Layout
      activeItem={activeSection}
      onItemClick={handleSectionChange}
      onLogout={handleLogout}
      title={getTitle()}
    >
      {renderContent()}
    </Layout>
  );
}

export default App;