import { ProcessStage } from 'src/types/process';

export const PROCESS_STAGES_IN_ORDER = [
  ProcessStage.CREATEAD,
  ProcessStage.IN_TRANSIT,
  ProcessStage.ARRIVED,
  ProcessStage.INSPECTED,
  ProcessStage.STORED,
];
