import { InboundItem, InboundItemStage } from 'src/types/inbound-item';
export const MOCK_INBOUND_ITEMS: InboundItem[] = [
  {
    id: 1,
    item: 'Item A',
    supplier: 'Supplier X',
    stage: InboundItemStage.CREATEAD,
    expectedDate: '2023-10-01',
  },
  {
    id: 2,
    item: 'Item B',
    supplier: 'Supplier Y',
    stage: InboundItemStage.IN_TRANSIT,
    expectedDate: '2023-10-05',
  },
  {
    id: 3,
    item: 'Item C',
    supplier: 'Supplier Z',
    stage: InboundItemStage.ARRIVED,
    expectedDate: '2023-10-10',
  },
  {
    id: 4,
    item: 'Item D',
    supplier: 'Supplier X',
    stage: InboundItemStage.INSPECTED,
    expectedDate: '2023-10-15',
  },
  {
    id: 5,
    item: 'Item E',
    supplier: 'Supplier Y',
    stage: InboundItemStage.STORED,
    expectedDate: '2023-10-20',
  },
];
