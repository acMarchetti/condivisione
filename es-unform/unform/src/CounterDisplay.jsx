export function CounterDisplay({ count }) {
  const style = {
    fontSize: "24px", // Set font size
    color: count > 0 ? "green" : "red", // Change font color based on count value
  };

  return <p style={style}>Current Count: {count}</p>;
}
