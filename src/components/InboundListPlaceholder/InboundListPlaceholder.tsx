import React from 'react';
import { Skeleton, TableCell, TableRow } from '@mui/material';
import { PLACEHOLDER_CELL_COUNT, PLACEHOLDER_ROWS } from 'src/constants/inbound-items';

const InboundListPlaceholder = () => {
  return (
    <>
      {Array.from({ length: PLACEHOLDER_ROWS }).map((_, index) => (
        <TableRow key={index}>
          {Array.from({ length: PLACEHOLDER_CELL_COUNT }).map((_, cellIndex) => (
            <TableCell key={cellIndex}>
              <Skeleton animation="wave" width="60%" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default InboundListPlaceholder;
