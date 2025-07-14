import { InboundItemStage } from 'src/types/inbound-item';

export const PROCESS_STAGES_IN_ORDER = [
  InboundItemStage.CREATEAD,
  InboundItemStage.IN_TRANSIT,
  InboundItemStage.ARRIVED,
  InboundItemStage.INSPECTED,
  InboundItemStage.STORED,
];

export const PLACEHOLDER_ROWS = 6; // Number of placeholder rows to display
export const PLACEHOLDER_CELL_COUNT = 6; // Number of cells in each placeholder row
