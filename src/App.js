import Sidebar from "./components/sidebar/Sidebar";
import Head1 from "./components/Headpart/Head1";
import Content from "./components/Visual/Content.jsx"

import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar/>
      <div className="container2">
        <Head1/>
        <Content/>

      </div>
    </div>
  );
}

export default App;
