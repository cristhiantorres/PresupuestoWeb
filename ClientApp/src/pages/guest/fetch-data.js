import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [forecasts, setForecasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const populateWeatherData = async () => {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    setIsLoading(true);
    populateWeatherData().then((res) => {
      setForecasts(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <table className='table table-striped' aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading ? (
          forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )
        ) : (
          <p>Loading...</p>
        )}
      </tbody>
    </table>
   );
};

export default FetchData;
