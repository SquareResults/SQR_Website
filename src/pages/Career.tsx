import CareersSection from "@/components/CareersSection"
import Navbar from "@/components/Navbar"
import { Footer } from "react-day-picker";

const Career = () =>{
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
            <Navbar />
            <div className="pt-16">
                <CareersSection/>
                <Footer/>
            </div>
        </div>
    )
}
export default Career;