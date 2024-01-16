import { NavLink, Outlet } from 'react-router-dom';

export const Tabs = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab">
            <NavLink to="/tabs/tab1">Tab 1</NavLink>
          </li>
          <li data-cy="Tab">
            <NavLink to="/tabs/tab2">Tab 2</NavLink>
          </li>
          <li data-cy="Tab">
            <NavLink to="/tabs/tab3">Tab 3</NavLink>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};
