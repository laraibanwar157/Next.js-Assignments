import React from 'react';
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "yellow", padding: "1rem"}}>This is home page.</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/services">Services</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
