const Success = () => {
  return (
    <div className="bg-[#FFEFEE] min-h-[180px] font-poppins mb-10">
      <div className="box relative w-10/12 mx-auto">
        <div className="grid grid-cols-4 gap-4 bg-[#FFF] shadow-md h-[150px] absolute w-full top-24 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">536+</h1>
            <p className="text-sm">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">200+</h1>
            <p className="text-sm">Awards Won</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">670+</h1>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">200+</h1>
            <p className="text-sm">Dedicated Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
