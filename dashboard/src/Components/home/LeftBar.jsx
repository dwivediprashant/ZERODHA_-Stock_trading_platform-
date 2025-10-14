import TopBar from "./TopBar";
import Content from "./Content";
function LeftBar({ setFlash }) {
  return (
    <div className="p-3 border-end">
      <TopBar />
      <Content setFlash={setFlash} />
    </div>
  );
}

export default LeftBar;
