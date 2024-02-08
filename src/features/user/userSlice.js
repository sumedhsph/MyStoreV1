import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  winter: "winter",
  night: "night"
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user") || null;
  return JSON.parse(user);
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage()
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      //console.log(action.payload);
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out");
    },
    toggleTheme: (state, action) => {
      const { winter, night } = themes;
      state.theme = state.theme === winter ? night : winter;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    }
  }
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
