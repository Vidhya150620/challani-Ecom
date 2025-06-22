

export const Counts = () => {
  return (
    <>
      <section className="flex justify-around mt-6 max-w-[1400px] mx-auto">
        <div className="text-center">
          <span className="text-primary text-[35px]">100</span> <br />
          <span className="text-[14px] text-gray-500">Collection</span>
        </div>
        <div className="text-center">
          <span className="text-primary text-[35px]">1000</span> <br />
          <span className="text-[14px] text-gray-500">Trusted Customers</span>
        </div>
        <div className="text-center">
          <span className="text-primary text-[35px]">2000</span> <br />
          <span className="text-[14px] text-gray-500">Designs</span>
        </div>
      </section>
      <hr className="border-gray-200 border-t-2 w-full mt-5" />
    </>
  );
};
