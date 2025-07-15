import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import React from 'react';

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const CustomModal = ({ open, handleClose, title, children }: CustomModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack alignItems="center" spacing={2} padding={2}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Stack width="100%" maxWidth="600px" spacing={2}>
            {children}
          </Stack>
        </DialogContent>
      </Stack>
    </Dialog>
  );
};
