import ContactUs from "../../components/ContactUs"
import Hero from "../../components/Hero"
import MetaTags from "../../components/MetaTags"

const Contact =()=>{
    return (
        <>
         <MetaTags
        title="Halchemy Interiors - Contact Us"
        description="Get in touch with Halchemy Interiors for your interior design needs."
        canonical="https://www.halchemyinteriors.com/contact"
      />
        <Hero/>

        <div className="w-full max-w-[90vw] m-auto md:p-6">
        <ContactUs/>
        </div>
          
        </>
    )
}
export default Contact