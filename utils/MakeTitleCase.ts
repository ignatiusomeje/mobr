export default function titleCase(str: string) {
    
  // str = str?.toLowerCase();
  let strArray: string[] = [];
  strArray = str?.split(" ");
  for (let i = 0; i < strArray?.length; i++) {
    if (i === 0) {
      strArray[0] = strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1);
    } else {
      strArray[i] = strArray[i];
    }
  }
  return strArray?.join(" ");
}
