import React from 'react';
import { Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export const InboundList = () => {
  return (
    <Stack>
      <h1>Inbound List</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Expected Date</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Stack>
  );
};
