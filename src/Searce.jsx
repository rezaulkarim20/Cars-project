const Searce = () => {
  return (
    <div className="flex gap-3 items-center  ">
      <input
        className="pr-16 py-1 border outline-none rounded-md   "
        type="text"
        placeholder=" Search cars....."
      />
      <input type="checkbox" name="" id="" />
      <span className="font-semibold"> Show Premium Only</span>
    </div>
  );
};

export default Searce;
