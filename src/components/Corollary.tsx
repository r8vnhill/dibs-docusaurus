import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

type CorollaryProps = {
  title?: string;
  children: React.ReactNode;
};

const Corollary: React.FC<CorollaryProps> = ({
  title = "Corolario",
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Animación para el contenido
  const animationStyles = useSpring({
    maxHeight: isExpanded ? 2000 : 0,
    opacity: isExpanded ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });

  // Animación para la rotación del ícono
  const iconAnimation = useSpring({
    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
    config: { tension: 300, friction: 30 },
  });

  return (
    <div className="corollary">
      <div
        className="corollary-header"
        onClick={toggleExpansion}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4>{title}</h4>
        <animated.div style={iconAnimation}>
          <FaChevronDown />
        </animated.div>
      </div>
      <animated.div style={{ ...animationStyles, overflow: "hidden" }}>
        <div ref={contentRef} className="corollary-content">
          {children}
        </div>
      </animated.div>
    </div>
  );
};

export default Corollary;
