import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const achievements = [
  {
    title: "Strategic Product Launches",
    description:
      "Spearheaded mission-critical payment programs with global impact, driving YOY growth through strategic migration product launches including UK Bacs, AU BECS and SEPA across global markets.",
  },
  {
    title: "Program Management and Team Building",
    description:
      "Led cross-functional program initiatives scaling operational capacity 10x through strategic leadership, mentorship excellence, and systematic resource optimization across global teams",
  },
  {
    title: "Client Engagement & Solution Design",
    description:
      "Orchestrated enterprise-level migration and go-live initiatives through consultative client workshops, aligning complex technical solutions with diverse business requirements",
  },
  {
    title: "Knowledge Leadership & Documentation",
    description:
      "Established reputation as knowledge leader, developing comprehensive documentation frameworks that enhanced cross-functional performance and client success",
  },
];

export default function KeyAchievements() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 hover:border-primary/50 bg-card"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {achievement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
