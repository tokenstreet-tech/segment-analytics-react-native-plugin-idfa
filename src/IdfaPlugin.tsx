import { Plugin, PluginType } from '@segment/analytics-react-native';
import type { IdfaData } from './types';
import { AnalyticsReactNativePluginIdfa } from './AnalyticsReactNativePluginIdfa';

const { getTrackingAuthorizationStatus } = AnalyticsReactNativePluginIdfa;

/**
 * IDFA Plugin
 * @constructor
 * @param {boolean} shouldAskPermission - defaults to true. Passing false
 *  when initializing new `IDFA Plugin` will prevent plugin from
 * requesting tracking status
 */

export class IdfaPlugin extends Plugin {
    public type = PluginType.enrichment;

    public constructor(shouldAskPermission = true) {
        super();

        if (shouldAskPermission) {
            this.getTrackingStatus();
        }
    }

    /**
     * RequestTrackingPermission()` will prompt the user for
     * tracking permission and returns a promise you can use to
     * make additional tracking decisions based on the user response
     */
    public async requestTrackingPermission(): Promise<boolean> {
        try {
            const idfaData: IdfaData = await getTrackingAuthorizationStatus();

            this.analytics?.context.set({ device: { ...idfaData } });
            return idfaData.adTrackingEnabled;
        } catch (error) {
            this.analytics?.logger.warn(error);
            return false;
        }
    }

    public getTrackingStatus(): void {
        getTrackingAuthorizationStatus()
            .then((idfa: IdfaData) => {
                // Update our context with the idfa data
                this.analytics?.context.set({ device: { ...idfa } });
                return idfa;
            })
            .catch((err) => {
                this.analytics?.logger.warn(err);
            });
    }
}
