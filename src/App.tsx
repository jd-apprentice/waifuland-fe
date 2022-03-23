import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Docs, Home } from "views";
import ImagesView from "views/images";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/images" element={<ImagesView />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
