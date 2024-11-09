import { Navigate, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import UserList from "./components/UserList";
import Login from "./components/Login";
import AddNewUser from "./components/AddNewUser";

function App() {
  return (
    <>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Navigate to="/user-list" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-registration" element={<Registration />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/new-user" element={<AddNewUser />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
