import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield",
    title: "Безопасность VR",
    description:
      "Специально адаптированное VR для детей 6+ лет с комфортными настройками и перерывами",
  },
  {
    icon: "GraduationCap",
    title: "Образовательный контент",
    description:
      "Программа разработана при участии зоологов и педагогов для максимальной пользы",
  },
  {
    icon: "Clock",
    title: "Оптимальная длительность",
    description:
      "25 минут интерактивного путешествия — идеальное время для детского внимания",
  },
  {
    icon: "Users",
    title: "Семейный опыт",
    description:
      "Родители могут наблюдать путешествие ребенка на экране и обсуждать увиденное",
  },
];

const benefits = [
  "Развитие любви к природе и животным",
  "Изучение географии и биологии в игровой форме",
  "Безопасное знакомство с дикими животными",
  "Развитие эмпатии и бережного отношения к природе",
  "Незабываемые эмоции и впечатления",
];

export default function ParentsInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-safari-sand/10 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок для родителей */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-safari-forest mb-6 font-montserrat">
            Для заботливых родителей
          </h2>
          <p className="text-xl text-safari-earth max-w-3xl mx-auto">
            VR Safari — это не просто развлечение, а образовательный опыт,
            который даст вашему ребенку знания о природе и животных
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Особенности и безопасность */}
          <div>
            <h3 className="text-2xl font-bold text-safari-forest mb-8 font-montserrat">
              Почему VR Safari безопасен и полезен?
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-safari-leaf/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={feature.icon as any}
                      size={24}
                      className="text-safari-leaf"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-safari-forest mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-safari-forest/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Польза для детей */}
          <div>
            <Card className="border-safari-earth/20">
              <CardHeader className="bg-safari-leaf/5">
                <CardTitle className="flex items-center gap-3 text-safari-forest">
                  <Icon name="Heart" size={24} className="text-safari-sunset" />
                  Что получит ваш ребенок?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="text-safari-leaf mt-0.5 flex-shrink-0"
                      />
                      <span className="text-safari-forest/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-safari-sky/10 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Lightbulb"
                      size={20}
                      className="text-safari-sunset mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-semibold text-safari-forest mb-1">
                        Рекомендация психологов:
                      </p>
                      <p className="text-sm text-safari-forest/70">
                        VR-путешествия развивают пространственное мышление,
                        воображение и способность к эмпатии у детей
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Возрастные рекомендации */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Card className="border-safari-earth/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-safari-forest mb-1">
                    6-12
                  </div>
                  <div className="text-sm text-safari-earth">лет</div>
                  <div className="text-xs text-safari-forest/60 mt-1">
                    Оптимальный возраст
                  </div>
                </CardContent>
              </Card>

              <Card className="border-safari-earth/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-safari-forest mb-1">
                    25
                  </div>
                  <div className="text-sm text-safari-earth">минут</div>
                  <div className="text-xs text-safari-forest/60 mt-1">
                    Длительность
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA для родителей */}
        <div className="text-center mt-16">
          <div className="bg-safari-forest/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <Icon
              name="Users"
              size={48}
              className="text-safari-leaf mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-safari-forest mb-4 font-montserrat">
              Подарите ребенку незабываемое приключение
            </h3>
            <p className="text-safari-forest/70 mb-6">
              Безопасное, познавательное и захватывающее путешествие в мир дикой
              природы
            </p>
            <Button
              size="lg"
              className="bg-safari-forest hover:bg-safari-forest/90 text-white px-8 py-4"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать сеанс
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
