import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="text-2xl text-center w-full">
      <div className="flex gap-10 w-full text-center justify-around px-60">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
