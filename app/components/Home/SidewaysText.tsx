import React from "react";

interface SidewaysTextProps {
  year: string;
  text: string;
}

const SidewaysText: React.FC<SidewaysTextProps> = ({ year, text }) => {
  return (
    <div style={styles.container}>
      <span style={styles.year}>{year}</span>
      <div style={styles.line}></div>
      <span style={styles.text}>{text}</span>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: "20px", // Adjust position as needed
    top: "50%",
    transform: "translateY(-50%)",
  },
  year: {
    writingMode: "vertical-rl", // Rotate text sideways
    transform: "rotate(180deg)", // Adjust rotation
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#666",
    marginBottom: "8px",
  },
  line: {
    width: "1px",
    height: "50px", // Length of the line
    backgroundColor: "#ccc",
    marginBottom: "8px",
  },
  text: {
    writingMode: "vertical-rl", // Vertical text
    fontSize: "0.9rem",
    color: "#444",
  },
};

export default SidewaysText;
