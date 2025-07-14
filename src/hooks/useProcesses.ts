import { MOCK_PROCESSES } from 'src/mock/processes';
import { useEffect, useState } from 'react';
import { PROCESS_STAGES_IN_ORDER } from "src/constants/process"

export const useProcesses = () => {
  const [processes, setProcesses] = useState(MOCK_PROCESSES);
  const [isLoading, setIsLoading] = useState(false);

  // simulate fetching and loading
  useEffect(() => {
    fetchProcesses().then();
  }, []);

  const fetchProcesses = () => {
    return new Promise(resolve => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(MOCK_PROCESSES);
        setProcesses(MOCK_PROCESSES);
        setIsLoading(false);
      }, 2000);
    })
  };

  const transitionProcess = (id: number) => {
    MOCK_PROCESSES.map((process) => {
      if (process.id === id) {
        const currentStageIndex = PROCESS_STAGES_IN_ORDER.indexOf(process.stage);
        if (currentStageIndex < PROCESS_STAGES_IN_ORDER.length - 1) {
          process.stage = PROCESS_STAGES_IN_ORDER[currentStageIndex + 1];
        }
      }
      return process;
    })
    setProcesses([...MOCK_PROCESSES]);
    fetchProcesses().then();
  }

  return {
    processes,
    isLoading,
    fetchProcesses,
    transitionProcess,
  };

};
