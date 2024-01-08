import { useState } from "react";
import SignIn from "./Pages/Authentication/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Authentication/SignUp";
import DefaultLayout from "./Layout/DefaultLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/s" element={<SignUp />} />
          <Route path="/l" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
