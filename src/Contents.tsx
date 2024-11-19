import { LuUpload } from "react-icons/lu";

export type ContentsProps = {
  imgSrc: string;
  title: string;
  host: string;
  status: string;
};

const Contents = (props: ContentsProps) => {
  const contentbox: React.CSSProperties = {
    padding: "10px 0px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    position: "relative",
  };

  const imgSrc: React.CSSProperties = {
    width: "250px",
    height: "250px",
    objectFit: "cover",
    borderRadius: "20px",
  };
  const circle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "9999px",
    backgroundColor: "white",
    width: "30px",
    height: "30px",
    opacity: "0.8",
    position: "absolute",
    right: "30px",
    top: "20px",
  };

  const textbox: React.CSSProperties = {
    padding: "10px 0px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    color: "#222222",
    fontSize: "14px",
  };

  return (
    <article style={contentbox}>
      <img style={imgSrc} src={props.imgSrc} alt="" />
      <div style={circle}>
        <LuUpload />
      </div>

      <div style={textbox}>
        <span>{props.title}</span>
        <span>호스트 : {props.host} 님</span>
        <span>{props.status}</span>
      </div>
    </article>
  );
};

export default Contents;
