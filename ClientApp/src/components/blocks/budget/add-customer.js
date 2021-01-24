import React from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { useCustomers } from 'hooks/customer-hook';
import { FormSelect } from 'components/elements/forms';
import { useStateValue } from 'state-provider';
import { SET_CUSTOMER } from 'reducer';
import { addBudget } from 'api/budget-api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const AddCustomer = ({ control }) => {
  const [customers] = useCustomers([]);
  const [{ budget }, dispatch] = useStateValue();
  const total = budget.items.reduce((prev, curr) => prev + curr.total, 0);
  const history = useHistory();

  const onChange = (e) => {
    dispatch({
      type: SET_CUSTOMER,
      item: e.value,
    });
  };

  const onCreateBudget = () => {
    const data = {
      customerId: budget.customer,
      total,
      details: budget.items.map((item) => {
        return {
          productId: item.id,
          description: item.description,
          price: item.price,
          total: item.total,
          quantity: parseInt(item.quantity),
        }
      })
    }

    console.log('data', data);
    addBudget(data).then((res) => {
      if (res === 0) {
        toast('No se guardo el presupuesto. Ocurrio un error');
      } else {
        history.push(`/presupuestos/ver/${res}`);
      }
    }).catch((err) => {
      toast('No se guardo el presupuesto. Ocurrio un error');
    });
  }

  return (
    <Card>
      <CardBody>
        <Row>
          <Col md={12}>
            <FormSelect
              label="Cliente"
              id="cliente"
              handleChange={onChange}
              value={budget.customer}
              control={control}
              options={customers.map((item) => {
                return {
                  label: `${item.firstName} ${item.lastName} | ${item.documentNumber}`,
                  value: `${item.id}`
                }
              })}
            />
          </Col>
          <Col md={12}>
            <Button className="my-3" onClick={() => onCreateBudget()}>Generar</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

AddCustomer.propTypes = {
  control: PropTypes.string,
  errors: PropTypes.array,
};

export default AddCustomer;
