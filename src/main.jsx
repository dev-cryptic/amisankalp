import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/HomePage"
import Layout from "./Layout.jsx";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import OurProgrammes from "./pages/OurProgrammes"
import AnimalWelfare from "./pages/OurProgrammes/AnimalWelfare";
import Education from "./pages/OurProgrammes/Education";
import Health from "./pages/OurProgrammes/Health";
import Livelihood from "./pages/OurProgrammes/Livelihood";
import Trees from "./pages/OurProgrammes/Trees";
import WomenEmpowerment from "./pages/OurProgrammes/WomenEmpowerment";
import ContactUs from "./pages/ContactUs";
import ResourceCenter from "./pages/ResourceCenter";
import Impact from "./pages/Impact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      {/* Your pages will be added here */}
      <Route path="about-us" element={<AboutUs />} />

      <Route path="programmes" element={<OurProgrammes />} />


      {/* PROGRAMME DETAIL PAGES */}

      <Route
        path="programmes/education"
        element={<Education />}
      />

      <Route
        path="programmes/health"
        element={<Health />}
      />

      <Route
        path="programmes/livelihood"
        element={<Livelihood />}
      />

      <Route
        path="programmes/women-empowerment"
        element={<WomenEmpowerment />}
      />

      <Route
        path="programmes/animal-welfare"
        element={<AnimalWelfare />}
      />

      <Route
        path="programmes/tree-plantation"
        element={<Trees />}
      />

      <Route
        path="contact"
        element={<ContactUs />}
      />

      <Route
        path="resources"
        element={<ResourceCenter />}
      />

      <Route
        path="impact"
        element={<Impact />}
      />

    </Route>


  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);