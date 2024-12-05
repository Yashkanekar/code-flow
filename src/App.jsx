import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PlaygroundScreen from "./screens/PlaygroundScreen";

function App() {
  return (
    //test comment
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/playground" element={<PlaygroundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
