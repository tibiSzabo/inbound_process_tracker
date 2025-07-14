import { useEffect, useState } from 'react';
import { PROCESS_STAGES_IN_ORDER } from 'src/constants/inbound-items';
import { MOCK_INBOUND_ITEMS } from 'src/mock/inbound-items';
import { InboundItemFilter } from 'src/types/inbound-item';

export const useInboundItems = (filter: InboundItemFilter) => {
  const [inboundItems, setInboundItems] = useState(MOCK_INBOUND_ITEMS);
  const [filteredInboundItems, setFilteredInboundItems] = useState(MOCK_INBOUND_ITEMS);
  const [isLoading, setIsLoading] = useState(false);

  // simulate fetching and loading
  useEffect(() => {
    fetchInboundItems();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      filterItems();
      setIsLoading(false);
    }, 1500);
  }, [filter]);

  useEffect(() => {
    filterItems();
  }, [inboundItems]);

  const filterItems = () => {
    if (filter === 'ALL') {
      setFilteredInboundItems(inboundItems);
    } else {
      const filteredItems = inboundItems.filter((item) => item.stage === filter);
      setFilteredInboundItems(filteredItems);
    }
  };

  const fetchInboundItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      const filteredItems = MOCK_INBOUND_ITEMS.filter((item) => {
        if (filter === 'ALL') return true;
        return item.stage === filter;
      });
      setInboundItems(filteredItems);
      setFilteredInboundItems(filteredItems);
      setIsLoading(false);
    }, 2000);
  };

  const transitionInboundItem = (id: number) => {
    return new Promise((resolve) => {
      // simulate a delay for the transition
      setTimeout(() => {
        setInboundItems((prevItems) => {
          const itemIndex = prevItems.findIndex((item) => item.id === id);
          if (itemIndex !== -1) {
            const currentStageIndex = PROCESS_STAGES_IN_ORDER.indexOf(prevItems[itemIndex].stage);
            if (currentStageIndex < PROCESS_STAGES_IN_ORDER.length - 1) {
              const nextStage = PROCESS_STAGES_IN_ORDER[currentStageIndex + 1];
              const updatedItem = { ...prevItems[itemIndex], stage: nextStage };
              const updatedItems = [...prevItems];
              updatedItems[itemIndex] = updatedItem;
              return updatedItems;
            }
          }
          return prevItems;
        });
        resolve(true);
      }, 1000);
    });
  };

  return {
    inboundItems: filteredInboundItems,
    isLoading,
    fetchInboundItems,
    transitionInboundItem,
  };
};
