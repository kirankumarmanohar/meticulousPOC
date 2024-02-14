import React from 'react';
import "./App.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Menu() {
  const location = useLocation();

  const activeLink = (link: any) => {
    if(link === location.pathname) {
      return 'active text-white border-white'
    }
    return 'border-gray-700'
  }

  return (
      <header className="App-header">
        <div className="text-sm font-medium text-center text-gray-500 ">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <Link
                to={`/`}
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${activeLink("/")}`}
              >
                Home
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`/counter`}
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${activeLink("/counter")}`}
              >
                Counter
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`/table`}
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${activeLink("/table")}`}
              >
                Table
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={`/form`}
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${activeLink("/form")}`}
              >
                User Form
              </Link>
            </li>
          </ul>
        </div>
      </header>
  );
}

export default Menu;
