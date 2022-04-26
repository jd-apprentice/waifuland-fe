import { AppProps } from "models/types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "views";
import DocsView from "views/docs";
import ImagesView from "views/images";

const App: React.FC<AppProps> = () => {
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
