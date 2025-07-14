import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { InboundItemFilter } from 'src/types/inbound-item';
import { PROCESS_STAGES_IN_ORDER } from 'src/constants/inbound-items';
import { enumToReadable } from 'src/utils/enumToReadable';

interface FilterBarProps {
  filterValue: InboundItemFilter;
  onFilterChange: (value: InboundItemFilter) => void;
}

export const FilterBar = ({ filterValue, onFilterChange }: FilterBarProps) => {
  const handleChange = (_: React.MouseEvent<HTMLElement>, value: InboundItemFilter) => {
    onFilterChange(value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={filterValue}
      exclusive
      onChange={handleChange}
      aria-label="Stage Filter"
    >
      <ToggleButton value="ALL" aria-label="All">
        All
      </ToggleButton>
      {PROCESS_STAGES_IN_ORDER.map((stage) => (
        <ToggleButton key={stage} value={stage} aria-label={stage}>
          {enumToReadable(stage)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
