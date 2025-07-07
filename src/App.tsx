import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Layout from "./components/Layout";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TEMPORAL: Comentado para permitir acceso sin credenciales
    /*
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email, // El backend espera "username" (puede ser email o username)
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Error de autenticación");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setIsLoggedIn(true);
    } catch (err) {
      alert("Error de conexión con el servidor");
    } finally {
      setIsLoading(false);
    }
    */

    // TEMPORAL: Login automático sin validación de credenciales
    try {
      // Simular datos de usuario para desarrollo
      let mockUser;
      
      // Verificar si es uno de los usuarios RIR
      if (email === "rir.oriente" || email === "RIR Oriente") {
        mockUser = {
          id: "rir_oriente",
          username: "RIR Oriente",
          email: "rir.oriente@pvsnl.gob.mx",
          role: "rir",
          nombre: "RIR Oriente",
          region: "oriente"
        };
      } else if (email === "rir.poniente" || email === "RIR Poniente") {
        mockUser = {
          id: "rir_poniente",
          username: "RIR Poniente", 
          email: "rir.poniente@pvsnl.gob.mx",
          role: "rir",
          nombre: "RIR Poniente",
          region: "poniente"
        };
      } else {
        mockUser = {
          id: "1",
          username: email || "usuario@demo.com",
          email: email || "usuario@demo.com",
          role: "admin",
          nombre: "Usuario Demo"
        };
      }

      const mockToken = "demo-token-" + Date.now();

      localStorage.setItem("token", mockToken);
      localStorage.setItem("user", JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error inesperado:", error);
      alert("Error inesperado");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setEmail("");
    setPassword("");
    setActiveSection("reportes");
  };

  const handleSectionChange = (section: string) => {
    console.log("App handleSectionChange:", section); // Para debug
    // Asegurar que salimos del management dashboard cuando navegamos
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

  // Nueva función para actualizar un reporte en el backend y en el estado local
  const handleUpdateReport = async (updatedReport: Report) => {
    // TEMPORAL: Comentado para evitar conexión a API
    /*
    try {
      const response = await fetch(`/api/reportes/${updatedReport.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedReport),
      });
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Error al actualizar el reporte");
        return;
      }
      setReports((prev) =>
        prev.map((r) =>
          r.id === updatedReport.id ? { ...r, ...updatedReport } : r
        )
      );
    } catch (err) {
      alert("Error de conexión con el servidor");
    }
    */

    // TEMPORAL: Actualización solo local
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

  const renderContent = () => {
    let title = undefined;
    
    if (showManagementDashboard) {
      // Pasa los reportes y la función de actualización como props
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
        title = "Mis Mensajes";
        return <Chat />;
      case "mis-reportes":
        title = "Mis Reportes";
        return (
          <MyReports
            reports={reports}
            onDeleteReport={handleDeleteReport}
            onGoToDashboard={handleGoToManagementDashboard}
          />
        );
      case "directorio-enlaces":
        title = "Directorio de Enlaces";
        return <DirectoryLinks />;
      case "mi-dashboard":
        title = "Mi Dashboard";
        return <MiDashboard currentUser={currentUser} onCreateReport={handleCreateReport} />;
      case "reportes":
      default:
        title = "Reportes";
        return <Dashboard onCreateReport={handleCreateReport} />;
    }
  };

  if (isLoggedIn) {
    const { content, title } = (() => {
      if (showManagementDashboard) {
        return {
          content: (
            <ManagementDashboard
              onGoBack={handleBackFromManagementDashboard}
              reports={reports}
              onUpdateReport={handleUpdateReport}
              onCreateReport={handleCreateReport}
            />
          ),
          title: "Dashboard de Gestión"
        };
      }

      switch (activeSection) {
        case "mis-mensajes":
          return { content: <Chat />, title: "Mis Mensajes" };
        case "mis-reportes":
          return { 
            content: (
              <MyReports
                reports={reports}
                onDeleteReport={handleDeleteReport}
                onGoToDashboard={handleGoToManagementDashboard}
              />
            ), 
            title: "Mis Reportes" 
          };
        case "directorio-enlaces":
          return { content: <DirectoryLinks />, title: "Directorio de Enlaces" };
        case "mi-dashboard":
          return { content: <MiDashboard currentUser={currentUser} onCreateReport={handleCreateReport} />, title: "Mi dashboard" };
        case "reportes":
        default:
          return { content: <Dashboard onCreateReport={handleCreateReport} />, title: "Reportes" };
      }
    })();

    return (
      <Layout
        activeItem={activeSection}
        onItemClick={handleSectionChange}
        onLogout={handleLogout}
        title={title}
      >
        {content}
      </Layout>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant Light Beams */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-orange-300/40 to-transparent animate-beam-1 opacity-60"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-orange-400/50 to-transparent animate-beam-2 opacity-70"></div>
        <div className="absolute top-0 left-2/3 w-3 h-full bg-gradient-to-b from-transparent via-orange-200/30 to-transparent animate-beam-3 opacity-50"></div>

        {/* Elegant Light Streaks */}
        <div className="absolute top-1/4 -left-20 w-96 h-1 bg-gradient-to-r from-transparent via-orange-300/60 to-transparent animate-streak-1"></div>
        <div className="absolute top-2/3 -right-20 w-80 h-0.5 bg-gradient-to-l from-transparent via-orange-400/70 to-transparent animate-streak-2"></div>
        <div className="absolute top-1/2 -left-32 w-72 h-2 bg-gradient-to-r from-transparent via-orange-200/50 to-transparent animate-streak-3"></div>

        {/* Elegant Energy Orbs */}
        <div className="absolute top-1/6 left-1/5 w-32 h-32 bg-gradient-radial from-orange-300/40 via-orange-400/30 to-transparent rounded-full animate-pulse-orb-1"></div>
        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-gradient-radial from-orange-400/50 via-orange-500/40 to-transparent rounded-full animate-pulse-orb-2"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-radial from-orange-200/30 via-orange-300/25 to-transparent rounded-full animate-pulse-orb-3"></div>

        {/* Elegant Wave Elements */}
        <div className="absolute top-1/3 left-0 w-full h-20 bg-gradient-to-r from-transparent via-orange-400/15 to-transparent animate-wave-flow-1"></div>
        <div className="absolute bottom-1/3 right-0 w-full h-16 bg-gradient-to-l from-transparent via-orange-300/20 to-transparent animate-wave-flow-2"></div>

        {/* Elegant Floating Particles */}
        <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-orange-300/60 rounded-full animate-particle-1"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-orange-400/70 rounded-full animate-particle-2"></div>
        <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-orange-200/50 rounded-full animate-particle-3"></div>
        <div className="absolute bottom-0 left-1/3 w-1.5 h-1.5 bg-orange-500/60 rounded-full animate-particle-4"></div>
        <div className="absolute bottom-0 right-1/3 w-2.5 h-2.5 bg-orange-300/55 rounded-full animate-particle-5"></div>

        {/* Elegant Flow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/8 via-orange-400/12 via-orange-500/10 via-orange-600/8 to-transparent animate-rainbow-flow"></div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-orange-900/20 backdrop-blur-sm"></div>

      {/* Login Form */}
      <div className="w-full max-w-md mx-4 relative z-10">
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-orange-200/50">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Logo */}
            <div className="w-96 h-64  flex items-center justify-center  p-2">
              <img
                src="/assets/ParquesVidaSilvestre-01.png"
                alt="Parques y Vida Silvestre de Nuevo León"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Ingresa tus credenciales para acceder
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 block"
              >
                Usuario
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Mail className="h-5 w-5 text-orange-600" />
                </div>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3 border-2 border-orange-200 rounded-2xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 relative z-0"
                  placeholder="Usuario"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700 block"
              >
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Lock className="h-5 w-5 text-orange-600" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-12 py-3 border-2 border-orange-200 rounded-2xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 relative z-0"
                  placeholder="Contraseña"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200 z-10"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right"></div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl hover:from-emerald-700 hover:to-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-emerald-200"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Iniciando sesión...
                </div>
              ) : (
                "Iniciar sesión"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-orange-200">
            <p className="text-center text-gray-500 text-sm">.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
