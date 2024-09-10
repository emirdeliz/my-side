export const updateArray = <T>(target: Array<T>, newData: T, index: number) => {
	const result = [
		...target.slice(0, index),
		newData,
		...target.slice(index + 1),
	];
	return result;
};
export const updateItemInArray = <
  T,
  U extends keyof T,
  V extends keyof T
>(params: {
  array: Array<T>;
  testKey: keyof T;
  testValue: T[U];
  updateKey: keyof T;
  updateValue: T[V];
  testFailValue?: T[V];
}) => {
  const {
    array,
    testKey,
    testValue,
    updateKey,
    updateValue,
    testFailValue,
  } = params;
  return [...array].map((item) => {
    if (item[testKey] === testValue) {
      item[updateKey] = updateValue;
    } else if (testFailValue !== undefined) {
      item[updateKey] = testFailValue;
    }
    return item;
  });
};

export const sortArrayByDate = <T>(array: Array<T>, dateKey: keyof T = 'createdAt' as keyof T) => {
  return array.sort((a, b) => {
    const dateA = new Date(String(a[dateKey]));
    const dateB = new Date(String(a[dateKey]));
    return dateA.getTime() - dateB.getTime();
  });
}

export const checkIfArrayHasNullEmptyOrUndefinedValues  = (values?: Array<String|Number|Boolean|Date|null|undefined> ) => {
  if (values) {
    return values.some(value => {
      if (value === null || value === undefined || value === '') {
        return true;
      }
      return false;
    });
  }
  return false;
}
