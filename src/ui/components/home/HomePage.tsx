import { useEffect, useMemo, useState } from "react";
import { ProductModel } from "@api";
import { Col, Flex, Row, Title } from "@atoms"
import { useCategoryService, useProductService } from "@services";
import { InputForm, Table } from "@molecules";
import { DropdownForm } from "@organisms";
import { useRouter } from "next/router";

const NUM_PRODUCTS_PER_PAGE = 4;

const NUM_PRODUCTS_TOTAL = 150;

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
  }, [page, filterCategory, filterName]);

  const initialize = async () => {
    const categories = await getCategories();
    categories.unshift('todos');
    setCategories(categories);
  }

  const getAllProducts = async () => { 
    const products = await getProducts(page, NUM_PRODUCTS_PER_PAGE, filterCategory);
    setProducts(products?.filter((p) => {
      return !filterName || p.title?.toLowerCase().includes(filterName.toLowerCase())
    }));
  }

  const numOfPages = useMemo(() => {
    return products?.length / NUM_PRODUCTS_PER_PAGE;
  }, [products]);

  return (
    <Flex mt3>
      <Row>
        <Col.C8>
          <InputForm value={filterName} onChange={setFilterName} fs1 placeholder="filtro...">
            Filtrar por nome
          </InputForm>
        </Col.C8>
        <Col.C4>
          <DropdownForm
            value={filterCategory}
            options={categories}
            onDropdownChange={opt => setFilterCategory(opt?.value || '')}
          >
            Filtrar por categoria
          </DropdownForm>
        </Col.C4>
      </Row>
      {products?.length ? (
        <Table
          enablePagination
          numOfPages={numOfPages}
          page={0}
          columns={[
            { key: 'title', label: 'Nome' },
            { key: 'price', label: 'Preço', currency: true },
            { key: 'image', label: 'Imagem', customCellRender: (p) => <img src={p.image} style={{ width: 100 }} /> },
            { key: 'description', label: 'Descrição' },
          ]}
          dataSource={products}
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
