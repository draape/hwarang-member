export const getEnumKey = (
  myEnum: any,
  enumValue?: number | string
): string => {
  if (enumValue === undefined) return "";
  let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0].toLowerCase() : "";
};
