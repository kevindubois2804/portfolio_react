import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = ({children}) => {
    return (
        <>
        
                <div className="App">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>  

            
        </>
    );
}

export default Layout;