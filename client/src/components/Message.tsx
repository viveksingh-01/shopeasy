import React from 'react';
import { Alert } from 'react-bootstrap';

interface IProps {
  variant: string;
  children: string;
}

const Message: React.FC<IProps> = ({ variant, children }) => {
  return (
    <>
      <Alert variant={variant}>{children}</Alert>
    </>
  );
};

export default Message;
