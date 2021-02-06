import React from 'react';
import { PuffLoader } from 'react-spinners';
import { Button } from 'reactstrap';

const ButtonLoading = (props) => {
  const { isLoading, text } = props;
  return (
    <Button {...props} disabled={isLoading} className="d-flex justify-content-center">
       {isLoading ? <PuffLoader size={25} color="#fff" /> : text}
    </Button>
  );
};

export default ButtonLoading;
