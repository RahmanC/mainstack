import "./App.scss";
import Router from "routes";
import GoogleFontLoader from "react-google-font-loader";

function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Söhne",
            weights: [500, "500i"],
          },
        ]}
      />
      <div className='App'>
        <Router />
      </div>
    </>
  );
}

export default App;
