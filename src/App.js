import Single from "./components/single/Single";
import Topbar from "./components/topBar/Topbar";
import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";

function App() {
  return (
    <>
      <Topbar />
      <Register />
    </>
  );
}

export default App;
