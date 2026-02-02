import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// vendor/template css
import "./css/bootstrap.min.css";
import "./css/all.min.css";
import "./css/animate.css";
import "./css/swiper-bundle.min.css";
import "./css/magnific-popup.css";
import "./css/mousecursor.css";
import "./css/slicknav.min.css";
import "./css/custom.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
