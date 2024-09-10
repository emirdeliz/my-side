import { useState } from "react";
import { Product } from "@api";
import { Button, Col, Flex, Row, Title } from "@atoms";
import { Form, InputForm } from "@molecules";

interface ProductFormProps {
  initialData?: Product;
  onSave: (product: Product) => void;
}

export const ProductForm = ({ initialData, onSave }: ProductFormProps) => { 
  const [product, setProduct] = useState<Product>(initialData || {});
  return (
    <Form>
      <Title mb5 fs3>Produto</Title>
      <Row>
        <Col.C12>
          <InputForm
            value={product.name}
            onChange={e => setProduct({ ...product, name: e as string })}
          >Nome</InputForm>
        </Col.C12>
      </Row>
      <Row>
        <Col.C12>
          <InputForm
            value={product.price}
            onChange={e => setProduct({ ...product, price: (e ? e as number : undefined)})}
          >Preço Unitário</InputForm>
        </Col.C12>
      </Row>
      <Row>
        <Col.C12>
          <InputForm
            value={product.description}
            onChange={e => setProduct({ ...product, description: e as string })}
          >Descrição</InputForm>
        </Col.C12>
      </Row>
      <Flex alignEnd wFull>
        <Button onClick={() => onSave(product)}>Salvar</Button>
      </Flex>
    </Form>
  );
}