// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import './components/GlobalStyles/GlobalStyles.css'
import "./components/GlobalStyles/custom.css"

function App() {
  return (
    <main className="flex  w-full flex-wrap h-screen ">
      <Routes>
        <Route element={<AuthLayout />}>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
        <Route element={<AppLayout />}>
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
