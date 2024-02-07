import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  winter: "winter",
  night: "night"
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme
};

const initialState = {
  user: { username: "sam" },
  theme: getThemeFromLocalStorage()
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state, action) => {
        state.user = null;
        localStorage.removeItem('user');
        toast.success('Logged out');
    },
    toggleTheme: (state, action) => {
        const {winter, night} = themes;
        state.theme = state.theme === winter ?  night : winter;
        document.documentElement.setAttribute("data-theme", state.theme);
        localStorage.setItem('theme', state.theme)
    }
  }
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
