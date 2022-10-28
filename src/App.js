import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

export default function App() {
  // eslint-disable-next-line no-restricted-globals
  console.log(location);
  return (
    <div>
      <h1 style={{ color: 'red' }}>BETA SITE</h1>
      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{' '}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/beta" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutBeta />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/beta">Home</Link>
          </li>
          <li>
            <Link to="/beta/about">About Beta</Link>
          </li>
          <li>
            <Link reloadDocument to="/about">
              About
            </Link>
          </li>
          <li>
            <Link reloadDocument to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Layout />
    </div>
  );
}

function AboutBeta() {
  return (
    <div>
      <h2>About Beta</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
