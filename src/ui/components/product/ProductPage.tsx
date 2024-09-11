import { ProductModel } from '@api';
import { Button, Col, Flex, Row } from '@atoms';
import { Form, InputForm } from '@molecules';
import { useProductService } from '@services';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react';

export const ProductPage = () => { 
  const [product, setProduct] = useState<ProductModel>();
  const { getProduct } = useProductService();
  const router = useRouter();

  const initialize = useCallback(async () => {
    const { id } = router.query;
    if (!id) {
      return;
    }
    const product = await getProduct(String(id));
    setProduct(product);
  }, [getProduct, router.query]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <Form>
      <Row>
        <Col.C2 tablet="2">
          <InputForm disabled value={product?.id}>ID</InputForm>
        </Col.C2>
        <Col.C5 tablet="10">
          <InputForm disabled value={product?.title}>Nome</InputForm>
        </Col.C5>
        <Col.C5 tablet="12">
          <InputForm disabled value={product?.price} currency>Preço</InputForm>
        </Col.C5>
      </Row>
      <Row>
        <Col.C2 tablet="4">
          <InputForm disabled value={product?.brand}>Marca</InputForm>
        </Col.C2>
        <Col.C5 tablet="4">
          <InputForm disabled value={product?.model}>Modelo</InputForm>
        </Col.C5>
        <Col.C5 tablet="4">
          <InputForm disabled value={product?.color}>Cor</InputForm>
        </Col.C5>
      </Row>
      <Row>
        <Col.C2 tablet="4">
          <InputForm disabled value={product?.category}>Categoria</InputForm>
        </Col.C2>
        <Col.C5 tablet="4">
          <InputForm disabled value={product?.popular ? 'Sim' : 'Não'}>Popular?</InputForm>
        </Col.C5>
        <Col.C5 tablet="4">
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
            {product?.image && <Image src={product?.image} alt={product?.title || ''} width={300} height={300} />}
          </Flex.Center>
        </Col.C12>
      </Row>
      <Flex alignEnd wFull>
        <Button onClick={() => router.back()}>Voltar</Button>
      </Flex>
    </Form>
  );
}