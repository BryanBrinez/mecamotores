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
};

export const Route = {
  key: String,
  path: String,
  name: String,
};
