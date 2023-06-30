export const Routes = {
  HOME: {
    key: "HOME",
    path: "/",
    name: "Home",
  },
  ADMINPANEL: {
    key: "ADMINPANEL",
    path: "/admin-panel",
    name: "Panel Administrador",
  },
  SERVICIOS: {
    key: "SERVICIOS",
    path: "/admin-panel/servicios",
    name: "Servicios",
  },
  RECIBIRMAQUINA: {
    key: "RECIBIRMAQUINA",
    path: "/admin-panel/recibir-maquina",
    name: "Recibir Maquina",
  },
  REGISTERUSER: {
    key: "REGISTERUSER",
    path: "/admin-panel/register",
    name: "Registrar Trabajador",
  },
  REGISTRARREPUESTO: {
    key: "REGISTRARREPUESTO",
    path: "/admin-panel/registrarRepuesto",
    name: "Registrar Repuesto",
  },
  CLIENTE: {
    key: "CLIENTE",
    path: "/client-info",
    name: "Información del cliente",
  },
  LOGIN: {
    key: "LOGIN",
    path: "/login",
    name: "Iniciar sesión",
  },

};

export const Route = {
  key: String,
  path: String,
  name: String,
};
