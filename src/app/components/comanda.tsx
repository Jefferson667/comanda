"use client"
import React, { useState } from 'react';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState<string>('');

  const handleAddProduct = () => {
    if (newProduct.trim() !== '') {
      setProducts([...products, newProduct]);
      setNewProduct('');
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Lista de Produtos</h2>
        <input
          type="text"
          placeholder="Inserir produto"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded mb-2"
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Inserir
        </button>
        <ul>
          {products.map((product, index) => (
            <li key={index} className="mb-2">
              {product}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <button
          onClick={() => window.print()}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          Imprimir
        </button>
      </div>
    </div>
  );
};

export default ProductList;
