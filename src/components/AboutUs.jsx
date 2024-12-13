import SectionHeader from "./SectionHeader"

const Aboutus = () => {
    return (
        <div className="grid grid-cols-2 w-[90vw] m-auto px-2 py-4">
            <div className="aboutus-section"></div>
            <div className="flex flex-col gap-2  px-8">
                <SectionHeader mainHeading="We Provide High" subHeading={"Designs"} />
                <p className="text-gray-700">Wrap your tired eyes around this massive gallery of refreshing modern bedroom ideas and gorgeous bedroom accessories that are sure to wake you up. From ultra sleek minimalist style bedrooms to warm modern rustic decor schemes, there is something here to suit everyone.</p>
                <p className="">We have 10+ years of experiences for give you better quality results.</p>
            </div>
        </div>
    )
}
export default Aboutus