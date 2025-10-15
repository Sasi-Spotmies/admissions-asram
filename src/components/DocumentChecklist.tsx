import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileCheck, ShieldCheck, Award, FileText } from "lucide-react";

const documentCategories = [
  {
    title: "Academic Certificates",
    icon: Award,
    documents: [
      "MBBS Degree Certificate (provisional/original)",
      "MBBS Internship Completion Certificate",
      "NEET-PG 2025 Scorecard",
      "NEET-PG Admit Card",
      "All year-wise MBBS Mark Sheets",
      "Medical Council Registration Certificate",
    ],
  },
  {
    title: "Identity Proofs",
    icon: ShieldCheck,
    documents: [
      "Aadhaar Card (mandatory)",
      "PAN Card",
      "Passport-size photographs (6 copies)",
      "Date of Birth Certificate",
      "SSC/10th Standard Certificate",
    ],
  },
  {
    title: "Category Certificates",
    icon: FileCheck,
    documents: [
      "Caste Certificate (if applicable - SC/ST/BC)",
      "EWS Certificate (if applicable)",
      "Income Certificate (for fee concession)",
      "Local/Non-Local Certificate",
      "NRI/NRI Sponsored Certificate (if applicable)",
    ],
  },
  {
    title: "Other Required Documents",
    icon: FileText,
    documents: [
      "Transfer Certificate from previous institution",
      "Migration Certificate (if applicable)",
      "Gap Certificate (if applicable)",
      "Medical Fitness Certificate",
      "COVID-19 Vaccination Certificate",
      "Bonafide Certificate from last attended institution",
    ],
  },
];

export const DocumentChecklist = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Document Checklist
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ensure you have all required documents ready for verification
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {documentCategories.map((category, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-soft border-border overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/30 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-left">
                      {category.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="space-y-3 mt-2">
                    {category.documents.map((doc, docIndex) => (
                      <li
                        key={docIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 p-6 bg-accent/20 rounded-xl border border-accent">
            <p className="text-sm text-center text-muted-foreground">
              <strong className="text-foreground">Important:</strong> Carry both original documents and self-attested photocopies 
              for verification. Documents in languages other than English/Telugu must be translated by a gazetted officer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
