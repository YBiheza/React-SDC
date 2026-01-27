import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import React from 'react';
import type { TPrivateRouteProps } from './TPrivateRoute';

export function PrivateRoute({ children }: TPrivateRouteProps) {
  const location = useLocation();
  const log = useAppSelector((state) => state.auth.log);

  if (!log) {
    return <Navigate to="/authorisation" state={{ from: location }} replace />;
  }

  return children;
}
