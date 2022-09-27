/**
 * This module is just here to have a way to mock the Native Module of IDFA with Detox
 */
import { NativeModules, Platform } from 'react-native';
import type { INativeModule, INativeModules } from './types';

export const AnalyticsReactNativePluginIdfa = Platform.select<INativeModule>({
    default: {
        getTrackingAuthorizationStatus: async () => Promise.reject(new Error('IDFA is only supported on iOS')),
    },
    ios: (NativeModules as INativeModules).AnalyticsReactNativePluginIdfa,
});
