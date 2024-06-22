import { useRoutes } from "react-router-dom";
import routes from "./routes";

const Main = () => {
  const element = useRoutes(routes);
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100% - 40px)",
        overflow: "auto",
      }}
    >
      {element}
    </div>
  );
};

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "40px",
      }}
    ></div>
  );
};

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Header />
      <Main />
    </div>
  );
};

export default App;
