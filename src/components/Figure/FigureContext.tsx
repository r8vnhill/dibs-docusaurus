import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
} from "react";

/**
 * Context type for managing automatic figure numbering.
 *
 * Provides methods to retrieve the next figure number,
 * reset the counter, or query the current count without incrementing.
 */
type FigureCounterContextType = {
  /**
   * Retrieves the next figure number and increments the counter.
   * @returns The next figure number.
   */
  getNextNumber: () => number;

  /**
   * Resets the figure counter back to 1.
   * @returns void
   */
  reset: () => void;

  /**
   * Returns the current figure number without incrementing it.
   * @returns The current figure number.
   */
  current: () => number;
};

/**
 * React context for managing figure numbering state.
 *
 * This context provides access to a shared `FigureCounterContextType` instance, which includes
 * utilities to get, reset, or inspect the figure number.
 * It should be accessed via the `useFigureCounter` hook and provided using `FigureCounterProvider`.
 *
 * The initial value is `undefined` and must be explicitly set via a provider.
 */
const FigureCounterContext = createContext<
  FigureCounterContextType | undefined
>(undefined);

/**
 * Provides a context for managing figure numbering within a document or page.
 *
 * This component wraps its children with a context that allows consumers to:
 * - Retrieve the next figure number using `getNextNumber()`
 * - Reset the counter to 1 using `reset()`
 * - Access the current counter value using `current()`
 *
 * All updates are local to this provider and managed via a stable reference.
 * Use the `useFigureCounter` hook to access this context within the component tree.
 *
 * @param children - React child elements that will have access to the figure counter context.
 */
export function FigureCounterProvider({ children }: PropsWithChildren<{}>) {
  const counterRef = useRef(1);

  const getNextNumber = useCallback(() => counterRef.current++, []);
  const reset = useCallback(() => {
    counterRef.current = 1;
  }, []);
  const current = useCallback(() => counterRef.current, []);

  return (
    <FigureCounterContext.Provider value={{ getNextNumber, reset, current }}>
      {children}
    </FigureCounterContext.Provider>
  );
}

/**
 * Hook to access the current figure counter context.
 *
 * This hook exposes an API to:
 * - `getNextNumber()`: Increment and retrieve the next figure number.
 * - `reset()`: Reset the counter to 1.
 * - `current()`: Retrieve the current counter value without incrementing.
 *
 * ## Usage:
 * Must be used within a `FigureCounterProvider`.
 * If not, it will throw an error and log a warning in development mode.
 *
 * @throws {Error} If used outside a `FigureCounterProvider`.
 * @returns An object containing `getNextNumber`, `reset`, and `current` methods.
 */
export function useFigureCounter(): FigureCounterContextType {
  const context = useContext(FigureCounterContext);
  if (!context) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "useFigureCounter must be used within a FigureCounterProvider"
      );
    }
    throw new Error("Missing FigureCounterProvider");
  }
  return context;
}
