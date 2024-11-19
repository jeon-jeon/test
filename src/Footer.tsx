import BottomInfo from "./BottomInfo";
import BottomNav from "./BottomNav";

const Footer = () => {
  const footerContainer: React.CSSProperties = {
    backgroundColor: "#f7f7f7",
  };
  return (
    <section style={footerContainer}>
      <BottomNav></BottomNav>
      <BottomInfo></BottomInfo>
    </section>
  );
};

export default Footer;
