interface PeopleInputProps {
  people: string;
  setPeople: (value: string) => void;
}

export default function PeopleInput({ people, setPeople }: PeopleInputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-[hsl(186,14%,43%)]">
        Number of People
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[hsl(184,14%,56%)]">
          👤
        </span>
        <input
          type="number"
          placeholder="0"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="pl-8 w-full text-right text-2xl font-bold border-2 rounded-md outline-none"
          style={{
            backgroundColor: "hsl(189,47%,97%)",
            borderColor: people ? "hsl(172,67%,45%)" : "hsl(185,41%,84%)",
            color: "hsl(183,100%,15%)",
          }}
        />
      </div>
    </div>
  );
}
