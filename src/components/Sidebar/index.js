import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = (props) => {
  const { cssClasses, mainNavigations } = props.fields.data.datasource;
  return (
    <div className={cssClasses.value}>
      <aside className="sidebar">
        <nav>
          <ul>
            {mainNavigations.jsonValue &&
              mainNavigations.jsonValue.map((item, index) => {
                return (
                  <li key={`sidemenu${index}`}>
                    <Link to={item.fields.Links.value.href}>{item.fields.Title.value}</Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
