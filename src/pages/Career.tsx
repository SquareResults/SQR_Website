import CareersSection from "@/components/CareersSection"
import Navbar from "@/components/Navbar"

const Career = () =>{
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
            <Navbar />
            <div className="pt-16">
                <CareersSection/>
            </div>
        </div>
    )
}
export default Career;