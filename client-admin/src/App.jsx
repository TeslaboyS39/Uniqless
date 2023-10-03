import { RouterProvider } from "react-router-dom";
import router from "./routers";

function App() {
  const backgroundImageUrl = "https://images7.alphacoders.com/131/1318803.jpeg";
  const appStyles = {
    background: `url(${backgroundImageUrl}) no-repeat center center fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  return (
    <>
      <div className="container" style={appStyles}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
