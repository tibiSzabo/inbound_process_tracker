export interface Process {
  id: number;
  item: string;
  supplier: string;
  stage: ProcessStage;
  expectedDate: string;
}

export enum ProcessStage {
  CREATEAD = 'CREATED',
  IN_TRANSIT = 'IN_TRANSIT',
  ARRIVED = 'ARRIVED',
  INSPECTED = 'INSPECTED',
  STORED = 'STORED',
}
