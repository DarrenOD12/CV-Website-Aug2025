import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const education = [
  {
    degree: "Business Information Systems",
    institution: "National University of Ireland, Galway",
    period: "2014 - 2018",
    exchange: "UMBC, Maryland, United States, 2016 Erasmus",
    achievements: [
      "First Class Honours 1.1 (GPA: 4.0)",
      "Received University Scholarship for academic performance 2014/2015",
      "Selected as a Placement Ambassador for second year Business Information System students while in my final year of college. This was a paid employment.",
      "Employee of Blackstone Launchpad from 2016 - 2018. Blackstone Launchpad is a campus based entrepreneurial programme set up to bring support to aspiring entrepreneurs.",
    ],
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-2 hover:border-primary/50 bg-card"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg font-semibold text-muted-foreground mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.exchange}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-foreground">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {achievement}
                      </CardDescription>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
