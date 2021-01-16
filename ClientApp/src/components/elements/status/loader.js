import React from 'react';
import { PulseLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='py-5 mx-auto text-center'>
      <PulseLoader size={15} color={'#00a9e4'} loading={true} />
    </div>
  );
};

export default Loader;
