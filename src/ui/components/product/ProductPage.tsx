import { ProductModel } from '@api';
import { Button, Col, Flex, Row } from '@atoms';
import { Form, InputForm } from '@molecules';
import { useProductService } from '@services';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export const ProductPage = () => { 
  const [product, setProduct] = useState<ProductModel>();
  const { getProduct } = useProductService();
  const router = useRouter();

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    const { id } = router.query;
    const product = await getProduct(String(id));
    setProduct(product);
  }

  return (
    <Form>
      <Row>
        <Col.C1>
          <InputForm disabled value={product?.id}>ID</InputForm>
        </Col.C1>
        <Col.C6>
          <InputForm disabled value={product?.title}>Nome</InputForm>
        </Col.C6>
        <Col.C5>
          <InputForm disabled value={product?.price} currency>Preço</InputForm>
        </Col.C5>
      </Row>
      <Row>
        <Col.C1>
          <InputForm disabled value={product?.brand}>Marca</InputForm>
        </Col.C1>
        <Col.C6>
          <InputForm disabled value={product?.model}>Modelo</InputForm>
        </Col.C6>
        <Col.C5>
          <InputForm disabled value={product?.color}>Cor</InputForm>
        </Col.C5>
      </Row>
      <Row>
        <Col.C1>
          <InputForm disabled value={product?.category}>Categoria</InputForm>
        </Col.C1>
        <Col.C6>
          <InputForm disabled value={product?.popular ? 'Sim' : 'Não'}>Popular?</InputForm>
        </Col.C6>
        <Col.C5>
          <InputForm disabled value={product?.discount} currency>Desconto</InputForm>
        </Col.C5>
      </Row>
      <Row>
        <Col.C12>
          <InputForm disabled textarea value={product?.description}>Descrição</InputForm>
        </Col.C12>
      </Row>
      <Row>
        <Col.C12>
          <Flex.Center wFull>
            <img src={product?.image} width={300} />
          </Flex.Center>
        </Col.C12>
      </Row>
      <Flex alignEnd wFull>
        <Button onClick={() => router.back()}>Voltar</Button>
      </Flex>
    </Form>
  );
}