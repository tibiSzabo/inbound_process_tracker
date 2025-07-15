import React from 'react';
import { InboundItem, InboundItemStage } from 'src/types/inbound-item';
import {
  Button,
  CircularProgress,
  Collapse,
  IconButton,
  Stack,
  TableCell,
  TableRow,
} from '@mui/material';
import { enumToReadable } from 'src/utils/enumToReadable';
import { StageTracker } from 'src/components/InboundItemRow/StageTracker/StageTracker';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface InboundItemsProps {
  item: InboundItem;
  onItemTransition: (id: number) => void;
  isOpen: boolean;
  isLoading: boolean;
  onOpen: (id: number) => void;
  onItemOptionsOpen: (id: number) => void;
}

export const InboundItemRow = ({
  item,
  onItemTransition,
  isOpen,
  isLoading,
  onOpen,
  onItemOptionsOpen,
}: InboundItemsProps) => {
  const { item: itemName, supplier, stage, expectedDate } = item;

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation(); // Prevent the row click event
    onItemOptionsOpen(item.id);
  };

  return (
    <>
      <TableRow sx={{ cursor: 'pointer' }} onClick={() => onOpen(item.id)}>
        <TableCell>{isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</TableCell>
        <TableCell>{itemName}</TableCell>
        <TableCell>{supplier}</TableCell>
        <TableCell>{enumToReadable(stage)}</TableCell>
        <TableCell>{expectedDate}</TableCell>
        <TableCell>
          <IconButton onClick={(e) => handleMenuClick(e)} aria-label="more options">
            <MoreVertIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Stack gap="12px" direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
              <StageTracker itemStage={item.stage} />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ flexGrow: 1 }}
              >
                <Button
                  color="info"
                  variant="outlined"
                  disabled={stage === InboundItemStage.STORED || isLoading}
                  onClick={() => onItemTransition(item.id)}
                  sx={{
                    width: 'fit-content',
                    minWidth: '120px',
                    height: '36px',
                  }}
                >
                  {isLoading ? <CircularProgress size={24} /> : 'Next Stage'}
                </Button>
              </Stack>
            </Stack>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
