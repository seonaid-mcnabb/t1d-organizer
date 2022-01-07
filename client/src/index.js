import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const Client = (props) => {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Client.propTypes = {
  text: PropTypes.string,
};

Client.defaultProps = {
  text: 'Hello World!',
};

export default Client;
