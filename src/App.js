import CurBalance from "./CurBalance";
import SpendingCard from "./SpendingCard";

function App() {
  return (
    <div className="App">
      <main>
        <div className="outer-container">
          <CurBalance></CurBalance>
          <SpendingCard></SpendingCard>
        </div>
      </main>
    </div>
  );
}

export default App;
