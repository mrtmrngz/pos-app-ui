import React from 'react';
import ProductItem from "./ProductItem.jsx";
import {useProduct} from "../../Context/index.js";

const ProductList = () => {

    const {products} = useProduct()

    return (
        <div className="w-full h-full mt-8">
            <div className="product-wrapper">
                <div className="product-list grid grid-cols-card gap-5">

                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} color={false} type="isProduct" />
                    ))}

                    <ProductItem type="add" />
                    <ProductItem type="edit" />

                </div>
            </div>
        </div>
    );
};

export default ProductList;