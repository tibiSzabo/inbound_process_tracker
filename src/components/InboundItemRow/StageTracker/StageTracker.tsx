import { InboundItemStage } from 'src/types/inbound-item';
import { PROCESS_STAGES_IN_ORDER } from 'src/constants/inbound-items';
import { Stack, Typography } from '@mui/material';
import { enumToReadable } from 'src/utils/enumToReadable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Styles from './StageTracker.module.scss';

interface StageItemProps {
  stage: InboundItemStage;
  isCompleted: boolean;
}

const StageItem = ({ stage, isCompleted }: StageItemProps) => {
  return (
    <Stack className={Styles.StageItem} direction="row">
      <CheckCircleIcon
        sx={{ visibility: isCompleted ? 'visible' : 'hidden', fontSize: '20px' }}
        color="success"
        className={Styles.CompletedIcon}
      />
      <Typography fontSize="14px">{enumToReadable(stage)}</Typography>
    </Stack>
  );
};

interface InboundItemRowProps {
  itemStage: InboundItemStage;
}

export const StageTracker = ({ itemStage }: InboundItemRowProps) => {
  const completedUpToStageIndex = PROCESS_STAGES_IN_ORDER.indexOf(itemStage);
  return (
    <Stack className={Styles.StageList} direction="row">
      {PROCESS_STAGES_IN_ORDER.map((stage, idx) => (
        <StageItem key={stage} stage={stage} isCompleted={completedUpToStageIndex >= idx} />
      ))}
    </Stack>
  );
};
