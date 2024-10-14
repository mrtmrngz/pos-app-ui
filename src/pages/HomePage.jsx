import CategoryList from "../components/Categories/CategoryList.jsx";
import ProductList from "../components/Products/ProductList.jsx";

const HomePage = () => {

    return (
        <div
            className="flex w-full flex-col md:flex-row md:h-[calc(100vh_-_80px)] h-max overflow-auto md:overflow-hidden">
            <div className="left md:flex-[3.5] flex-none h-full overflow-auto container mx-auto md:mx-0">
                <div className="wrapper mt-5 pb-24 md:pb-6">
                    <CategoryList/>
                    <ProductList />
                </div>
            </div>
            <div className="right bg-secondary md:flex-1 flex-none overflow-auto h-full"></div>
        </div>
    );
};

export default HomePage;