import { useEffect, useState } from 'react';
import { PROCESS_STAGES_IN_ORDER } from 'src/constants/inbound-items';
import { MOCK_INBOUND_ITEMS } from 'src/mock/inbound-items';

export const useInboundItems = () => {
  const [inboundItems, setInboundItems] = useState(MOCK_INBOUND_ITEMS);
  const [isLoading, setIsLoading] = useState(false);

  // simulate fetching and loading
  useEffect(() => {
    fetchInboundItems().then();
  }, []);

  const fetchInboundItems = () => {
    return new Promise((resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(MOCK_INBOUND_ITEMS);
        setInboundItems(MOCK_INBOUND_ITEMS);
        setIsLoading(false);
      }, 2000);
    });
  };

  const transitionInboundItem = (id: number) => {
    MOCK_INBOUND_ITEMS.map((process) => {
      if (process.id === id) {
        const currentStageIndex = PROCESS_STAGES_IN_ORDER.indexOf(process.stage);
        if (currentStageIndex < PROCESS_STAGES_IN_ORDER.length - 1) {
          process.stage = PROCESS_STAGES_IN_ORDER[currentStageIndex + 1];
        }
      }
      return process;
    });
    setInboundItems([...MOCK_INBOUND_ITEMS]);
    fetchInboundItems().then();
  };

  return {
    inboundItems,
    isLoading,
    fetchInboundItems,
    transitionInboundItem,
  };
};
