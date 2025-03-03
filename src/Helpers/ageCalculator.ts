function ageCalc(birthDate: string | null | undefined
): number | undefined {
  if (birthDate) {
    const dateArray: string[] = birthDate.split(".");
    const petAliveDays: number =
      Number(dateArray[0]) +
      (Number(dateArray[1]) - 1) * 30.437 +
      (Number(dateArray[2]) - 1) * 365.25;
    const now: Date = new Date();
    const age: number =
      (Number(now.getDay()) +
        (Number(now.getMonth()) - 1) * 30.437 +
        (Number(now.getFullYear()) - 1) * 365.25 -
        petAliveDays) /
      365;
    return Math.floor(age);
  }
}

export default ageCalc;
