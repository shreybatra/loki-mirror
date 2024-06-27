

interface IPointersProps {
  title: string;
  pointers: {
    icon: any;
    title: string;
    description: string;
  }[];
}
const Pointers = ({ title, pointers }: IPointersProps) => {
  return (
    <div className="flex my-16 flex-col gap-6 md:gap-12 items-center">
      <div className="flex flex-col gap-4 items-center md:gap-[12px]">
        <h3 className="text-primary-pink uppercase tracking-[2px] text-[12px] md:text-[16px] font-medium">
          Loved by Companies
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            {title}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 my-8 sm:grid-cols-2 gap-6 md:gap-8 px-4 md:px-6">
        {pointers.map((pointer) => (
          <div className="p-4 border-background">
            <div className="flex gap-2 md:gap-4 items-center">
              <div className="flex justify-center items-center w-12 background-gradient h-12 rounded-lg">
                <pointer.icon className="flex-shrink-0 w-6 h-6 text-[#fff]" />
              </div>
              <h3 className="text-lg font-semibold line-clamp-1">{pointer.title}</h3>
            </div>
            <p className="mt-3 text-muted-foreground line-clamp-2">{pointer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pointers;
