import React from "react";
import "materialize-css";
import { Link, useLocation } from "react-router-dom";
import { Footer } from "react-materialize";
import "./style.css";

function newFooter() {
  // const possiblePaths = [ '/match', '/profile', '/messages']
  const { pathname } = useLocation();

  const renderFoot = () => {
    function tag() {
        const tags = ['You want a friend? Get a dog!', 'Raise. Da. Woof.', 'Make Fetch happen!']
        const selected = tags[Math.floor(Math.random() * tags.length)]
        return selected;
    }

    if (pathname !== "/") {
      return (
        <Footer
          className="footer"
          copyrights="Copyright &copy; 2020 Raise Da Woof"
          links={
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="/meettheteam">
                  Meet The Team!
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/ourmission">
                  Our Mission
                </Link>
              </li>
            </ul>
          }
        >
          <h5 className="white-text footer-tag">{tag()}</h5>
        </Footer>
      );
    } else {
      return <div></div>;
    }
  };
  return renderFoot();
}

export default newFooter;
