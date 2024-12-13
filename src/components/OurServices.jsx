import { serviceData, workAchievements } from "../utils/servicesData"
import AchievementsSection from "./AchievementsSection"
import SectionHeader from "./SectionHeader"
const OurServices = () => {
    return (
        <main className="max-w-[90vw] m-auto">
            <div className="grid grid-cols-2 items-center py-8">
                <SectionHeader mainHeading="Explore our Best" subHeading="Services" />

               <AchievementsSection workAchievements={workAchievements}/>
            </div>

            <div className="card-container ">
                {serviceData.map((service) => (
                    <div key={service.id} className="card hover:text-white text-gray-600">
                        <h3 className=" text-xl md:text-2xl lg:text-2xl">{`0${service.id}`}</h3>
                        <h2 className=" text-xl md:text-2xl lg:text-2xl">{service.title}</h2>
                        <p className="md:text-center lg:text-center  hover:text-white     text-md md:text-md lg:text-md  ">{service.description}</p>
                    </div>
                ))}
            </div>
        </main>

    )
}
export default OurServices