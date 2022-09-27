import type { IdfaData } from './types';
import { TrackingStatus } from './types';

const AnalyticsReactNativePluginIdfa = {
    getTrackingAuthorizationStatus: async (): Promise<IdfaData> => ({
        adTrackingEnabled: false,
        advertisingId: 'trackMeId',
        trackingStatus: TrackingStatus.Denied,
    }),
};
export { AnalyticsReactNativePluginIdfa };
