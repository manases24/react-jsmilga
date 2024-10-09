import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { User, UserState } from "../../../api/types";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

// Función para obtener el usuario del localStorage
const getUserFromLocalStorage = (): User | null => {
  return JSON.parse(localStorage.getItem("user") || "null");
};

// Función para obtener el tema del localStorage
const getThemeFromLocalStorage = (): string => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

// Estado inicial
const initialState: UserState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

// Definición del slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer para el login de usuario
    loginUser: (
      state,
      action: PayloadAction<{ user: Omit<User, "token">; jwt: string }>
    ) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    // Reducer para el logout de usuario
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    // Reducer para alternar el tema
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

// Exportar acciones
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

// Exportar el reducer
export default userSlice.reducer;
