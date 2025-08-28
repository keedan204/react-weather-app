import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container pt-5">
        <header></header>
        <main>
          <Weather currentCity="Winnipeg" />
        </main>
        <footer>
          This React application project was coded by{" "}
          <a
            href="https://github.com/keedan204"
            target="_blank"
            rel="noopener noreferrer"
          >
            KeeDan204
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/keedan204/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-final.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
