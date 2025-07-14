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

export const InboundTable = () => {
  const { isLoading, inboundItems, transitionInboundItem } = useInboundItems();
  const [openRowId, setOpenRowId] = useState<number | null>(null);

  return (
    <Stack>
      <h2>Inbound List</h2>
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
                  onItemTransition={transitionInboundItem}
                  isOpen={openRowId === item.id}
                  onOpen={setOpenRowId}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
