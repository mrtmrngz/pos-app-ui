import React, {useState} from 'react';
import ProductItem from "./ProductItem.jsx";
import {useProduct} from "../../Context/index.js";
import AddProductModal from "../Modals/AddProductModal.jsx";

const ProductList = () => {

    const [isModalAddOpen, setIsAddModalOpen] = useState(false)

    const {products} = useProduct()

    return (
        <div className="w-full h-full mt-8">
            <div className="product-wrapper">
                <div className="product-list grid grid-cols-card gap-5">

                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} color={false} type="isProduct" />
                    ))}

                    <ProductItem type="add" isModalAddOpen={isModalAddOpen} setIsAddModalOpen={setIsAddModalOpen} />
                    <ProductItem type="edit" />

                </div>
            </div>
            {isModalAddOpen && <AddProductModal onOpen={isModalAddOpen} onClose={() => setIsAddModalOpen(false)} />}
        </div>
    );
};

export default ProductList;