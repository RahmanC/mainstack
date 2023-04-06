import "./App.scss";
import Router from "routes";
import GoogleFontLoader from "react-google-font-loader";
import { DataProvider } from "context/DataContext";

function App() {
  return (
    <>
      {/* get "sohne font from react-google-font-loader library" */}
      <GoogleFontLoader
        fonts={[
          {
            font: "Söhne",
            weights: [500, "500i"],
          },
        ]}
      />
      <div className="App">
        <DataProvider>
          <Router />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
