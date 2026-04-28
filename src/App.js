import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ContentWrapper from "./components/ContentWrapper";
import AddGroupPage from "./pages/AddGroupPage/AddGroupPage";
import GroupDetailPage from "./pages/GroupDetailsPage/GroupDetailPage";
import MusicGroupsPage from "./pages/MusicGroupsPage/MusicGroupsPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groups" element={<MusicGroupsPage />} />
          <Route path="/groups/:id" element={<GroupDetailPage />} />
          <Route path="/add-group" element={<AddGroupPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ContentWrapper>
    </>
  );
}

export default App;
