import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, CreateContainer, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-full bg-primary">
        <Header/>
        <main className="w-full mt-20">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
