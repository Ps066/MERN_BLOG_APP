import TopBar from "./Components/TopBarComponent/TopBar";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import SettingsPage from "./Pages/SettingPage/SettingsPage";
import ViewPostPage from "./Pages/ViewPostPage/ViewPostPage";
import WritePage from "./Pages/WritePage/WritePage";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/post' element={<ViewPostPage />}></Route>
        <Route path='/write' element={user? <WritePage/> : <RegisterPage/>}></Route>
        <Route path='/settings' element={user? <SettingsPage/> : <RegisterPage/>}></Route>
        <Route path='/login' element={user? <HomePage/> : <LoginPage/>}></Route>
        <Route path='/register' element={user? <HomePage/> : <RegisterPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
