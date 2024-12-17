// Color Component: Receives a "color" object and displays its "name" property
function Color({ color }) {
  return <li>{color.name}</li>;
}

// Colors Component: Receives an array of "color" objects and renders a list of Color components
function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}

// Example usage of the Colors component
const colorList = [
  { id: 1, name: "Red" },
  { id: 2, name: "Blue" },
  { id: 3, name: "Green" },
  { id: 4, name: "Yellow" },
  { id: 5, name: "Purple" },
];

function App() {
  return (
    <div>
      <h1>Colors List</h1>
      <Colors colors={colorList} />
    </div>
  );
}

export default App;
