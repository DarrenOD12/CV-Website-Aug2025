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

const experiences = [
  {
    company: "Stripe",
    location: "Dublin, Ireland & Sydney, Australia",
    role: "Migrations Specialist",
    period: "July 2021–present",
    achievements: [
      "Successfully launched multiple regional payment method migration product initiatives such as UK Bacs, SEPA and AU BECS driving substantial year-over-year growth",
      "Developed and implemented strategic growth plans for the EMEA and APAC region and created resource allocation and headcount projections for long-term scalability which led to an increase in case management capacity from 5% to 56% within two years. Recognized as Stripe Mentor of the Quarter with multiple team members earned excellence awards in region.",
      "Led hundreds of client workshops across diverse industries and segments, creating tailored payment infrastructure migration solutions to meet unique business requirements and timelines",
      "Identified critical payment and onboarding vulnerability in network policy changes, led cross-functional initiative with internal stakeholders and payment network partners to implement solution protecting 5M+ cards from processing failures while adapting to evolving payment network policies",
      "Developed and published customer-facing Stripe documentation while ranking in top 0.5% of internal knowledge contributors based on document creation volume; delivered high-impact educational presentations across Sales, Professional Services, and Solution Engineering teams to strengthen cross-functional expertise",
    ],
  },
  {
    company: "PwC",
    location: "Dublin, Ireland",
    role: "Technology Consulting",
    period: "September 2018 – June 2021",
    achievements: [
      "Data Migration and UAT Lead for a public sector client, implementing a demand management system, demonstrating expertise in large-scale data transitions and user acceptance testing.",
      "Test Management Lead on a large-scale FinTech project for an international airline, showcasing ability to manage complex testing processes in the financial technology sector.",
      "Lead Data Analyst on a cyber security engagement for a building materials business, applying analytical skills to enhance security measures.",
      "Business Analyst for a new regulatory reporting system implementation at a commercial bank, combining financial sector knowledge with regulatory compliance expertise.",
      "Diverse industry experience working with both private and public sector clients, providing a broad perspective on various business challenges and solutions.",
    ],
  },
  {
    company: "Boston Scientific",
    location: "",
    role: "Business Process Analyst",
    period: "",
    achievements: [
      "Optimized SAP reporting infrastructure by consolidating background jobs, enhancing automation processes, and delivering advanced analytics solutions that improved decision-making efficiency",
      "Led troubleshooting initiatives for critical reporting systems, ensuring data integrity and implementing strategic reporting enhancements for the Planning and Materials Management division",
      "Developed sophisticated data solutions using enterprise platforms including SAP, Qlikview, Qliksense, and Datawatch, with specialized expertise in VBA programming for Excel automation",
      "Streamlined business intelligence workflows through custom macro development, reducing manual processing time and increasing analytical capabilities",
    ],
  },
  {
    company: "Insight Centre",
    location: "",
    role: "Research Assistant",
    period: "",
    achievements: [
      "Collaborated with cross-functional teams to transform complex datasets into actionable insights and strategic recommendations. Developed interactive data visualization web application for Abbey Theatre's #WakingTheFeminists initiative, revealing gender distribution trends across theatrical roles",
      'Led design and implementation of NUIG Insight\'s "Applied Innovation" web section',
      "Created responsive web interfaces using HTML/CSS and WordPress customization to ensure optimal user experience",
    ],
  },
  {
    company: "Google",
    location: "",
    role: "Intern",
    period: "",
    achievements: [
      "Selected from a pool of 500+ applicants for Google's internship program at European headquarters in Dublin, gaining exposure to industry-leading practices and technologies",
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12 font-helixa">
          Experience
        </h2>
        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="space-y-4"
        >
          {experiences.map((experience, index) => (
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
                        {experience.company}
                      </div>
                    </div>
                    {experience.role && (
                      <div className="text-lg font-light text-foreground mt-1 font-helixa">
                        {experience.role}
                      </div>
                    )}
                    {experience.location && (
                      <div className="text-sm text-muted-foreground mt-1 font-helixa">
                        {experience.location}
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground mt-2 font-helixa line-clamp-1 data-[state=open]:hidden">
                      {experience.achievements[0]}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {experience.period && (
                      <div className="text-sm text-muted-foreground font-helixa">
                        {experience.period}
                      </div>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-3 mt-4">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <CardDescription className="text-foreground/80 leading-relaxed font-helixa">
                          {achievement}
                        </CardDescription>
                      </div>
                    ),
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
