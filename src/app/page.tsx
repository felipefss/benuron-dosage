'use client';

import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { calculateDosage } from '@/utils/calculate-dosage';

export default function Home() {
  const [dose, setDose] = useState<string | null>(null);
  const [maxDose, setMaxDose] = useState<number>(0);
  const [interval, setInterval] = useState<6 | 8>(6);
  const weightInputRef = useRef<HTMLInputElement>(null);

  async function getDosage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const weight = parseInt(weightInputRef.current?.value as string);

    const { dose, max } = calculateDosage(weight, interval);
    setDose(dose);
    setMaxDose(max);
  }

  function handleChangeInterval(event: ChangeEvent<HTMLInputElement>) {
    setInterval(parseInt(event.target.value) as 6 | 8);
  }

  return (
    <main className="flex flex-col justify-center items-center pt-32">
      <h1 className="text-4xl mb-10">Calculadora de dosagem - Benuron (40mg/ml)</h1>

      <form className="flex flex-col gap-4" onSubmit={getDosage}>
        <label className="flex flex-col items-center gap-2">
          <span>Peso da criança (em kg):</span>
          <input type="number" name="weight" className="text-black pl-1 pr-1" ref={weightInputRef} required />
        </label>

        <div className="flex flex-col gap-1 items-center">
          <span>Intervalo das dosagens:</span>

          <label>
            <input type="radio" name="interval" value={6} checked={interval === 6} onChange={handleChangeInterval} /> 6
            em 6 horas
          </label>

          <label>
            <input type="radio" name="interval" value={8} checked={interval === 8} onChange={handleChangeInterval} /> 8
            em 8 horas
          </label>
        </div>

        <button className="border-solid border-white border-2 rounded-md hover:bg-white hover:text-black" type="submit">
          Calcular
        </button>
      </form>

      {dose && (
        <>
          <section className="mt-10 border border-solid p-4">
            <h2 className="text-2xl mb-5 text-center">Resultados</h2>

            <div className="flex flex-col gap-2">
              <span>Dose a administrar (ml): {dose}*</span>
              <span>Dose máxima diária (ml): {maxDose}</span>
            </div>
          </section>
          <span className="text-xs mt-2">
            *Valores somente indicativos. Sempre consulte o seu médico para os valores corretos
          </span>
        </>
      )}
    </main>
  );
}
