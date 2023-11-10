import { getDoseByWeight } from '@/utils/dosages';

interface CalculatedDoseResult {
  dose: string | null;
  max: number;
}

type Interval = 6 | 8;

export function calculateDosage(weight: number, interval: Interval): CalculatedDoseResult {
  const { doses, weight: doseWeight } = getDoseByWeight(weight);
  const dose = doses[interval];

  if (weight === doseWeight) {
    return {
      dose: dose.toString(),
      max: doses.max,
    };
  }

  const result = ((weight * dose) / doseWeight).toFixed(2);

  if (['0', '5'].includes(result.slice(-1))) {
    return {
      dose: result,
      max: doses.max,
    };
  }

  return {
    dose: parseFloat(result).toFixed(1),
    max: doses.max,
  };
}
