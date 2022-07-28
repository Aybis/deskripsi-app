import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Milestone, Team } from './components/pages';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/milestone" element={<Milestone />} />
      </Routes>
    </>
  );
}
