import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>
        <Link to="/">Navbar</Link>
      </h2>
      <Menu>
        <Menu.Item>
          <Link to="/">Todos</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/todo/add">Add todo</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
