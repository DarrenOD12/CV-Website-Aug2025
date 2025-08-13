export default function ProfileHero() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">
          Darren O'Donnell
        </h1>
        <div className="space-y-2 text-lg text-muted-foreground">
          <p>Originally from Ireland</p>
          <p>Located in Sydney</p>
          <p>Currently working at Stripe</p>
        </div>
      </div>
    </div>
  );
}
