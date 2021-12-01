export const getPropertyWithDefault = (propertyName, defaultValue, obj) => {
  return obj[propertyName] || defaultValue;
};

export const someOtherFunction = () => {
  return 3;
};

// nyc package for summary how much is tested
