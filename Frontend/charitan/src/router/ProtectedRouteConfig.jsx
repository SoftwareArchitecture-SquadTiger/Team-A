import React from "react";
import { Navigate } from "react-router-dom";
import { useAPI } from "../utils/auth/APIContext";

const ProtectedRoute = ({ children, roles }) => {
  const { authToken, userRole } = useAPI();

  // check token
  if (!authToken) {
    return <Navigate to="/signin" replace />; //redirect to signin
  }

  // // 역할 기반 접근 제한
  // if (roles && roles.length > 0 && !roles.includes(userRole)) {
  //   return <Navigate to="/signin" replace />; // 접근 불가 시 리다이렉트
  // }

  return children; // 권한이 있으면 컴포넌트 렌더링
};

export default ProtectedRoute;
