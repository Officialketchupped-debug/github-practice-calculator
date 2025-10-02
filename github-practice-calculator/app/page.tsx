'use client'
import Header from '@/app/components/Header';
import BillInput from '@/app/components/Bill-Input';
import TipSelection from '@/app/components/Tip-Selection';
import PeopleInput from '@/app/components/People-Input';

import { useState } from 'react';

export default function Home() {
  const [bill, setBill] = useState<string | number>("");
  const [people, setPeople] = useState<string | number>("");
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState<string>("");

  return (
    <>
      <Header/>
      <BillInput bill={bill} onBillChange={setBill} />
      <TipSelection
        selectedTip={selectedTip}
        customTip={customTip}
        onTipSelect={setSelectedTip}
        onCustomTipChange={setCustomTip}
      />
      <PeopleInput people={people} onPeopleChange={setPeople} />
    </>
  );
}
