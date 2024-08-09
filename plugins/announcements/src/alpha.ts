import { convertLegacyRouteRefs } from '@backstage/core-compat-api';
import { BackstagePlugin, createPlugin } from '@backstage/frontend-plugin-api';
import { announcementsApiExtension } from './alpha/apis';
import { rootRouteRef } from './routes';

/**
 * @alpha
 */
export default createPlugin({
  id: 'announcements',
  routes: convertLegacyRouteRefs({
    root: rootRouteRef,
  }),
  extensions: [announcementsApiExtension],
}) as BackstagePlugin;
