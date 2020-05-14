import React from "react";  
import Link from "next/link"  
import Query from "../components/query";  
import PROJECTS_QUERY from "../apollo/queries/project/projects";

const Nav = () => {  
  return (
    <div>
      <Query query={PROJECTS_QUERY} id={null}>
        {({ data: { projects } }) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link href="/">
                        <a>Layout Preview</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {projects.map((category, i) => {
                      return (
                        <li key={category.id}>
                          <Link
                            href={{
                              pathname: "category",
                              query: { id: category.id }
                            }}
                          >
                            <a className="uk-link-reset">{category.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;  