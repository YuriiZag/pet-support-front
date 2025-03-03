const birthDayNormalizer = (date: string | undefined): string => {
      if (date) {
        const splitedDate: string[] = date.split("-");
        const normalizedDate: string =
          splitedDate[2] + "." + splitedDate[1] + "." + splitedDate[0];
    
        return normalizedDate;
      }
      return "birthday error"
  };

export default birthDayNormalizer