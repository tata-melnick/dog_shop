const rndStr = (length?: number) => {
  let rnd = "";
  while (rnd.length < (length || 4)) rnd += Math.random().toString(36).substring(2);
  return rnd.substring(0, length || 4);
};

export default rndStr;
