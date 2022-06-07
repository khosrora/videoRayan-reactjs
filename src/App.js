import Index from "./pages";
import DataProvider from "./redux/store";



function App() {

  return (
    <DataProvider>
      <Index />
    </DataProvider>
  );
}

export default App;