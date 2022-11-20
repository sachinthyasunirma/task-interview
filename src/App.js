import HomeHOC from "./HOC/HomeHOC";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <>
      <HomeHOC path="/" exect component={<HomePage/>}/>
    </>
  );
}

export default App;
