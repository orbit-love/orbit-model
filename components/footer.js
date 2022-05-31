import React from "react";

export default function Footer() {
  return (
    <footer className="header-background py-6">
      <div className="text-center text-slate-400">
        Made with{" "}
        <code className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-700">
          love
        </code>{" "}
        by{" "}
        <a className="font-semibold" href="https://orbit.love/">
          Orbit
        </a>{" "}
        and the{" "}
        <a className="font-semibold" href="https://orbit.love/community">
          Orbit Community
        </a>
      </div>
    </footer>
  );
}
