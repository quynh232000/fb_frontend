import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import "./components/GlobalStyles/GlobalStyles.css";
import "./components/GlobalStyles/custom.css";
import ChatBox from "./components/chatbox/ChatBox";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
function App() {
  const stateChatBox = useSelector((state: RootState) => state.chatBoxReducer);
  return (
    <>
    <main className="flex px-2 md:px-0 w-full flex-wrap h-screen ">
      <Routes>
        {publicRoutes.map((item, index) => {
          const Layout = item.layout;
          return (
            <Route key={index} element={<Layout />}>
              {item.routes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
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
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </main>
    {stateChatBox.ids.length > 0 && (
        <div className="fixed bottom-0 right-[10px] md:right-[80px] z-10 flex gap-4">
          {stateChatBox.ids.map((id, index) => {
            return <ChatBox key={index} id={id} />;
          })}
        </div>
      )}
    </>

  );
}

export default App;
