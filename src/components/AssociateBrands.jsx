import { associateBrands } from "../utils/servicesData";
import SectionHeader from "./SectionHeader";

const AssociateBrands = () => {
    return (
        <div className="flex w-full flex-col justify-center items-center max-w-[90vw] m-auto my-4">
            <div>
                <SectionHeader mainHeading={"Our Associate"} subHeading={"Brands"} />
            </div>
            <div className="w-full grid grid-cols-2 place-items-center lg:grid-cols-4  md:grid-cols-4 md:gap-6">
                {associateBrands.map((item, index) => (
                    <img 
                        key={index} 
                        src={item.src} 
                        alt={item.alt || "Logo"} 
                        className="h-28 w-28" 
                    />
                ))}
            </div>
        </div>
    );
};

export default AssociateBrands;
