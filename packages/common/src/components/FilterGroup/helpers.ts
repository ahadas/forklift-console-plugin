import { ResourceField } from 'common/src/utils/types';

import { FieldFilter } from './types';

export const toFieldFilter = ({
  resourceFieldId,
  label,
  filter: filterDef,
}: ResourceField): FieldFilter => ({ resourceFieldId, label, filterDef });

export const EnumToTuple = (i18nEnum: { [k: string]: string }) =>
  Object.entries(i18nEnum).map(([type, label]) => ({ id: type, label }));
