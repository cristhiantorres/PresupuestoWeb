import { Messages } from 'constant';
import * as yup from 'yup';

const Customer = {
  schema: yup.object().shape({
    documento: yup.string().required(Messages.REQUIRED),
    nombre: yup.string().required(Messages.REQUIRED),
    apellido: yup.string().required(Messages.REQUIRED),
    sexo: yup.string().required(Messages.REQUIRED).oneOf(['M', 'F'], Messages.ONE_OF),
    direccion: yup.string().required(Messages.REQUIRED),
    telefono: yup.string().required(Messages.ONE_OF),
    email: yup.string().email(Messages.EMAIL_FORMAT),
    fecha_nacimiento: yup.date(),
  }),
};

export default Customer;
