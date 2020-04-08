// const data = {
//     region: {
//     name: "Africa",
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71
//     },
//     periodType: "months",
//     timeToElapse: 58,
//     reportedCases: 674,
//     population: 66622705,
//     totalHospitalBeds: 1380614
//     }

const convertToDays = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'days':
      return timeToElapse;
    case 'weeks':
      return timeToElapse * 7;
    case 'months':
      return timeToElapse * 30;
    default:
      return timeToElapse;
  }
};

const covid19ImpactEstimator = (data) => {
  const outputData = {
    data: {},
    impact: {},
    severeImpact: {}
  };

  const { timeToElapse, reportedCases, periodType } = data;
  const { impact, severeImpact } = outputData;
  impact.currentlyInfected = reportedCases * 10;
  severeImpact.currentlyInfected = reportedCases * 50;
  const days = convertToDays(periodType, timeToElapse);
  const factor = Math.trunc(days / 3);
  impact.infectionsByRequestedTime = impact.currentlyInfected * 2 ** factor;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 2 ** factor;
  return outputData;
};

// covid19ImpactEstimator(data)
export default covid19ImpactEstimator;
