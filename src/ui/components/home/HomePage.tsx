import { useEffect, useMemo, useState } from "react";
import { ProductModel } from "@api";
import { Flex } from "@atoms"
import { useProductService } from "@services";
import { Table } from "@molecules";

const NUM_PRODUCTS_PER_PAGE = 4;

export const HomePage = () => { 
  const { getProducts } = useProductService();
  const [page, setPage] = useState<number>(0);
  const [products, setProducts] = useState<Array<ProductModel>>([]);

  useEffect(() => {
    initialize()
  }, []);

  const initialize = async () => {
    const result = await getProducts();
    setProducts(result);
  }

  const numOfPages = useMemo(() => {
    return products.length / NUM_PRODUCTS_PER_PAGE;
  }, [products]);

  const productsPerPage = useMemo(() => {
    return products.slice(page * NUM_PRODUCTS_PER_PAGE, page * NUM_PRODUCTS_PER_PAGE + NUM_PRODUCTS_PER_PAGE);
  }, [products, page]);

  return (
    <Flex mt3>
      {products.length && (
        <Table
          enablePagination
          numOfPages={numOfPages}
          page={0}
          columns={[
            { key: 'title', label: 'Nome' },
            { key: 'price', label: 'Preço', currency: true },
            { key: 'image', label: 'Imagem', customCellRender: (p) => <img src={p.image} style={{ width: 100, margin: 'auto' }} /> },
            { key: 'description', label: 'Descrição' },
          ]}
          dataSource={productsPerPage}
          onChangePage={(p) => setPage(p)}
        />
      )}
    </Flex>
  );
}
