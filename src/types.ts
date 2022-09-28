export enum TrackingStatus {
    Authorized = 'authorized',
    Denied = 'denied',
    NotDetermined = 'notDetermined',
    Restricted = 'restricted',
    Unknown = 'unknown',
}

export interface IdfaData {
    adTrackingEnabled: boolean;
    advertisingId: string | null;
    trackingStatus: TrackingStatus;
}

export interface INativeModule {
    getTrackingAuthorizationStatus: () => Promise<IdfaData>;
}

export interface INativeModules {
    AnalyticsReactNativePluginIdfa: INativeModule;
}
