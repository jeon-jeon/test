export type BottomContentProps = { title: string; content?: string };
const BottomContent = (props: BottomContentProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: "13px", color: "#222222" }}>{props.title}</span>
      <span style={{ fontSize: "13px", color: "#6a6a6a" }}>
        {props.content}
      </span>
    </div>
  );
};

export default BottomContent;
