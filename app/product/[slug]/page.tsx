import ProdunctDeatailsCarausel from "@/app/components/ProdunctDeatailsCarausel";
import Wrapper from "@/app/components/Wrapper";

function ProductDetails() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProdunctDeatailsCarausel />
          </div>
          {/* left column End */}
          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Jordan retro 6 g
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">Golf shoe</div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;19,695.00
              </p>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* product size range start */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}
              <div className="grid grid-cols-3 gap-2">
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
              </div>
            </div>
            {/* product size range end */}
          </div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
}

export default ProductDetails;
