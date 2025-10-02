"use client"
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import BillInput from "@/app/components/Bill-Input";
import TipSelection from "@/app/components/Tip-Selection";
import PeopleInput from "@/app/components/People-Input";
import ResultBox from "@/app/components/Result-Box";
import { calculateTip } from "@/utils/Calculation";

export default function App() {
  const [bill, setBill] = useState("");
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const billAmount = parseFloat(bill) || 0;
    const peopleCount = parseInt(people) || 1;
    const tipPercent = selectedTip || parseFloat(customTip) || 0;

    const { tipAmount, total } = calculateTip(billAmount, peopleCount, tipPercent);
    setTipAmount(tipAmount);
    setTotal(total);
  }, [bill, selectedTip, customTip, people]);

  const handleReset = () => {
    setBill("");
    setSelectedTip(null);
    setCustomTip("");
    setPeople("");
    setTipAmount(0);
    setTotal(0);
  };

  return (
    <div className="min-h-screen bg-[hsl(185,41%,84%)]">
      <div className="container max-w-4xl mx-auto px-4 py-1">
        <Header />
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">

            <div className="space-y-1">
              <BillInput bill={bill} setBill={setBill} />
              <TipSelection
                selectedTip={selectedTip}
                customTip={customTip}
                onTipSelect={(p) => {
                  setSelectedTip(p);
                  setCustomTip("");
                }}
                onCustomTipChange={(v) => {
                  setCustomTip(v);
                  setSelectedTip(null);
                }}
              />
              <PeopleInput people={people} setPeople={setPeople} />
            </div>

            <ResultBox
              tipAmount={tipAmount}
              total={total}
              hasValues={!!(bill || selectedTip || customTip || people)}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
