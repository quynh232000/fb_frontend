import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import "./components/GlobalStyles/GlobalStyles.css";
import "./components/GlobalStyles/custom.css";
import ChatBox from "./components/chatbox/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducers";

import PageNotFund from "./pages/PageNotFund";
import { AuthProvider } from "./routes/provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Toast from "./components/toast/Toast";
import { closeNotify } from "./redux/reducers/appReducer";
import { useEffect } from "react";
import audioNoti from "./assets/media/nhac_thong_bao.mp3";

function App() {
  const dispatch = useDispatch();

  const { listChatUsers} = useSelector((state: RootState) => state.chatBoxReducer);
  const stateApp = useSelector((state: RootState) => state.appReducer);

  useEffect(() => {
    if (stateApp.isNotify) {
      setTimeout(() => {
        dispatch(closeNotify());
      }, 5000);
    }
  });
  const onClose = () => {
    dispatch(closeNotify());
  };
 
  
  return (
    <>
      <main className="flex px-2 md:px-0 w-full flex-wrap h-screen ">
        <AuthProvider>
          <Routes>
            {publicRoutes.map((item, index) => {
              const Layout = item.layout;
              return (
                <Route key={index} element={<Layout />}>
                  {item.routes.map((route, index) => {
                    const Page = route.component;
                    return (
                      <Route
                        key={index}
                        path={route.path}
                        element={
                          <>
                            <Page />
                          </>
                        }
                      />
                    );
                  })}
                </Route>
              );
            })}

            {privateRoutes.map((item, index) => {
              const Layout = item.layout;
              return (
                <Route key={index} element={<Layout />}>
                  {item.routes.map((route, index) => {
                    const Page = route.component;
                    return (
                      <Route key={index} element={<PrivateRoute />}>
                        <Route
                          path={route.path}
                          element={
                            <>
                              <Page />
                            </>
                          }
                        />
                      </Route>
                    );
                  })}
                </Route>
              );
            })}

            <Route path="*" element={<PageNotFund />} />
          </Routes>
        </AuthProvider>
      </main>
      {/* chat box */}
      {listChatUsers && listChatUsers.length > 0 && (
        <div className="fixed bottom-0 right-[10px] md:right-[80px] z-10 flex gap-4">
          {listChatUsers.map((user, index) => {
            return <ChatBox key={index} user={user} />;
          })}
        </div>
      )}
      {/* notify */}

      {stateApp.isNotify && (
        <>
          <Toast
            type={stateApp.dataNotify.type}
            message={stateApp.dataNotify.message}
            onClose={onClose}
          />
          <audio autoPlay>
            <source src={audioNoti} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </>
      )}
    </>
  );
}

export default App;
