/*
* Application to demostrate Javascript switch statement syntax.
* Application returns the sum of two time values with an appropriate description.
* Written by Ose Ogun, Apr-2019.
*/

// Declare app object
const app = {};

// Check if time value is a positive number
app.valueValidator = (value)=>{

  let response = '';

  if (value < 0){
    response = false;
    return response;
  } else {
    return value;
  }

};

// Check if label value belongs to predifined set of labels
app.labelValidator = (label)=>{

  let response = '';

  // Define full set of acceptable labels
  let labels = ['second','seconds', 'minute','minutes', 'hour', 'hours', 'day', 'days'];

  // If label is not included defined list of labels return false
  if (labels.indexOf(label) > -1){
    return label;
  } else {
    response = false;
    return response;
  }

};

// Check accuracy of value and label
app.accuracyChecker = (value,label)=>{

  // Ensure the combination of value and label is valid
  // e.g. No singular label for value greater than 1 & vice versa
  if (value > 1 && label === 'second') {
    return false;
  }
  else if (value === 1 && label !== 'second' && label.indexOf('s') > -1) {
    return false;
  }
  else {
    return true;
  }

};

// Convert all time to seconds
app.convertToSeconds = (value,label)=>{

  let secondsValue = 0;

  switch (label) {
    case 'minute':
      secondsValue = value * 60;
      break;

    case "minutes":
      secondsValue = value * 60;
      break;

    case 'hour':
      secondsValue = value * 60 * 60;
      break;

    case 'hours':
      secondsValue = value * 60 * 60;
      break;

    case 'day':
      secondsValue = value * 24 * 60 * 60;
      break;

    case 'days':
      secondsValue = value * 24 * 60 * 60;
      break;

    default:
      secondsValue = value * 1;
  }

  return secondsValue;
};

// Format the response properly
app.formatResponse = (value,sum)=>{

  const dayFactor    = 24 * 60 * 60;
  const hourFactor   = 60 * 60;
  const minuteFactor = 60;

  switch (true) {

    case ((value/dayFactor) >= 1):
          sum['value'] = value/dayFactor;
          sum['label'] = sum['value'] > 1 ? 'Days' : 'Day';
      break;

    case ((value/hourFactor >=1) && (value/hourFactor < dayFactor)):
          sum['value'] = value/dayFactor;
          sum['label'] = sum['value'] > 1 ? 'Hours' : 'Hour';
      break;

    case ((value/minuteFactor >=1) && (value/minuteFactor < hourFactor)):
          sum['value'] = value/minuteFactor;
          sum['label'] = sum['value'] > 1 ? 'Minutes' : 'Minute';
      break;

    default:
          sum['value'] = value;
          sum['label'] = sum['value'] > 1 ? 'Seconds' : 'Second';
  }

    return sum;

};

// Main function which sums two valid time values
app.timeAdder = (value1, label1, value2, label2)=>{

  // Initialize sum
  let sum = [];

  // Validate time values are positive integers
  let timeOne = app.valueValidator(value1);
  let timeTwo = app.valueValidator(value2);

  // Validate label values are one of
  let labelOne = app.labelValidator(label1);
  let labelTwo = app.labelValidator(label2);

  // Ensure the combination of value and label make sense
  if(app.accuracyChecker(timeOne, labelOne) && app.accuracyChecker(timeTwo, labelTwo)){

    // Convert values to seconds and sum them;
    let value = app.convertToSeconds(timeOne,labelOne) + app.convertToSeconds(timeTwo,labelTwo);

    // Return sum in appropriate format and description
    return app.formatResponse(value,sum);

  } else {
    sum = 'false';
  }

  // Return sum
  return sum;

};

// Initialize the app
app.init = (value1, label1, value2, label2)=>{

    // Print result to console
  console.log(app.timeAdder(value1, label1, value2, label2));

};

// Demonstrations

// 1) Wrong parameters
// '1 seconds' is not acceptable
app.init(1,'seconds',1,'hour');

// Wrong parameters
// '1 hours' is not acceptable
app.init(1,'second',1,'hours');

// 2) Correct parameters
// 12 hours + 12 hours = 1 Day
app.init(12, 'hours', 12, 'hours');
