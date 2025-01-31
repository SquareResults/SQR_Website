import { motion } from "framer-motion";
import { Check, Zap, Search, UserCheck, Building, ChartBar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Talent Search",
      description: "Advanced candidate search with AI-powered matching technology",
      features: ["Custom search filters", "Skills assessment", "Cultural fit analysis"]
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      description: "Comprehensive hiring solutions for large organizations",
      features: ["Bulk hiring", "Department-wise tracking", "Custom workflows"]
    },
    {
      icon: UserCheck,
      title: "Recruitment Process",
      description: "End-to-end recruitment management system",
      features: ["Interview scheduling", "Candidate tracking", "Automated screening"]
    },
    {
      icon: ChartBar,
      title: "Analytics & Insights",
      description: "Data-driven hiring decisions with detailed analytics",
      features: ["Performance metrics", "Hiring trends", "ROI tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive hiring solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Zap className="w-5 h-5" />
            <span className="font-medium">Premium features available for enterprise clients</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;