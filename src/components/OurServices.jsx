import { serviceData, workAchievements } from "../utils/servicesData"
import AchievementsSection from "./AchievementsSection"
import SectionHeader from "./SectionHeader"
const OurServices = () => {
    return (
        <main className="max-w-[90vw] m-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 items-center py-8">
                <div className="col-span-1">
                <SectionHeader mainHeading="Explore Our Best" subHeading="Services" />

                </div>
        <div className="col-span-3 flex justify-end ">
        <AchievementsSection workAchievements={workAchievements}/>

        </div>
            </div>

            <div className="card-container ">
                {serviceData.map((service) => (
                    <div key={service.id} className="card hover:text-white text-gray-600">
                        <h3 className=" text-xl md:text-2xl lg:text-2xl">{`0${service.id}`}</h3>
                        <h2 className=" text-xl md:text-2xl lg:text-2xl">{service.title}</h2>
                        <p className="md:text-center lg:text-center  hover:text-white    text-base font-futura font-normal leading-loose  ">{service.description}</p>
                    </div>
                ))}
            </div>
        </main>

    )
}
export default OurServices