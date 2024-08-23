// src/components/Layout.jsx
import React from "react";
import "@fontsource/jetbrains-mono"; // Automatically loads the JetBrains Mono font
import "../assets/globals.css";
import Header from "../components/ui/Header";
import PageTransition from "../components/ui/PageTransition";
import StairTransition from "../components/ui/StairTransition";

export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: "JetBrains Mono, monospace",backgroundColor: "#121212",color: "#FFFFFF"}}>
      <Header />
      <PageTransition>
        <StairTransition />
        {children}
      </PageTransition>
    </div>
  );
}
