import React, { useEffect } from "react";
import WebFont from "webfontloader";

export default function Header() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <div className="font-loader">
    {/* Page title */}
        <h1 className="header mt-2 text-white text-center text-2xl">
          The Writer's Cave
        </h1>

    {/* Navigation Bar */}
        <nav className>
            <ul className = " flex justify-center text-white">
                <li className="mr-3"> 
                    <a className = "hover:no-underline inline-block" href = "#"> My Writings</a>
                </li>
                <li className="mr-3">  
                <a className = "hover:no-underline inline-block" href = "#"> Inspirations</a>
                </li>
                <li className="mr-3"> <a className = "hover:no-underline inline-block" href = "#"> Write Anything </a> </li>
            </ul>
        </nav>

      </div>
    </>
  );
}