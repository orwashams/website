type Props = {
  title: string;
  subtitle: string;
  time: string;
  text: string;
  list: string[];
};

export const ProcessCard = (props: Props) => {
  return (
    <div className="w-full  border border-light/30 text-light/70 bg-dark shadow-xl shadow-light/5 p-8 pt-4 pr-4  gap-2  flex flex-col">
      <div className="  flex justify-end ">
        <div className="border border-light/30 bg-light/5 p-1 uppercase">
          <p>{props.time}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <p className="opacity-50 text-sm uppercase">{props.subtitle}</p>
          <h3 className="uppercase text-3xl">{props.title}</h3>
        </div>
        <p className="text-lg">{props.text}</p>
        <ul className="list-disc list-inside flex flex-col gap-2">
          {props.list.map((item, index) => (
            <li key={index + item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
