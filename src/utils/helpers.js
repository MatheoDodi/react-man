export const checkResponsesForErrors = (...responses) => {
  const errorsFound = responses.reduce((errorArray, response) => {
    if (response.error) {
      errorArray.push(response.error);
      return errorArray;
    }

    return errorArray;
  }, []);

  return errorsFound;
};
