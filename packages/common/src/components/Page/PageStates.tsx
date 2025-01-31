import React, { ComponentType } from 'react';

import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStatePrimary,
  Spinner,
  Title,
} from '@patternfly/react-core';
import { ExclamationCircleIcon, SearchIcon } from '@patternfly/react-icons';

const BaseState = ({
  title,
  Icon,
  color,
  Component,
}: {
  title: string;
  Icon?: ComponentType;
  Component?: ComponentType;
  color?: string;
}) => {
  return (
    <EmptyState>
      <EmptyStateIcon
        component={Component}
        icon={Icon}
        color={color}
        variant={Component ? 'container' : 'icon'}
      />
      <Title headingLevel="h4" size="lg">
        {title}
      </Title>
    </EmptyState>
  );
};

export const ErrorState = ({ title }: { title: string }) => (
  <BaseState Icon={ExclamationCircleIcon} color="#C9190B" title={title} />
);

export const Loading = ({ title }: { title: string }) => (
  <BaseState Component={Spinner} title={title} />
);

export const NoResultsFound = ({ title }: { title: string }) => (
  <BaseState Icon={SearchIcon} title={title} />
);

export const NoResultsMatchFilter = ({
  clearAllFilters,
  title = 'No results found',
  description = 'No results match the filter criteria. Clear all filters and try again.',
  clearAllLabel = 'Clear all filters',
}: {
  clearAllFilters: () => void;
  title?: string;
  description?: string;
  clearAllLabel?: string;
}) => {
  return (
    <EmptyState>
      <EmptyStateIcon icon={SearchIcon} />
      <Title size="lg" headingLevel="h4">
        {title}
      </Title>
      <EmptyStateBody>{description}</EmptyStateBody>
      <EmptyStatePrimary>
        <Button variant="link" onClick={clearAllFilters}>
          {clearAllLabel}
        </Button>
      </EmptyStatePrimary>
    </EmptyState>
  );
};
