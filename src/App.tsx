import "./App.css";
import Mainlayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <Mainlayout></Mainlayout>
    </ProtectedRoute>
  );
}

export default App;
