export const filterObject = (obj, fieldName) => {
  let returnObj = obj.filter((itm) => itm.name === fieldName);
  return returnObj[0];
};
