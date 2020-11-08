const CustomerInputs = [
  {
    name: 'documento',
    label: 'Nro. Documento',
    type: 'text',
  },
  {
    name: 'nombre',
    label: 'Nombre',
    type: 'text',
  },
  {
    name: 'apellido',
    label: 'Apellido',
    type: 'text',
  },
  {
    name: 'sexo',
    label: 'Sexo',
    type: 'select',
    options: [
      {
        label: 'Masculino',
        value: 'M',
      },
      {
        label: 'Femenino',
        value: 'F',
      },
    ],
  },
  {
    name: 'direccion',
    label: 'Direccion',
    type: 'text',
  },
  {
    name: 'telefono',
    label: 'Telefono',
    type: 'number',
  },
  {
    name: 'email',
    label: 'Correo Electronico',
    type: 'email',
  },
  {
    name: 'fecha_nacimiento',
    label: 'Fecha Nacimiento',
    type: 'date',
  },
];

export default CustomerInputs;
