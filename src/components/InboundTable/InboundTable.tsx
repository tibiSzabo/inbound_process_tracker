import React, { useState } from 'react';
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useInboundItems } from 'src/hooks/useInboundItems';
import InboundListPlaceholder from 'src/components/InboundListPlaceholder/InboundListPlaceholder';
import { InboundItemRow } from 'src/components/InboundItemRow/InboundItemRow';
import { FilterBar } from 'src/components/FilterBar/FilterBar';
import { InboundItem, InboundItemFilter } from 'src/types/inbound-item';
import { CustomModal } from 'src/components/CustomModal/CustomModal';
import { InboundOperations } from 'src/components/InboundOperations/InboundOperations';

export const InboundTable = () => {
  const [filterValue, setFilterValue] = useState<InboundItemFilter>('ALL');
  const { isLoading, inboundItems, transitionInboundItem } = useInboundItems(filterValue);
  const [openRowId, setOpenRowId] = useState<number | null>(null);
  const [loadingRowId, setLoadingRowId] = useState<number | null>(null);
  const [isOperationsModalOpen, setIsOperationsModalOpen] = useState(false);
  const [itemUnderOperations, setItemUnderOperations] = useState<null | InboundItem>(null);

  const handleStageTransition = (id: number) => {
    setLoadingRowId(id);
    transitionInboundItem(id).then(() => {
      setLoadingRowId(null);
    });
  };

  const handleOpenRow = (id: number) => {
    setOpenRowId((prevState) => {
      if (id === prevState) return null;
      return id;
    });
  };

  const handleFilterChange = (filterValue: InboundItemFilter) => {
    setFilterValue(filterValue);
    setOpenRowId(null);
    setLoadingRowId(null);
  };

  const handleOptionsModalOpen = (id: number) => {
    setIsOperationsModalOpen(true);
    const item = inboundItems.find((item) => item.id === id) || null;
    setItemUnderOperations(item);
  };

  const handleModalClose = () => {
    setIsOperationsModalOpen(false);
    setItemUnderOperations(null);
  };

  return (
    <Stack gap={2}>
      <FilterBar filterValue={filterValue} onFilterChange={handleFilterChange} />
      <TableContainer component={Paper} sx={{ maxWidth: '1000px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Item</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Expected Date</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading && <InboundListPlaceholder />}
            {!isLoading &&
              inboundItems.map((item) => (
                <InboundItemRow
                  key={item.id}
                  item={item}
                  onItemTransition={handleStageTransition}
                  isOpen={openRowId === item.id}
                  onOpen={handleOpenRow}
                  isLoading={loadingRowId === item.id}
                  onItemOptionsOpen={handleOptionsModalOpen}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomModal
        open={isOperationsModalOpen}
        handleClose={handleModalClose}
        title="Inbound Operations"
      >
        <InboundOperations item={itemUnderOperations} />
      </CustomModal>
    </Stack>
  );
};
