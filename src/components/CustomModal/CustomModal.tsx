import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const CustomModal = ({ open, handleClose, title, children }: CustomModalProps) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{
        transition: {
          onExited: handleClose, // Ensure handleClose is called when the dialog is closed
          style: { backdropFilter: 'blur(5px)' },
        },
      }}
    >
      <Stack alignItems="center" spacing={2} padding={2}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Stack>
    </Dialog>
  );
};
