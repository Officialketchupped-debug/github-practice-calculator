"use client"
import { useState } from "react";
import { User } from "lucide-react";

export default function PeopleInput() {
  const [peopleCount, setPeopleCount] = useState<number | string>("");

  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-grey-500">
        Number of People
      </label>

      <div className="relative">

        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-400 w-5 h-5" />


        <input
          type="number"
          placeholder="0"
          value={peopleCount}
          onChange={(e) => setPeopleCount(e.target.value)}
          className={`pl-12 pr-4 text-right text-2xl font-bold rounded-lg h-12 w-full border-2
            bg-grey-50 text-green-900 placeholder:text-grey-400
            ${peopleCount ? "border-green-400" : "border-grey-200"}
            focus:outline-none focus:border-green-400`}
        />
      </div>
    </div>
  );
}
