import React from 'react';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { InboundItem } from 'src/types/inbound-item';
import Styles from './InboundOperations.module.scss';
import { enumToReadable } from 'src/utils/enumToReadable';

interface ItemDetailProps {
  title: string;
  value: string;
}

const ItemDetail = ({ title, value }: ItemDetailProps) => {
  return (
    <Stack className={Styles.ItemDetail}>
      <Typography className={Styles.ItemDetailTitle}>{title}</Typography>&emsp;&ensp;
      <Typography className={Styles.ItemDetailValue}>{value}</Typography>
    </Stack>
  );
};

interface InboundOperationsProps {
  item: InboundItem | null;
}

export const InboundOperations = ({ item }: InboundOperationsProps) => {
  if (!item) {
    return <Typography>No item selected for operations.</Typography>;
  }

  return (
    <Stack className={Styles.OperationsContainer}>
      <Stack component={Paper} className={Styles.ItemDetails}>
        <ItemDetail title="Item" value={item.item} />
        <ItemDetail title="Supplier" value={item.supplier} />
        <ItemDetail title="Stage" value={enumToReadable(item.stage)} />
      </Stack>
      <Typography fontWeight="bold">Actions</Typography>
      <Stack className={Styles.ActionsContainer} direction="row" gap={2}>
        <Button color="info" variant="outlined">
          Register Vechicle
        </Button>
        <Button color="info" variant="outlined">
          Take Photo
        </Button>
        <Button color="info" variant="outlined">
          ...
        </Button>
      </Stack>
    </Stack>
  );
};
