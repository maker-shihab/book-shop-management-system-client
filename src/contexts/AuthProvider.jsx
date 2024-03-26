/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import authApi from "../api/authApi";
import { authKey } from "../constants/storageKey";
import { removeUserInfo } from "../services/auth.service";
import { logoutRequest } from "../services/logout.service";
import { decodedToken } from "../utils/jwt";
import { getLocalStorage, setToLocalStorage } from "../utils/local-storage";
import { filterUserInfo } from "../utils/utility";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUserInfo = useCallback(async (accessToken) => {
    try {
      const { userId } = decodedToken(accessToken);
      const response = await authApi.getUserProfile(userId);
      setUserInfo(response?.data?.data);
      const userData = filterUserInfo(response?.data?.data);
      setUserDetails(userData);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleLoginSuccess = useCallback(({ accessToken }) => {
    try {
      setIsLoggedIn(true);
      setToLocalStorage(authKey, accessToken);
      fetchUserInfo(accessToken);
    } catch (error) {
      console.error(error);
    }
  }, [fetchUserInfo]);

  const handleLogout = useCallback(async () => {
    try {
      await logoutRequest();
      setIsLoggedIn(false);
      removeUserInfo(authKey);
      setUserInfo(null);
      setUserDetails(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, []);

  useEffect(() => {
    const accessToken = getLocalStorage(authKey);
    if (accessToken) {
      fetchUserInfo(accessToken);
      setIsLoggedIn(true);
    } else {
      setUserInfo(null);
      setIsLoggedIn(false);
    }
  }, [fetchUserInfo]);

  const authContextValue = useMemo(() => ({
    isLoggedIn,
    handleLoginSuccess,
    handleLogout,
    userInfo,
    setUserInfo,
    userDetails
  }), [handleLoginSuccess, handleLogout, isLoggedIn, userInfo, userDetails]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )

};

export { AuthContext, AuthProvider };

