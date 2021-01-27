import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Loader } from 'components/elements/status';
import { BudgetPdf } from 'components/pdf';
import { useBudgetById } from 'hooks/budget-hook';
import React from 'react';
import { useParams } from 'react-router-dom';

const BudgetPdfView = () => {
  const { id } = useParams();
  const [data, isLoading] = useBudgetById(id);
  return (
    !isLoading && data ? (
      <>
        {/* <PDFDownloadLink document={ <BudgetPdf />} fileName={`presupuesto-${data.id}.pdf`}>
          {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar ahora!')}
        </PDFDownloadLink> */}
        <PDFViewer width="100%" height="500px">
          <BudgetPdf budget={data} />
        </PDFViewer>
      </>
    ) : (
      <Loader />
    )
  );
};

export default BudgetPdfView;
