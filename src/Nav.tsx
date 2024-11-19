export type NavProps = {
  imgSrc: string;
  name: string;
};

const Nav = (props: NavProps) => {
  const navBox: React.CSSProperties = {
    padding: "10px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imgCss: React.CSSProperties = {
    width: "20px",
    height: "20px",
  };

  return (
    <div style={navBox}>
      <img style={imgCss} src={props.imgSrc} alt="" />
      <span style={{ fontSize: "12px" }}>{props.name}</span>
    </div>
  );
};

export default Nav;
