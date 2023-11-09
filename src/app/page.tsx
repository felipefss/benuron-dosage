// mg/kg dosage based on interval
const doseByInterval = {
  6: 15,
  8: 20,
};

export default function Home() {
  const result = {
    dose: null,
  };

  async function calculateDosage(formData: FormData) {
    'use server';

    const weight = parseInt(formData.get('weight') as string);
    const interval = parseInt(formData.get('interval') as string);
  }

  return (
    <main className="flex flex-col justify-center items-center pt-32">
      <h1 className="text-4xl mb-10">Calculadora de dosagem - Benuron (40mg/ml)</h1>

      <form className="flex flex-col gap-4" action={calculateDosage}>
        <label className="flex flex-col items-center gap-2">
          <span>Peso da criança (em kg):</span>
          <input type="number" name="weight" className="text-black pl-1 pr-1" required />
        </label>

        <div className="flex flex-col gap-1 items-center">
          <span>Intervalo das dosagens:</span>

          <label>
            <input type="radio" name="interval" value={6} defaultChecked={true} /> 6 em 6 horas
          </label>

          <label>
            <input type="radio" name="interval" value={8} /> 8 em 8 horas
          </label>
        </div>

        <button className="border-solid border-white border-2 rounded-md hover:bg-white hover:text-black" type="submit">
          Calcular
        </button>
      </form>

      {result.dose && (
        <section className="mt-10 border border-solid p-4">
          <h2 className="text-2xl mb-5 text-center">Resultados</h2>

          <div className="flex flex-col gap-2">
            <span>Dose a administrar (ml): {result.dose}</span>
          </div>
        </section>
      )}
    </main>
  );
}
