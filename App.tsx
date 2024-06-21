/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ErrorBoundary from './src/components/ErrorBoundary';
import AppNavigator from './src/navigation/navigationUtil';
import MyProvider from './src/context/MyProvider';

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <MyProvider>
        <AppNavigator />
      </MyProvider>
    </ErrorBoundary>
  );
}

export default App;
