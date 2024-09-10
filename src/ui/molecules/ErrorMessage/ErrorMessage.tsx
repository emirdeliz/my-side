import React from 'react';
import { ErrorMessageStyle } from './ErrorMessage.style';

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <ErrorMessageStyle>{error}</ErrorMessageStyle>;
};

export default ErrorMessage;
