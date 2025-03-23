import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Toaster />
      <HomePage />
    </>
  );
}

export default App;
