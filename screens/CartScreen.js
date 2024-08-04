import AppButton from 'components/AppButton';
import ScreenComponent from 'components/ScreenComponent';
import React from 'react';
import { Box, Text } from 'theme';
import { normalizeY } from 'utils/normalize';

function CartScreen(props) {
  return (
    <ScreenComponent style={{ backgroundColor: 'grayBG' }}>
      <Text>Cart</Text>
      <Box flex={1}></Box>
      <Box
        borderTopLeftRadius="xl_30"
        borderTopRightRadius="xl_30"
        shadowColor="black"
        alignItems="center"
        paddingHorizontal="m_16"
        paddingVertical="ml_24"
        shadowOffset={{ height: 0, width: 0 }}
        shadowOpacity={0.2}
        backgroundColor="white">
        <Box
          height={45}
          backgroundColor="grayBG"
          width={'100%'}
          borderRadius="xl_30"
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal="m_16"
          alignItems="center">
          <Text color="gray" fontSize={normalizeY(15)}>
            Enter Discount Code
          </Text>
          <Text color="primary" fontSize={18} fontWeight={'bold'}>
            Apply
          </Text>
        </Box>
        <Row title={'Total'} price={'$245.00'} />
        <Box height={2} width={'100%'} backgroundColor="grayBG" />
        <Row title={'Total'} price={'$245.00'} />
        <AppButton label={'Checkout'} />
      </Box>
    </ScreenComponent>
  );
}

const Row = ({ title, price }) => {
  return (
    <Box
      height={50}
      width={'100%'}
      flexDirection="row"
      justifyContent="space-between"
      borderColor="grayBG"
      alignItems="center">
      <Text fontSize={normalizeY(15)}>Total</Text>
      <Text fontSize={18} fontWeight={'bold'}>
        $245.00
      </Text>
    </Box>
  );
};
export default CartScreen;
