
import './App.css';

import GlobalStyles from "../src/theme/global";
import Main from "./pages/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import View from "./pages/view/View";
import LoginPage from "./pages/loginPage/LoginPage";

import UploadFile from "./pages/uploadFile/UploadFile";

import ViewImg from "./pages/viewImg/ViewImg";
function App() {
  return (
      <>
          <GlobalStyles/>
          <BrowserRouter>
              <Routes>
                  <Route index element={<Main />}/>
                  <Route path="login" element={<LoginPage />}/>
                  <Route path="view" element={<View />}/>
                  <Route path="registration" element={<RegistrationPage />}/>
                  <Route path="/" element={<View />}>
                      <Route path="view" index element={<ViewImg />} />
                      <Route path="viewList" element={<ViewImg />}/>
                      <Route path="createView" element={<UploadFile/>} />
                      <Route path="addPhoto" element={<ViewImg />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
