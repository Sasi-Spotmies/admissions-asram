import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-100 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">ASRAM</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Alluri Sitarama Raju Academy of Medical Sciences - Shaping the future of healthcare through excellence in medical education.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#departments" className="text-muted-foreground hover:text-primary transition-colors">
                  Departments
                </a>
              </li>
              <li>
                <a href="#eligibility" className="text-muted-foreground hover:text-primary transition-colors">
                  Eligibility
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Malkapuram, Eluru-534005<br />Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+918332699999" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 83326 99999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:admissions@asram.edu.in" className="text-muted-foreground hover:text-primary transition-colors">
                  admissions@asram.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ASRAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
