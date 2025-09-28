import TopBar from "./TopBar";
import Content from "./Content";
function LeftBar() {
  return (
    <div className="p-3 border-end">
      <TopBar />
      <Content />
    </div>
  );
}

export default LeftBar;
