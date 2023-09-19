import { Content } from "../content/content";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Lead } from "../lead/lead";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Lead />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
