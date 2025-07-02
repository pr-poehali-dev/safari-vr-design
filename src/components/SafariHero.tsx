import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function SafariHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-safari-sky via-safari-sand/20 to-safari-forest/10 overflow-hidden">
      {/* Декоративные элементы природы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-safari-leaf rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-safari-sunset rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-safari-earth rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          {/* Главный заголовок */}
          <h1 className="text-5xl md:text-7xl font-bold text-safari-forest mb-6 font-montserrat">
            VR Safari Adventure
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-safari-earth mb-8 max-w-3xl mx-auto font-open-sans">
            Виртуальное путешествие по африканскому парку сафари для детей
          </p>

          {/* Описание */}
          <p className="text-lg text-safari-forest/80 mb-12 max-w-2xl mx-auto">
            Исследуйте дикую природу, познакомьтесь с удивительными животными и
            узнайте историю парка в захватывающем VR-приключении
          </p>

          {/* CTA кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-safari-forest hover:bg-safari-forest/90 text-white px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Начать приключение
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-safari-earth text-safari-earth hover:bg-safari-earth hover:text-white px-8 py-4 text-lg"
            >
              <Icon name="Info" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>

          {/* Превью видео placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-safari-sand/30 rounded-2xl border-4 border-safari-earth/20 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-safari-forest/20 to-safari-earth/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-safari-forest/80 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Play" size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-safari-forest font-semibold text-lg">
                    VR Safari Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Волны внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-16 fill-safari-leaf/10">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
