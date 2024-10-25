import { useState,useEffect } from "react";
import { Login, Register } from "./pages/auth";
import MainLayout from "./components/Layouts/Main";
import Profile from "./pages/profile";
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route,Navigate } from 'react-router-dom';
import Cabinet from "./pages/cabinet";
import LoadingWrapper from "./components/sheard/LoadingWrapper";
import { getDoc,doc } from "firebase/firestore";
import { ROUTE_CONSTANTS,FIRESTORE_PATH_NAMES } from './core/utils/constants';
import { auth,db} from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./Context/authContextProvider";
import './styles/global.css'

const App = ()=>{
  const [isAuth,setIsAuth] = useState(false);
  const [loading,setLoading] = useState(true);
  const  [ userProfileInfo,setUserProfileInfo] = useState({});
  
  const handleGetUserData = async(uid)=>{
    const docRef = doc(db,FIRESTORE_PATH_NAMES.REGISTERED_USERS,uid);
    const response = await getDoc(docRef);
  
    if(response.exists()){
      setUserProfileInfo(response.data())
    }
  }
  
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
     user?.uid && handleGetUserData(user.uid)
      setLoading(false);
      setIsAuth(Boolean(user));
    
    })
  },[])
  
  return (
    <AuthContext.Provider value = {{isAuth,userProfileInfo}}>
    <LoadingWrapper loading={loading}>
  <RouterProvider
  router = {
    createBrowserRouter(
      createRoutesFromElements(
       <Route path = "/" element={<MainLayout />} >
        <Route path = {ROUTE_CONSTANTS.LOGIN} element = { isAuth ? <Navigate to = {ROUTE_CONSTANTS.CABINET}/> : <Login  setIsAuth={setIsAuth}/>} />
        <Route path = {ROUTE_CONSTANTS.REGISTER} element = {isAuth?<Navigate to = {ROUTE_CONSTANTS.CABINET}/>:<Register />} />
        <Route path={ROUTE_CONSTANTS.CABINET} element={isAuth ? <Cabinet />:<Navigate to = {ROUTE_CONSTANTS.LOGIN}/>}/>
        <Route path={ROUTE_CONSTANTS.PROFILE} element = {isAuth? <Profile />:<Navigate to = {ROUTE_CONSTANTS.LOGIN}/>} />
       </Route>
      )
    )
  }
  />
  </LoadingWrapper>
  </AuthContext.Provider>
  );
}

export default App;