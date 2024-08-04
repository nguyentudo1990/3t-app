import React from 'react';
import { Box, Text } from 'theme';
import { normalizeY } from 'utils/normalize';

function AppButton({ label }) {
  return (
    <Box
      height={normalizeY(50)}
      backgroundColor="primary"
      width={'100%'}
      marginTop="m_16"
      borderRadius="xl_30"
      justifyContent="center"
      alignItems="center">
      <Text color="white" fontSize={normalizeY(18)}>
        {label}
      </Text>
    </Box>
  );
}

export default AppButton;
