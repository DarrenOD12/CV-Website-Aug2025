import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    company: "STRIPE",
    location: "Dublin, Ireland & Sydney, Australia",
    role: "Migrations Specialist",
    period: "July 2021–present",
    achievements: [
      "Successfully launched multiple regional payment method migration product initiatives such as UK Bacs, SEPA and AU BECS driving substantial year-over-year growth",
      "Developed and implemented strategic growth plans for the EMEA and APAC region and created resource allocation and headcount projections for long-term scalability which led to an increase in case management capacity from 5% to 50% within two years. Recognized as Stripe Mentor of the Quarter with multiple team members earned excellence awards in region.",
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
    company: "Previous Company Experience",
    location: "",
    role: "",
    period: "",
    achievements: [
      "Business Process Analyst at Boston Scientific",
      "Research Assistant at Insight Centre for Data Analytics",
      "Google Internship",
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-2 hover:border-primary/50 bg-card"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {experience.company}
                    </CardTitle>
                    {experience.location && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {experience.location}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    {experience.role && (
                      <p className="text-lg font-semibold text-foreground">
                        {experience.role}
                      </p>
                    )}
                    {experience.period && (
                      <p className="text-sm text-muted-foreground">
                        {experience.period}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {achievement}
                        </CardDescription>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
