import { useEffect, useMemo, useState } from "react";
import { ProductModel } from "@api";
import { Col, Flex, Row, Title } from "@atoms"
import { useCategoryService, useProductService } from "@services";
import { InputForm, Table } from "@molecules";
import { DropdownForm } from "@organisms";
import { useRouter } from "next/router";

const NUM_PRODUCTS_PER_PAGE = 5;

export const HomePage = () => {
  const router = useRouter()
  const { getProducts } = useProductService();
  const { getCategories } = useCategoryService();
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Array<ProductModel>>([]);
  const [categories, setCategories] = useState<Array<string>>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('');

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => { 
    getAllProducts();
  }, [filterCategory, filterName])

  const initialize = async () => {
    const categories = await getCategories();
    categories.unshift('todos');
    setCategories(categories);
  }

  const getAllProducts = async () => {
    const products = await getProducts(filterCategory, filterName);
    setProducts(products);
  }

  const numOfPages = useMemo(() => {
    return products.length / NUM_PRODUCTS_PER_PAGE;
  }, [products]);

  const productsOnPage = useMemo(() => {
    return products.slice((page - 1) * NUM_PRODUCTS_PER_PAGE, page * NUM_PRODUCTS_PER_PAGE);
  }, [products, page]);

  return (
    <Flex mt3>
      <Row>
        <Col.C8>
          <InputForm
            value={filterName}
            onChange={e => {
              setPage(1);
              setFilterName(e);
            }}
            fs1
            placeholder="filtro..."
          >
            Filtrar por nome
          </InputForm>
        </Col.C8>
        <Col.C4>
          <DropdownForm
            value={filterCategory}
            options={categories}
            onDropdownChange={opt => {
              setPage(1);
              setFilterCategory(opt?.value || '')
            }}
          >
            Filtrar por categoria
          </DropdownForm>
        </Col.C4>
      </Row>
      {products?.length ? (
        <Table
          enablePagination
          numOfPages={numOfPages}
          page={page}
          columns={[
            { key: 'title', label: 'Nome' },
            { key: 'price', label: 'Preço', currency: true },
            { key: 'image', label: 'Imagem', customCellRender: (p) => <img src={p.image} style={{ width: 100 }} /> },
            { key: 'description', label: 'Descrição' },
          ]}
          dataSource={productsOnPage}
          onChangePage={(p) => setPage(p)}
          onRowClick={(p) => router.push(`/product/${p.id}`)}
        />
      ) : (
        <Flex.Center hFull wFull mt7>
          <Title>Nenhum item encontrado</Title>
        </Flex.Center>
      )}
    </Flex>
  );
}
