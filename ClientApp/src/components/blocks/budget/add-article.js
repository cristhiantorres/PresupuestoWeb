import { FormInput, FormSelect } from 'components/elements/forms';
import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import { formatMoney } from 'utils/format-util';
import { useProducts } from 'hooks/product-hook ';
import { ADD_TO_BUDGET } from 'reducer';
import { useStateValue } from 'state-provider';

const AddArticle = ({ control, errors }) => {
  const [{ budget }, dispatch] = useStateValue();
  const [data] = useProducts();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const total = budget.items.reduce((prev, curr) => prev + curr.total, 0);
  const handleChange = (e) => {
    const product = data.find((item) => {
      return item.id === e.value;
    })
    if (product) {
      setProduct(product);
      setPrice(product.price || price);
    }
  }

  const addToBudget = () => {
    const item = {
      id: product.id,
      description: product.name,
      price,
      quantity,
      total: price * quantity,
    };
    dispatch({
      type: ADD_TO_BUDGET,
      item,
    });
  }
  return (
    <Card>
      <CardBody>
        <Row>
          <Col md={7}>
            <Row>
              <Col md={12}>
                <FormSelect
                  handleChange={handleChange}
                  control={control}
                  id="articulo"
                  label="Articulo"
                  value={product?.id}
                  options={data.map((item) => {
                    return {
                      label: `${item.id} | ${item.name}`,
                      value: item.id,
                    }
                  })}
                  error={errors}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  control={control}
                  id="precio"
                  label="Precio"
                  type="amount"
                  value={price}
                  handleChange={(e) => setPrice(e)}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  id="cantidad"
                  label="Cantidad"
                  type="number"
                  value={quantity}
                  handleChange={(e) => setQuantity(e.target.value)}
                />
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={12} className="pb-4">
                <b className="text-total">Total: </b>
                <span className="total">{formatMoney(total)}</span>
              </Col>
              <Col md={12}>
                <Button color="primary" block onClick={() => addToBudget() }>Agregar</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
};

export default AddArticle;
