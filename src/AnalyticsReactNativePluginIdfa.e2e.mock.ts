import type { IdfaData, INativeModule } from './types';
import { TrackingStatus } from './types';

const AnalyticsReactNativePluginIdfa: INativeModule = {
    getTrackingAuthorizationStatus: async (): Promise<IdfaData> => ({
        adTrackingEnabled: false,
        advertisingId: 'trackMeId',
        trackingStatus: TrackingStatus.Denied,
    }),
};

export { AnalyticsReactNativePluginIdfa };
