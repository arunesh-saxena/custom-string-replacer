const stingSub = (txt, identifier, ...args) => {
    let finalTxt = `${txt}`;
    if (typeof identifier === "object") {
      let regExp = "";
      for (const key in identifier) {
        regExp = new RegExp(`${key}`, "g");
        finalTxt = finalTxt.replace(regExp, identifier[key]);
      }
    } else {
      const regExp = (identifier && new RegExp(`${identifier}`, "g")) || null;
      if (args.length === 1) {
        finalTxt = finalTxt.replace(regExp, args[0]);
      } else if (args.length > 1) {
        args.forEach((arg, i) => {
          finalTxt = finalTxt.replace(`${identifier}`, arg);
        });
      }
    }
    return finalTxt;
  };
export default stingSub;

