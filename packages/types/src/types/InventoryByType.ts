import { OpenshiftProvider, OpenstackProvider, OVirtProvider, VSphereProvider } from './provider';

/**
 * Represents the inventory of providers, including their entities.
 */
export interface InventoryByType {
  openshift?: OpenshiftProvider[] | null;
  openstack?: OpenstackProvider[] | null;
  ovirt?: OVirtProvider[] | null;
  vsphere?: VSphereProvider[] | null;
}
