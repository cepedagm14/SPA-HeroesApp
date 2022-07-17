import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../auth/pages/LoginPage";
import { Navbar } from "../../ui/components/Navbar";
import { DCPage } from "../pages/DCPage";
import { HeroPage } from "../pages/HeroPage";
import { MarvelPages } from "../pages/MarvelPage";
import {SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="/" element={<Navigate to="marvel" />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
        </Routes>
      </div>
    </>
  );
};
