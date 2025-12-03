import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import DetailPage from "./pages/detail-place.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
);
