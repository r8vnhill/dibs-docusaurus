import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
} from "react";
import type { CounterContextType } from "../../../../components/Figure/CounterContext";

export type DefinitionCounterContextType = CounterContextType;

const DefinitionCounterContext =
  createContext<DefinitionCounterContextType | null>(null);

export function DefinitionCounterProvider({ children }: PropsWithChildren<{}>) {
  const counter = useRef(1);
  const getNextNumber = useCallback(() => counter.current++, []);
  const reset = useCallback(() => {
    counter.current = 1;
  }, []);
  const current = useCallback(() => counter.current, []);

  return (
    <DefinitionCounterContext.Provider
      value={{ getNextNumber, reset, current }}
    >
      {children}
    </DefinitionCounterContext.Provider>
  );
}

export function useDefinitionCounter(): DefinitionCounterContextType {
  const ctx = useContext(DefinitionCounterContext);
  if (!ctx) throw new Error("useDefinitionCounter must be inside DefinitionCounterProvider");
  return ctx;
}
