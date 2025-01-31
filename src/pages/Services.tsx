import { motion } from "framer-motion";
import { Search, UserCheck, Building, ChartBar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: Search,
    title: "RADAR",
    description: "RADAR, a premier product from Square Results, offers a curated selection of industry-leading professionals, enhancing visibility and recognition for elite candidates. As a distinguished authority in recruitment and talent acquisition, Square Results' RADAR provides a suite of tools designed to expedite the job search journey. Among these tools is the Web Portfolio, which establishes a significant online presence for candidates, ensuring a memorable impact. Additionally, an accelerated job search solution is available, delivering effective results and streamlining the path to employment.",
    features: ["Curated selection of professionals", "Web Portfolio", "Accelerated job search"]
  },
  {
    icon: UserCheck,
    title: "SWFT",
    description: "Introducing SWFT, our groundbreaking solution designed to revolutionize the job search process, making it faster, more dynamic, and easier than ever before. By leveraging advanced AI technology, SWFT streamlines the search, matches job seekers with the most suitable positions, and provides personalized recommendations based on unique skills and preferences. This innovative approach not only reduces the time spent job hunting but also enhances the overall experience, ensuring that users find the best opportunities tailored to their professional goals.",
    features: ["AI-powered matching", "Personalized recommendations", "Faster job search"]
  },
  {
    icon: Building,
    title: "SquareTop",
    description: "SquareTop is an exclusive network for corporate and business leaders, providing a platform to connect with peers and industry experts. It is a high-caliber community where members can engage in thought-provoking discussions, exchange cutting-edge strategies, and form powerful alliances. The platform aims to elevate recruitment standards by fostering a synergy of expertise and experience, offering access to invaluable insights and opportunities to influence the recruitment landscape profoundly.",
    features: ["Exclusive network", "Thought-provoking discussions", "Powerful alliances"]
  },
  {
    icon: ChartBar,
    title: "SquareCircle",
    description: "SquareCircle is an exclusive network where we are committed to empowering corporate and business professionals like you. Our platform is designed to be a supportive and informative space where professionals can connect, share insights, and discover new opportunities. By fostering a collaborative environment, we believe recruiters can find the talent they need more efficiently and effectively.",
    features: ["Supportive community", "Insight sharing", "Discover new opportunities"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <Navbar />
      <div className="container mx-auto px-6 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#081321] mb-6">
            Products and <span className="text-[#4DCCE6]">Services</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            By leveraging advanced technology, SquareResults offers a suite of products and services designed to streamline the hiring process, making it more efficient for recruiters and more accessible for job seekers. This approach not only simplifies talent discovery and job placement but also aims to empower every employee with better opportunities and every recruiter with powerful tools to meet their hiring needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#4DCCE6]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#4DCCE6]" />
                  </div>
                  <CardTitle className="text-[#081321]">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;