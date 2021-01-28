import React, { useState } from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { useCustomers } from 'hooks/customer-hook';
import { FormSelect } from 'components/elements/forms';
import { useStateValue } from 'state-provider';
import { CLEAR_BUDGET, SET_CUSTOMER } from 'reducer';
import { addBudget } from 'api/budget-api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { getBudgetTotal } from 'utils/budget-util';

const AddCustomer = ({ control }) => {
  const [customers] = useCustomers([]);
  const [{ budget }, dispatch] = useStateValue();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const total = getBudgetTotal(budget);
  const history = useHistory();

  const onChange = (e) => {
    dispatch({
      type: SET_CUSTOMER,
      item: e.value,
    });
  };

  const clearBudget = () => {
    dispatch({
      type: CLEAR_BUDGET
    });
  };

  const onCreateBudget = () => {
    setButtonDisabled(true);
    if (budget.items.length === 0) {
      toast.error('No tiene detalles.');
      setButtonDisabled(false);
      return;
    }

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
    addBudget(data).then((res) => {
      if (res === 0) {
        toast.error('No se guardo el presupuesto. Ocurrio un error');
      } else {
        clearBudget();
        history.push(`/presupuestos/ver/${res}`);
      }
      setButtonDisabled(false);
    }).catch((err) => {
      toast.error('No se guardo el presupuesto. Ocurrio un error');
      setButtonDisabled(false);
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
            <Button className="my-3" disabled={buttonDisabled} onClick={() => onCreateBudget()}>
              {buttonDisabled ? 'Cargando...' : 'Generar'}
            </Button>
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
