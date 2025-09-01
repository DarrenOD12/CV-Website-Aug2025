import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const education = [
  {
    degree: "Business Information Systems",
    institution: "National University of Ireland, Galway",
    period: "2014 - 2018",
    achievements: [
      "First Class Honours 1.1 (GPA: 4.0)",
      "Received University Scholarship for academic performance 2014/2015",
      "Selected as a Placement Ambassador for second year Business Information System students while in my final year of college. This was a paid employment.",
      "Employee of Blackstone Launchpad from 2016 - 2018. Blackstone Launchpad is a campus based entrepreneurial programme set up to bring support to aspiring entrepreneurs.",
    ],
  },
  {
    degree: "Exchange Program - Business Information Systems",
    institution: "University of Maryland, Baltimore County",
    period: "2016 (Erasmus)",
    achievements: [
      "Completed semester abroad as part of Erasmus exchange program",
      "Gained international academic experience in American university system",
      "Enhanced cross-cultural communication and adaptability skills",
      "Maintained academic excellence while adapting to different educational methodologies",
    ],
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12 font-helixa">
          Education
        </h2>
        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="space-y-4"
        >
          {education.map((edu, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-border rounded-lg bg-card"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 rounded-t-lg data-[state=open]:rounded-b-none">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 w-full text-left">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bold text-foreground font-callestany">
                        {edu.institution}
                      </div>
                    </div>
                    <div className="text-lg font-light text-foreground mt-1 font-helixa">
                      {edu.degree}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 font-helixa line-clamp-1 data-[state=open]:hidden">
                      {edu.achievements[0]}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm text-muted-foreground font-helixa">
                      {edu.period}
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-3 mt-4">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <CardDescription className="text-foreground/80 leading-relaxed font-helixa">
                        {achievement}
                      </CardDescription>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
