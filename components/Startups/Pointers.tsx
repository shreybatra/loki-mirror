interface IPointersProps {
  title: string;
  pointers: {
    title: string;
    description: string;
  }[];
}
const Pointers = ({ title, pointers }: IPointersProps) => {
  return (
    <div>
      <h3 className="text-3xl  sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h3>
      <div className="container grid grid-cols-1 my-16 sm:grid-cols-2 gap-14 px-4 md:px-6 ">
        {pointers.map((pointer) => (
          <div
            className="flex flex-col items-start tracking-tight border-background p-6 space-y-6"
            key={pointer.title}
          >
            <h3 className="text-xl font-bold">{pointer.title}</h3>
            <p className="text-muted-foreground">{pointer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pointers;
