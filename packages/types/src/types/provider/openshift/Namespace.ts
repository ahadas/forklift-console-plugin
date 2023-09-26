import { V1Namespace } from '../../k8s/V1Namespace';

import { TypedOpenshiftResource } from './TypedResource';

// https://github.com/kubev2v/forklift/tree/main/pkg/controller/provider/web/ocp/namespace.go
export interface OpenShiftNamespace extends TypedOpenshiftResource {
  // Object core.Namespace `json:"object"`
  object: V1Namespace;
}
