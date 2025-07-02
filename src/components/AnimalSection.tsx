import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const animals = [
  {
    name: "Африканский лев",
    emoji: "🦁",
    description:
      "Король саванны расскажет о своей гордости и охотничьих традициях",
    habitat: "Саванна",
    facts: [
      "Живут семьями-прайдами",
      "Рычание слышно на 8 км",
      "Спят 20 часов в день",
    ],
  },
  {
    name: "Африканский слон",
    emoji: "🐘",
    description:
      "Мудрый гигант поделится секретами стадной жизни и памяти слонов",
    habitat: "Саванна и леса",
    facts: ["Весят до 6 тонн", "Помнят друзей 70 лет", "Общаются инфразвуком"],
  },
  {
    name: "Жираф",
    emoji: "🦒",
    description:
      "Самый высокий житель парка покажет мир с высоты птичьего полета",
    habitat: "Акация саванна",
    facts: [
      "Рост до 6 метров",
      "Язык длиной 50 см",
      "Спят всего 2 часа в день",
    ],
  },
  {
    name: "Гепард",
    emoji: "🐆",
    description: "Самый быстрый хищник продемонстрирует свои скоростные навыки",
    habitat: "Открытая саванна",
    facts: ["Скорость до 120 км/ч", "Разгон за 3 секунды", "Не умеют рычать"],
  },
];

export default function AnimalSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-safari-leaf/5 to-safari-sand/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-safari-forest mb-6 font-montserrat">
            Встретьте жителей парка
          </h2>
          <p className="text-xl text-safari-earth max-w-3xl mx-auto">
            В VR-путешествии дети познакомятся с удивительными животными и
            узнают их невероятные истории
          </p>
        </div>

        {/* Сетка животных */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {animals.map((animal, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-safari-earth/20 hover:border-safari-leaf/40 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Emoji и иконка */}
                  <div className="relative">
                    <div className="text-6xl mb-4">{animal.emoji}</div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-safari-leaf rounded-full flex items-center justify-center">
                      <Icon name="Camera" size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Информация о животном */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-safari-forest mb-2 font-montserrat">
                      {animal.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <Icon
                        name="MapPin"
                        size={16}
                        className="text-safari-earth"
                      />
                      <span className="text-safari-earth text-sm font-medium">
                        {animal.habitat}
                      </span>
                    </div>

                    <p className="text-safari-forest/80 mb-4 leading-relaxed">
                      {animal.description}
                    </p>

                    {/* Интересные факты */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-safari-earth uppercase tracking-wide">
                        Интересные факты:
                      </h4>
                      <ul className="space-y-1">
                        {animal.facts.map((fact, factIndex) => (
                          <li
                            key={factIndex}
                            className="flex items-start gap-2 text-sm text-safari-forest/70"
                          >
                            <Icon
                              name="Leaf"
                              size={12}
                              className="text-safari-leaf mt-1 flex-shrink-0"
                            />
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-safari-leaf/10 px-6 py-3 rounded-full">
            <Icon name="Sparkles" size={20} className="text-safari-leaf" />
            <span className="text-safari-forest font-medium">
              И еще более 20 видов животных ждут встречи в VR-парке!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
