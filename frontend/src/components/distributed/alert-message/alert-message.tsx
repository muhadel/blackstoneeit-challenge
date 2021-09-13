// pkgs:
import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';
// utils:
import { AlertPropsTypes } from '../../../common/interfaces/comps/alert-message.interface';

const AlertMessage: React.VFC<AlertPropsTypes> = ({
  status = 'error',
  title = 'Service is unavailable',
  message = 'Something went wrong try again!',
  hasCloseBtn = false,
}) => {
  return (
    <Alert status={status} borderRadius={4}>
      <AlertIcon />
      <AlertTitle fontWeight={500} mr={2}>
        {title}
      </AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      {hasCloseBtn && <CloseButton position="absolute" right="8px" top="8px" />}
    </Alert>
  );
};

export default AlertMessage;
