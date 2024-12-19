import InfiniteCarousel from "./InfiniteCarousel";
import SectionHeader from "./SectionHeader";

const AssociateBrands = () => {
    return (
        <div className="flex w-full flex-col justify-center items-center max-w-[90vw] m-auto my-4">
            <div>
                <SectionHeader mainHeading={"Our Associate"} subHeading={"Brands"} />
            </div>
            <InfiniteCarousel/>
            
        </div>
    );
};

export default AssociateBrands;
