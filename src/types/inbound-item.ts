export interface InboundItem {
  id: number;
  item: string;
  supplier: string;
  stage: InboundItemStage;
  expectedDate: string;
}

export enum InboundItemStage {
  CREATEAD = 'CREATED',
  IN_TRANSIT = 'IN_TRANSIT',
  ARRIVED = 'ARRIVED_AT_DOCK',
  INSPECTED = 'INSPECTED',
  STORED = 'STORED',
}
