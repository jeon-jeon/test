import { topNav } from "./constants/dataNav";
import Login from "./Login";
import Nav from "./Nav";

export type NavType = { imgSrc: string; name: string };

const Header = () => {
  const container: React.CSSProperties = {
    position: "fixed",
    top: "0px",
    zIndex: 1,
    width: "100%",
    maxWidth: "1400px",
    left: "50%",
    transform: "translate(-50%, 0)",
    backgroundColor: "white",
  };

  const navBox: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    color: "#929292",
  };

  return (
    <section style={container}>
      <Login></Login>

      <div style={navBox}>
        {topNav.map((v) => (
          <Nav {...v}></Nav>
        ))}
      </div>
    </section>
  );
};

export default Header;
