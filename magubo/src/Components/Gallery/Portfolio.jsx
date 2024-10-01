import "./Portfolio.css";
import { useState } from "react";
import {
  backupSystemServices,
  solarSystemServices,
  offGridSystemServices,
  businessPackages,
  phaseSolarSystemServices
} from "../../Pages/Services/individual-services";

const allServices = [
  ...backupSystemServices,
  ...solarSystemServices,
  ...offGridSystemServices,
  ...businessPackages,
  ...phaseSolarSystemServices,
];

const SolarSavingsCalculator = () => {
  const [area, setArea] = useState('');
  const [electricityCost, setElectricityCost] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [result, setResult] = useState('');

  const calculateSavings = () => {
    if (selectedProduct) {
      const service = allServices.find((service) => service.id === Number(selectedProduct));
      const savingsPercentage = parseInt(service.save, 10);
      const monthlySavings = (electricityCost * (savingsPercentage / 100)).toFixed(2);
      setResult(`You could save ZAR ${monthlySavings} per month with the selected product.`);

      // Reset input values after calculation
      setArea('');
      setElectricityCost('');
      setSelectedProduct('');
    } else {
      setResult("Please select a product.");
    }
  };

  const isButtonDisabled = !area || !electricityCost || !selectedProduct;

  return (
    <div className="savings-container">
      <div className="main-form">
        <p>Let Us Help you Save</p>
        <div className="vertical-bar"></div>
        <h1>Solar Savings Calculator</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          
            <div className="input-container">
  <input
    type="text"
    placeholder="Enter your City"
    value={area}
    onChange={(e) => setArea(e.target.value)}
    required
  />
</div>
<div className="input-container">
  <input
    type="number"
    value={electricityCost}
    onChange={(e) => setElectricityCost(e.target.value)}
    required
    placeholder="Enter monthly spend on Electricity"
  />
</div>




            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              required
            >
              <option value="">Select a Product of Interest</option>
              {allServices.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.serviceName}
                </option>
              ))}
            </select>
          

          <button
            type="button"
            onClick={calculateSavings}
            disabled={isButtonDisabled}
          >
            Calculate Savings
          </button>
        </form>

        <h2 id="result">{result}</h2>
      </div>
      <div className="image">
      </div>
    </div>
  );
};

export default SolarSavingsCalculator;
