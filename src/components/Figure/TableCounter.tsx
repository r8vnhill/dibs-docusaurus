import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
} from "react";

export type TableCounterContextType = {
  getNextNumber: () => number;
  reset: () => void;
  current: () => number;
};

const TableCounterContext = createContext<TableCounterContextType | null>(null);

export function TableCounterProvider({ children }: PropsWithChildren<{}>) {
  const counter = useRef(1);
  const getNextNumber = useCallback(() => counter.current++, []);
  const reset = useCallback(() => { counter.current = 1 }, []);
  const current = useCallback(() => counter.current, []);

  return (
    <TableCounterContext.Provider
      value={{ getNextNumber, reset, current }}
    >
      {children}
    </TableCounterContext.Provider>
  );
}

export function useTableCounter(): TableCounterContextType {
  const ctx = useContext(TableCounterContext);
  if (!ctx) throw new Error("useTableCounter must be inside TableCounterProvider");
  return ctx;
}
