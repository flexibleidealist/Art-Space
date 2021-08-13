import { Route } from "react-router-dom"
import Main from "./components/Main/Main.jsx"
import SignIn from "./screens/SignIn/SignIn.jsx"
import SignUp from "./screens/SignUp/SignUp.jsx"
import './App.css';
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <div>
      <Layout>
        <Main />
        <Route exact path="/artists/login">
          <SignIn />
        </Route>
        <Route exact path="/artists">
          <SignUp  />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
