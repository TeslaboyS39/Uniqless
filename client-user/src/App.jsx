import { RouterProvider } from "react-router-dom";
import router from "./routers";

function App() {
  const backgroundImageUrl =
    "https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830027.jpg?w=2000";
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
