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
    <div className="rounded-2xl p-6 space-y-6 bg-green-900">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-white font-semibold">Tip Amount</div>
          <div className="text-sm text-grey-400">/ person</div>
        </div>
        <div className="text-3xl font-bold text-green-400">
          ${tipAmount.toFixed(2)}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-white font-semibold">Total</div>
          <div className="text-sm text-grey-400">/ person</div>
        </div>
        <div className="text-3xl font-bold text-green-400">
          ${total.toFixed(2)}
        </div>
      </div>

      <button
        onClick={onReset}
        disabled={!hasValues}
        className={`w-full h-12 text-xl font-bold rounded-lg transition-all ${
          hasValues
            ? "opacity-100 hover:opacity-90 bg-green-400 text-green-900"
            : "opacity-25 bg-green-400 text-green-900"
        }`}
      >
        RESET
      </button>
    </div>
  );
}
