import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
} from "react";

export type FigureCounterContextType = {
  getNextNumber: () => number;
  reset: () => void;
  current: () => number;
};

const FigureCounterContext = createContext<FigureCounterContextType | null>(null);

export function FigureCounterProvider({ children }: PropsWithChildren<{}>) {
  const counter = useRef(1);
  const getNextNumber = useCallback(() => counter.current++, []);
  const reset = useCallback(() => { counter.current = 1 }, []);
  const current = useCallback(() => counter.current, []);

  return (
    <FigureCounterContext.Provider
      value={{ getNextNumber, reset, current }}
    >
      {children}
    </FigureCounterContext.Provider>
  );
}

export function useFigureCounter(): FigureCounterContextType {
  const ctx = useContext(FigureCounterContext);
  if (!ctx) throw new Error("useFigureCounter must be inside FigureCounterProvider");
  return ctx;
}
