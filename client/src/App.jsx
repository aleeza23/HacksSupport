import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JudgingGpt } from "./pages/JudgingGpt";
import { Home } from "./pages/Home";
import { OrganizersGpt } from "./pages/OrganizersGpt";
import HackathonToolPage from "./pages/HackathonToolPage";
import BusinessPage from "./pages/BussinessPage";


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/hackathon-tools" element={<HackathonToolPage />} />
        <Route exact path="/business" element={<BusinessPage />} />


        <Route exact path="/judges-gpt" element={<JudgingGpt />} />
        <Route exact path="/org-gpt" element={<OrganizersGpt />} />
      </Routes>
    </Router>
  )
};
