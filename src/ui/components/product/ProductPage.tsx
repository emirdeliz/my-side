import { Product } from '@api';
import { ModalFormMaintenance, TableMaintenance } from '@templates'
import { GenericObject } from '@types';
import { useState } from 'react';
import { ProductForm } from './components/ProductForm/ProductForm';

const dataSource = [
  { id: 1, name: 'Caneta azul', price: 5.20, description: 'Caneta azul da marca FaberCastell' },
  { id: 2, name: 'Borracha', price: 3.45, description: 'Borracha verde' },
  { id: 3, name: 'Tesoura', price: 12.50, description: 'Tesoura sem ponta' }
] as Array<Product>;

export const ProductPage = () => { 
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [products, setProducts] = useState<Array<Product>>(dataSource);

  const columns = [
    { key: 'name', label: 'Nome', },
    { key: 'price', label: 'Preço', currency: true },
    { key: 'description', label: 'Descrição', },
  ] as GenericObject;

  return (
    <>
      <ModalFormMaintenance
        visible={!!selectedProduct}
        onClose={() => setSelectedProduct(undefined)}
      >
        <ProductForm
          initialData={selectedProduct}
          onSave={(data) => { 
            if (data.id) { 
              setProducts(products.map(u => { 
                if (u?.id === data.id) { 
                  return data;
                }
                return u;
              }))
            } else {
              data.id = products.length + 1;
              setProducts([...products, data]);
            }
            setSelectedProduct(undefined);
          }}
        />
      </ModalFormMaintenance>
      <TableMaintenance<Product>
        title="Produtos"
        columns={columns}
        dataSource={products}
        onAdd={() => setSelectedProduct({})}
        onEdit={(data) => setSelectedProduct(data)}
        onConfirmDelete={item => setProducts(products.filter(u => u.id !== item?.id))}
      />
    </>
  );
}