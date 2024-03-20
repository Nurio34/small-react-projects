import React, { useEffect, useMemo, useState } from "react";

function UseMemo() {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products?limit=100");
            const data = await res.json();
            setProducts(data);
            console.log("Fetching all products...");
        } catch (error) {
            console.log(e);
        }
    };

    const productsThatPricesLowerThan500 = useMemo(() => {
        //TODO Burda kaldım...
    });

    useEffect(() => {
        getAllProducts();
    }, []);

    return <div>UseMemo</div>;
}

export default UseMemo;
