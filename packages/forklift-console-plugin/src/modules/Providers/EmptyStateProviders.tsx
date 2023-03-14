import React from 'react';
import ForkliftEmptyState from 'src/components/empty-states/ForkliftEmptyState';
import digitalTransformationIcon from 'src/components/empty-states/images/digital-transformation.svg';
import { useTranslation } from 'src/utils/i18n';

import { Text, TextList, TextListItem } from '@patternfly/react-core';

import { AddProviderButton } from './AddProviderButton';

const DigitalTransformationIcon = () => (
  <img src={digitalTransformationIcon} className="forklift-empty-state__icon" />
);

const EmptyStateProviders: React.FC<{ namespace: string }> = ({ namespace }) => {
  const { t } = useTranslation();

  return (
    <ForkliftEmptyState
      icon={DigitalTransformationIcon}
      title={t('No Providers found.')}
      textContent={
        <>
          <Text>{t('Migrating virtualization workloads is a multi-step process:')}</Text>
          <TextList component="ol">
            <TextListItem>{t('Add source and target providers for the migration.')}</TextListItem>
            <TextListItem>
              {t(
                'Map source datastores or storage domains and networks to target storage classes and networks.',
              )}
            </TextListItem>
            <TextListItem>
              {t('Create a migration plan and select VMs from the source provider for migration.')}
            </TextListItem>
            <TextListItem>{t('Run the migration plan.')}</TextListItem>
          </TextList>
        </>
      }
      callForActionButtons={<AddProviderButton namespace={namespace} />}
    />
  );
};
EmptyStateProviders.displayName = 'EmptyStateProviders';

export default EmptyStateProviders;
