import Chat from "./components/Chat";
import Detail from "./components/Detail";
import List from "./components/List";

export default function App() {
  return (
    <div
      className="w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.75)] rounded-xl backdrop-blur-[19px] backdrop-saturate-[180%]
    border-[1px] border-[rgba(255,255,255,0.125)] border-solid flex"
    >
      <List />
      <Chat />
      <Detail />
    </div>
  );
}
