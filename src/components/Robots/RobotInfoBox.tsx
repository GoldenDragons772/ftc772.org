type QuickFact = {
  label: string;
  value: string;
};

type ScheduleItem = {
  title: string;
  detail: string;
};

type RobotInfoBoxProps = {
  quickFacts: QuickFact[];
  schedule: ScheduleItem[];
  abilities: string[];
};

const RobotInfoBox = ({ quickFacts, schedule, abilities }: RobotInfoBoxProps) => {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-yellow">
            Quick Facts
          </div>
          <div className="space-y-2">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-center gap-2">
                <span className="rounded-sm bg-yellow px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black">
                  {fact.label}
                </span>
                <span className="text-sm text-white/80">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-yellow">
            Competition History
          </div>
          <div className="space-y-2">
            {schedule.map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-1.5 mb-2">
                <span className="rounded-[8px] metallic-yellow px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black border border-[rgba(255,255,255,0.4)] shadow-[0_0_10px_rgba(255,186,36,0.2)]">
                  {item.title}
                </span>
                <span className="text-xs text-white/80">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-yellow">
          Robot Abilities
        </div>
        <ul className="space-y-1 text-sm text-white/80">
          {abilities.map((ability) => (
            <li key={ability} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-yellow" />
              <span>{ability}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RobotInfoBox;
