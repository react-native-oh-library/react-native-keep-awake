// @flow

import React, { Component, useEffect } from 'react';
import { NativeModules, TurboModuleRegistry } from 'react-native';

let mounted = 0;

const KCKeepAwake = TurboModuleRegistry ? TurboModuleRegistry.get('KeepAwakeNativeModule') : NativeModules.KCKeepAwake;

export default class KeepAwake extends Component {
  static activate() {
    KCKeepAwake.activate();
  }

  static deactivate() {
    KCKeepAwake.deactivate();
  }

  componentDidMount() {
    mounted++;
    KeepAwake.activate();
  }

  componentWillUnmount() {
    mounted--;
    if (!mounted) {
      KeepAwake.deactivate();
    }
  }

  render() {
    return null;
  }
}

export const activateKeepAwake = () => {
    KCKeepAwake.activate();
};

export const deactivateKeepAwake = () => {
    KCKeepAwake.deactivate();
};

export const useKeepAwake = () => {
  useEffect(() => {
    activateKeepAwake();
    return () => {
      deactivateKeepAwake();
    } 
  }, []);
};




