const BlogTag = ({ tagValue, selected, setSelected }: BlogTagProps) => {
  const borderStyle = selected === tagValue ? "background" : "slate";
  return (
    <div
      className={`flex gap-[10px] items-center px-6 py-3.5 border-[#717171] cursor-pointer background-slate border-${borderStyle} rounded-lg`}
      onClick={() => setSelected(tagValue)}
    >
      <span className="text-muted font-semibold">{tagValue}</span>
    </div>
  );
};

export default BlogTag;
