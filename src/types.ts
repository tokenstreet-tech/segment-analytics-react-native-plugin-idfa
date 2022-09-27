export enum TrackingStatus {
    Authorized = 'authorized',
    Denied = 'denied',
    NotDetermined = 'notDetermined',
    Restricted = 'restricted',
    Unknown = 'unknown',
}

export interface IdfaData {
    adTrackingEnabled: boolean;
    advertisingId: string;
    trackingStatus: TrackingStatus;
}
