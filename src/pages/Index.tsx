import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white animate-fade-in">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm animate-scale-in">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon
                name="Target"
                size={32}
                className="text-primary animate-pulse-glow"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                CS2 MATCHES
              </h1>
            </div>
            <Badge
              variant="outline"
              className="border-primary text-primary animate-pulse"
            >
              ЗАВЕРШЕН
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Match Result Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            РЕЗУЛЬТАТ МАТЧА
          </h2>
          <p className="text-xl text-muted-foreground">
            Counter-Strike 2 • Соревновательный матч
          </p>
        </div>

        {/* Teams & Score */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-card to-secondary border-2 border-primary/20 p-8 animate-scale-in hover:scale-105 transition-transform duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Team Aurum */}
              <div className="text-center space-y-4">
                <div className="relative">
                  <img
                    src="/img/d7660d7c-ecc3-4aa8-9d9b-650e97475739.jpg"
                    alt="Aurum Logo"
                    className="w-24 h-24 mx-auto rounded-full border-4 border-muted object-cover"
                  />
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white">
                    ПОРАЖЕНИЕ
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-white">AURUM</h3>
                <div className="flex justify-center space-x-2">
                  <Icon
                    name="Users"
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span className="text-sm text-muted-foreground">
                    5 игроков
                  </span>
                </div>
              </div>

              {/* Score */}
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-6xl font-bold text-red-400">11</div>
                  <div className="text-4xl font-bold text-muted-foreground">
                    :
                  </div>
                  <div className="text-6xl font-bold text-primary">13</div>
                </div>
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="border-primary text-primary mb-2"
                  >
                    <Icon name="MapPin" size={14} className="mr-1" />
                    de_dust2
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Продолжительность: 47 минут
                  </p>
                </div>
              </div>

              {/* Team Outlier Esports */}
              <div className="text-center space-y-4">
                <div className="relative">
                  <img
                    src="/img/1f2918d9-8c24-4b4b-9889-e121bee268e1.jpg"
                    alt="Outlier Esports Logo"
                    className="w-24 h-24 mx-auto rounded-full border-4 border-primary object-cover"
                  />
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    ПОБЕДА
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-white">
                  OUTLIER ESPORTS
                </h3>
                <div className="flex justify-center space-x-2">
                  <Icon
                    name="Users"
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span className="text-sm text-muted-foreground">
                    5 игроков
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Match Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-card/50 border-border p-6 text-center">
            <Icon
              name="Clock"
              size={48}
              className="mx-auto mb-4 text-primary"
            />
            <h3 className="text-xl font-semibold mb-2">Время матча</h3>
            <p className="text-3xl font-bold text-primary">47:32</p>
          </Card>

          <Card className="bg-card/50 border-border p-6 text-center">
            <Icon name="Zap" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Раунды</h3>
            <p className="text-3xl font-bold text-primary">24</p>
          </Card>

          <Card className="bg-card/50 border-border p-6 text-center">
            <Icon
              name="Trophy"
              size={48}
              className="mx-auto mb-4 text-primary"
            />
            <h3 className="text-xl font-semibold mb-2">MVP</h3>
            <p className="text-lg font-semibold text-white">Player_OE</p>
          </Card>
        </div>

        {/* Round History */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-card/50 border-border p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">
              История раундов
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {Array.from({ length: 24 }, (_, i) => {
                const isAurumWin = i < 11;
                return (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      isAurumWin
                        ? "bg-red-600 text-white"
                        : "bg-primary text-white"
                    }`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <span className="inline-flex items-center mr-4">
                <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                Aurum
              </span>
              <span className="inline-flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                Outlier Esports
              </span>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
