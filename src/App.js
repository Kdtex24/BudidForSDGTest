import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import covid19ImpactEstimator from './estimator'
import ModalComponent from './components/Modal'



function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
      const data = {
        region: {
          name: "Africa",
          avgAge: 19.7,
          avgDailyIncomeInUSD: 4,
          avgDailyIncomePopulation: 0.73,
        },
        periodType: periodType,
        timeToElapse: parseInt(timeToElapse),
        reportedCases: parseInt(reportedCases),
        population: parseInt(population),
        totalHospitalBeds: parseInt(totalHospitalBeds),
    }
    setModalData(covid19ImpactEstimator(data))
    
    
  }
  const [population, setPopulation] = useState(0)
  const [timeToElapse, setTimeToElapse] = useState(0)
  const [reportedCases, setReportedCases] = useState(0)
  const [totalHospitalBeds, setTotalHospitalBeds] = useState(0)
  const [periodType, setPeriodType] = useState('days')
  const [modalData, setModalData] = useState(null)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
    <div className='container'>
      <div className="d-flex flex-column justify-content-center">
        <header className='text-center'>
          <h1>Novelty COVID-19 Infections Estimator</h1>
        </header>
        <Form onSubmit={handleSubmit}>
          <div className='form-row'>
          <Form.Group className='col-md-6'>
            <label htmlFor="population">Population</label>
            <input
              type="number"
              className="form-control"
              id="population"
              aria-describedby="population"
              placeholder="Enter Population"
              data-population
              required
              onChange={(e) => setPopulation(e.target.value)}
            />
          </Form.Group>

          <div className="form-group col-md-6">
            <label htmlFor="timeToElapse">Time To Elapse</label>
            <input
              type="number"
              className="form-control"
              id="timeToElapse"
              aria-describedby="timeToElapse"
              placeholder="Time to Elapse"
              data-time-to-elapse
              required
              onChange={(e) => setTimeToElapse(e.target.value)}

            />
          </div>
          </div>

          <div className='form-row '>
          <div className="form-group col-md-6">
            <label htmlFor="reportedCases">Reported Cases</label>
            <input
              type="number"
              className="form-control"
              id="reportedCases"
              aria-describedby="reportedCases"
              placeholder="Reported Cases"
              data-reported-cases
              required
              onChange={(e) => setReportedCases(e.target.value)}

            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="totalHospitalBeds">Hospital Beds</label>
            <input
              type="number"
              className="form-control"
              id="totalHospitalBeds"
              aria-describedby="totalHospitalBeds"
              placeholder="Total Hospital Beds"
              data-total-hospital-beds
              required
              onChange={(e) => setTotalHospitalBeds(e.target.value)}

            />
          </div>
          <Form.Group controlId="periodType" className='col-md-3'>
            <Form.Label>Period Type</Form.Label>
            <Form.Control as="select" required onChange={(e) => setPeriodType(e.target.value)} >
              <option data-period-type value='days'>Days</option>
              <option data-period-type value='weeks'>Weeks</option>
              <option data-period-type value='months'>Months</option>
            </Form.Control>
          </Form.Group>
          </div>
          <button type="submit" data-go-estimate className="btn btn-primary" onClick={handleShow} style={{backgroundColor:'#046B99', borderColor:'#046B99'}}>
            Submit
          </button>
        </Form>
        <ModalComponent  show={show} handleClose={handleClose} data={modalData}/>
      </div>
      </div>
    </>
  )
}

export default App
