import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { Link } from "react-router-dom";

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
        <h1 className="header mt-2 text-white text-center text-2xl ">
          <Link to="/" className= "hover:no-underline" >The Writer's Cave</Link>
        </h1>

        {/* Navigation Bar */}
        <nav className>
          <ul className=" flex justify-center text-white">
            <li className="mr-3">
              <Link to="/mywriting" className="hover:no-underline inline-block">
                My Writings
              </Link>
            </li>

            <li className="mr-3">
              <Link to="/inspo" className="hover:no-underline inline-block">
                Inspirations
              </Link>
            </li>
            <li className="mr-3">
              <Link to="/freewrite" className="hover:no-underline inline-block">
                Write Anything
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
