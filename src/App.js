import Sidebar from "./components/sidebar/Sidebar";
import Head1 from "./components/Headpart/Head1";
import Content from "./components/content/Content";
import Accuracy from "./components/content/Accuracy";
import Tracker from "./components/content/Tracker";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar/>
      <div className="container2">
        <Head1/>

      </div>
    </div>
  );
}

export default App;
