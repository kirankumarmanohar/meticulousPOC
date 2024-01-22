import React from "react";
import "./App.css";
import Menu from "./Menu";
import { useFetchProducts } from "./hooks/table";
import { Product } from "./types/Product";

function TableComponent() {
  const { data: productdata, isFetching, isFetched } = useFetchProducts();

  return (
    <div className="App">
      <Menu />
      <div className="flex">
        <table className="table-auto w-full text-sm text-left border-collapse border border-white">
          <thead className="text-xs text-white uppercase">
            <tr>
              <th className="border p-5">Title</th>
              <th className="border p-5">Brand</th>
              <th className="border p-5">Category</th>
              <th className="border p-5">Price</th>
              <th className="border p-5">Stock</th>
              <th className="border p-5">Description</th>
            </tr>
          </thead>
          <tbody className="text-xs text-white uppercase">
            {productdata?.products && productdata.products.map((product: Product) => {
              return (
                <tr key={product.id}>
                  <td className="border p-5">{product.title}</td>
                  <td className="border p-5">{product.brand}</td>
                  <td className="border p-5">{product.category}</td>
                  <td className="border p-5">{product.price}</td>
                  <td className="border p-5">{product.stock}</td>
                  <td className="border p-5">{product.description}</td>
                </tr>
              );
            })}
            {!productdata?.products.length && !isFetching &&  
               <tr>
                  <td colSpan={6} className="text-center p-5"> No Records Found </td>
               </tr>
            }
            {isFetching && !isFetched &&
               <tr>
                  <td colSpan={6} className="text-center p-5"> Loading </td>
               </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
