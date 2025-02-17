import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
 

  return (
    // <div className="h-full bg-background">
    <>
      <Navbar />
      <ContactSection/>
      </>
      // </div>
  );
};

export default Contact;