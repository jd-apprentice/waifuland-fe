import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, DocsView } from "./views";
import "./styles.css";
import "i18n/config";
import ImagesView from "views/images";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<DocsView />} />
        <Route path="/images" element={<ImagesView />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
