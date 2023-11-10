const dosesByWeight = {
  3: {
    6: 1,
    8: 1.5,
    max: 4.5,
  },
  4: {
    6: 1.5,
    8: 2,
    max: 6,
  },
  5: {
    6: 1.75,
    8: 2.5,
    max: 7.5,
  },
  6: {
    6: 2.25,
    8: 3,
    max: 9,
  },
  7: {
    6: 2.5,
    8: 3.5,
    max: 10.5,
  },
  8: {
    6: 3,
    8: 4,
    max: 12,
  },
  9: {
    6: 3.25,
    8: 4.5,
    max: 13.5,
  },
  10: {
    6: 3.75,
    8: 5,
    max: 15,
  },
  11: {
    6: 4,
    8: 5.5,
    max: 16.5,
  },
  13: {
    6: 4.75,
    8: 6.5,
    max: 19.5,
  },
  16: {
    6: 6,
    8: 8,
    max: 24,
  },
  19: {
    6: 7,
    8: 9.5,
    max: 28.5,
  },
  22: {
    6: 8.25,
    8: 11,
    max: 33,
  },
  26: {
    6: 9.75,
    8: 13,
    max: 39,
  },
  30: {
    6: 11.25,
    8: 15,
    max: 45,
  },
};

type DosesWeight = keyof typeof dosesByWeight;

export function getDoseByWeight(weight: number) {
  const doses = dosesByWeight[weight as DosesWeight];

  if (!doses) {
    return getDoseByWeight(weight - 1);
  }

  return {
    weight,
    doses,
  };
}
