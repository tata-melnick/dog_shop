const getIssues = (num: number, isSearch?: boolean): string => {
  const lastNum = num % 10;
  if (isSearch && lastNum === 1) return "найден";
  if (isSearch && lastNum !== 1) return "найдено";
  if (lastNum === 1) return "товар";
  if (lastNum > 1 && lastNum < 5) return "товара";
  if (lastNum > 4 || !num || (num > 10 && num < 20)) return "товаров";
  return "";
};

export default getIssues;
