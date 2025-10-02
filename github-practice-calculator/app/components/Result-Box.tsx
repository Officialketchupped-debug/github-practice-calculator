interface ResultBoxProps {
  tipAmount: number;
  total: number;
  hasValues: boolean;
  onReset: () => void;
}

export default function ResultBox({
  tipAmount,
  total,
  hasValues,
  onReset,
}: ResultBoxProps) {
  return (
    <div className="rounded-2xl p-6 space-y-6 bg-[hsl(183,100%,15%)]">

      <div className="flex justify-between items-center">
        <div>
          <div className="text-white font-semibold">Tip Amount</div>
          <div className="text-sm text-[hsl(184,14%,56%)]">/ person</div>
        </div>
        <div className="text-3xl font-bold text-[hsl(172,67%,45%)]">
          ${tipAmount.toFixed(2)}
        </div>
      </div>


      <div className="flex justify-between items-center">
        <div>
          <div className="text-white font-semibold">Total</div>
          <div className="text-sm text-[hsl(184,14%,56%)]">/ person</div>
        </div>
        <div className="text-3xl font-bold text-[hsl(172,67%,45%)]">
          ${total.toFixed(2)}
        </div>
      </div>


      <button
        onClick={onReset}
        className={`w-full h-12 text-xl font-bold rounded-lg transition-all ${
          hasValues ? "opacity-100 hover:opacity-90" : "opacity-25"
        }`}
        style={{
          backgroundColor: "hsl(172,67%,45%)",
          color: "hsl(183,100%,15%)",
        }}
        disabled={!hasValues}
      >
        RESET
      </button>
    </div>
  );
}
