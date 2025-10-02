interface TipSelectionProps {
  selectedTip: number | null;
  customTip: string;
  onTipSelect: (value: number) => void;
  onCustomTipChange: (value: string) => void;
}

export default function TipSelection({
  selectedTip,
  customTip,
  onTipSelect,
  onCustomTipChange,
}: TipSelectionProps) {
  const tipPercentages = [5, 10, 15, 25, 50];

  return (
    <div>
      <label className="block text-sm font-semibold mb-4 text-[hsl(186,14%,43%)]">
        Select Tip %
      </label>
      <div className="grid grid-cols-3 gap-3">
        {tipPercentages.map((percentage) => (
          <button
            key={percentage}
            onClick={() => onTipSelect(percentage)}
            className={`h-12 text-xl font-bold rounded-lg transition-colors ${
              selectedTip === percentage
                ? "bg-[hsl(172,67%,45%)] text-white"
                : "bg-[hsl(183,100%,15%)] text-white hover:bg-[hsl(172,67%,45%)]"
            }`}
          >
            {percentage}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => onCustomTipChange(e.target.value)}
          className="h-12 text-center text-lg font-bold border-2 rounded-lg outline-none"
          style={{
            backgroundColor: "hsl(189,47%,97%)",
            borderColor: customTip ? "hsl(172,67%,45%)" : "hsl(185,41%,84%)",
            color: "hsl(183,100%,15%)",
          }}
        />
      </div>
    </div>
  );
}
