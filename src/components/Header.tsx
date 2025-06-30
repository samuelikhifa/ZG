import React from "react";
import Search from "./Search";
// import Search from "./Search";
export default function Header() {
  return (
    <div>
      <header className="bg-base-200 p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-xl font-bold text-primary">Zulen</h1>

          <Search />
        </div>
      </header>
    </div>
  );
}
