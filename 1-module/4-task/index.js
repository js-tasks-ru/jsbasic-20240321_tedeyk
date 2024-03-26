function checkSpam(str) {
  let checkOne ='1xBet'.toLowerCase();
  let checkTwo ='XXX'.toLowerCase();

  str = str.toLowerCase();

  return (str.includes(checkOne) || str.includes(checkTwo));
}
