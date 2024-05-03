import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
    return (
        <>
            <div className="grid grid-cols-12 gap-5">
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    );
}

export default App;
