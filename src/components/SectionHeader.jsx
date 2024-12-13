const SectionHeader = ({ mainHeading, subHeading }) => {
    return (
        <div className="flex flex-col space-y-2 justify-start items-start p-6 flex-1">
            <h1 className="main-heading">{mainHeading}</h1>
            <div className="flex w-full justify-start items-center space-x-6">
                <div className="underline"></div>
                <h1 className="italic-heading"> {subHeading}</h1>
                </div>
        </div>
    )
}
export default SectionHeader