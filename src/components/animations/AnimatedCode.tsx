import { motion } from "framer-motion";
import { useState } from "react";

const codeExamples = [
  `fun sum(a: Int, b: Int): Int {
  return a + b
}`,
  `fun sum(a: Int, b: Int): Int = a + b`,
  `fun sum(a: Int, b: Int) = a + b`,
];

const AnimatedCodeExample: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <div>
      <motion.pre
        key={step}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        style={{ whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: "16px" }}
      >
        <code>{codeExamples[step]}</code>
      </motion.pre>
      <button onClick={() => setStep((step + 1) % codeExamples.length)}>
        Siguiente
      </button>
    </div>
  );
};

export default AnimatedCodeExample;
