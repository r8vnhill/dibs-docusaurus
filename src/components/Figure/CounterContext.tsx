import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
} from "react";

export type CounterContextType = {
  getNextNumber: () => number;
  reset: () => void;
  current: () => number;
};

export function createCounterContext() {
  const Context = createContext<CounterContextType | undefined>(undefined);

  console.log(`Creating CounterContext`, Context);
  const Provider = ({ children }: PropsWithChildren<{}>) => {
    const counterRef = useRef(1);

    const getNextNumber = useCallback(() => counterRef.current++, []);
    const reset = useCallback(() => {
      counterRef.current = 1;
    }, []);
    const current = useCallback(() => counterRef.current, []);

    return (
      <Context.Provider value={{ getNextNumber, reset, current }}>
        {children}
      </Context.Provider>
    );
  };

  const useCounter = (): CounterContextType => {
    const context = useContext(Context);
    if (!context) throw new Error("Missing CounterProvider");
    return context;
  };

  return { Provider, useCounter };
}
