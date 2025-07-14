import { Process, ProcessStage } from 'src/types/process';

export const MOCK_PROCESSES: Process[] = [
  {
    id: 1,
    item: 'Item A',
    supplier: 'Supplier X',
    stage: ProcessStage.CREATEAD,
    expectedDate: '2023-10-01',
  },
  {
    id: 2,
    item: 'Item B',
    supplier: 'Supplier Y',
    stage: ProcessStage.IN_TRANSIT,
    expectedDate: '2023-10-05',
  },
  {
    id: 3,
    item: 'Item C',
    supplier: 'Supplier Z',
    stage: ProcessStage.ARRIVED,
    expectedDate: '2023-10-10',
  },
  {
    id: 4,
    item: 'Item D',
    supplier: 'Supplier X',
    stage: ProcessStage.INSPECTED,
    expectedDate: '2023-10-15',
  },
  {
    id: 5,
    item: 'Item E',
    supplier: 'Supplier Y',
    stage: ProcessStage.STORED,
    expectedDate: '2023-10-20',
  },
];
