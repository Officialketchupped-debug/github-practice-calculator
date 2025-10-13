interface PeopleInputProps {
  people: string;
  setPeople: (value: string) => void;
}

export default function PeopleInput({ people, setPeople }: PeopleInputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-grey-500">
        Number of People
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-grey-400">
          👤
        </span>
        <input
          type="number"
          placeholder="0"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className={`pl-8 w-full text-right text-2xl font-bold border-2 rounded-md outline-none bg-grey-50 text-green-900 ${
            people ? "border-green-400" : "border-grey-200"
          }`}
        />
      </div>
    </div>
  );
}
