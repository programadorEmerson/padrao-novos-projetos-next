import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@styles/theme';
import React from 'react';

const AppProvider: React.FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppProvider;
