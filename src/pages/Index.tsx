import { useState } from "react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-gradient">CleanWall Pro</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: "catalog", label: "Каталог", icon: "ShoppingCart" },
                { id: "examples", label: "Примеры использования", icon: "Image" },
                { id: "docs", label: "Документация", icon: "FileText" },
                { id: "wholesale", label: "Оптовикам", icon: "Package" },
                { id: "production", label: "Производство", icon: "Factory" },
                { id: "reviews", label: "Отзывы", icon: "Star" },
                { id: "contacts", label: "Контакты", icon: "Phone" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="gradient-primary text-white border-0 px-6 py-2 text-sm animate-float">
              Профессиональная химия для уборки
            </Badge>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-gradient leading-tight">
              Чистота стен —<br />наша миссия
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Инновационные решения для мытья любых поверхностей. 20 формул для идеального результата.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary text-white border-0 px-8 hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection("catalog")}
              >
                <Icon name="ShoppingCart" size={20} />
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                onClick={() => scrollToSection("wholesale")}
              >
                <Icon name="Package" size={20} />
                Оптовые поставки
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-heading font-bold mb-4">Каталог продукции</h2>
            <p className="text-gray-600 text-lg">20 профессиональных средств для любых задач</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedProduct(product)}
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary text-white border-0">{product.price} ₽</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="font-heading text-lg mb-2 line-clamp-1">{product.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2 mb-3">{product.description}</CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300" style={{ backgroundColor: product.color.toLowerCase() }}></div>
                    <span className="text-xs text-gray-500">{product.color}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Примеры использования</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Home", title: "Жилые помещения", desc: "Квартиры, дома, коттеджи — идеальная чистота без разводов" },
              { icon: "Building", title: "Офисные здания", desc: "Поддержание профессионального вида бизнес-пространств" },
              { icon: "ShoppingBag", title: "Торговые центры", desc: "Быстрая уборка больших площадей с длительным эффектом" }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Icon name={item.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Документация</h2>
          <Tabs defaultValue="safety" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="safety">Безопасность</TabsTrigger>
              <TabsTrigger value="usage">Инструкции</TabsTrigger>
              <TabsTrigger value="storage">Хранение</TabsTrigger>
            </TabsList>
            <TabsContent value="safety" className="space-y-4 p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Меры безопасности</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><Icon name="CheckCircle" size={20} className="text-primary mt-1" /> Использовать резиновые перчатки при работе</li>
                <li className="flex items-start gap-2"><Icon name="CheckCircle" size={20} className="text-primary mt-1" /> Обеспечить хорошую вентиляцию помещения</li>
                <li className="flex items-start gap-2"><Icon name="CheckCircle" size={20} className="text-primary mt-1" /> Избегать контакта с кожей и глазами</li>
                <li className="flex items-start gap-2"><Icon name="CheckCircle" size={20} className="text-primary mt-1" /> Хранить в недоступном для детей месте</li>
              </ul>
            </TabsContent>
            <TabsContent value="usage" className="space-y-4 p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Общие рекомендации</h3>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>Протестируйте средство на небольшом участке</li>
                <li>Следуйте указаниям по разбавлению для концентратов</li>
                <li>Наносите равномерно на поверхность</li>
                <li>Дайте средству подействовать указанное время</li>
                <li>Смойте или протрите чистой водой</li>
              </ol>
            </TabsContent>
            <TabsContent value="storage" className="space-y-4 p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Условия хранения</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><Icon name="Thermometer" size={20} className="text-secondary mt-1" /> Температура: от +5°C до +25°C</li>
                <li className="flex items-start gap-2"><Icon name="Sun" size={20} className="text-secondary mt-1" /> Защищать от прямых солнечных лучей</li>
                <li className="flex items-start gap-2"><Icon name="Package" size={20} className="text-secondary mt-1" /> Хранить в оригинальной упаковке</li>
                <li className="flex items-start gap-2"><Icon name="AlertCircle" size={20} className="text-secondary mt-1" /> Не замораживать</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="wholesale" className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Icon name="Package" size={64} className="mx-auto animate-float" />
            <h2 className="text-4xl font-heading font-bold">Оптовым покупателям</h2>
            <p className="text-xl opacity-90">
              Специальные условия для клининговых компаний, дистрибьюторов и крупных заказчиков
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: "TrendingDown", title: "Скидки до 30%", desc: "При заказе от 100 единиц" },
                { icon: "Truck", title: "Бесплатная доставка", desc: "По всей России от 50 000 ₽" },
                { icon: "Award", title: "Гарантия качества", desc: "Сертификаты и декларации" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Icon name={item.icon} size={40} className="mx-auto mb-3" />
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
            <Button size="lg" variant="secondary" className="mt-6">
              <Icon name="Mail" size={20} />
              Запросить коммерческое предложение
            </Button>
          </div>
        </div>
      </section>

      <section id="production" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Наше производство</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Factory" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Современное оборудование</h3>
                  <p className="text-gray-600">Европейские линии производства обеспечивают высокое качество продукции</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="FlaskConical" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Собственная лаборатория</h3>
                  <p className="text-gray-600">Разработка и тестирование формул под российские условия</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Контроль качества</h3>
                  <p className="text-gray-600">Каждая партия проходит многоступенчатую проверку</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Производство"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Анна Петрова", company: "Клининговая служба \"Блеск\"", rating: 5, text: "Работаем с CleanWall Pro уже 3 года. Отличное качество, клиенты довольны результатом!" },
              { name: "Игорь Смирнов", company: "ТЦ \"Мега\"", rating: 5, text: "Закупаем большие объемы для уборки торгового центра. Эффективность на высоте, персонал доволен." },
              { name: "Елена Волкова", company: "Частный заказчик", rating: 5, text: "Использую дома EcoClean Био. Безопасно для детей и отлично очищает. Рекомендую!" }
            ].map((review, index) => (
              <Card key={index} className="p-6 animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-heading font-bold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Производственная, д. 15</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">+7 (800) 555-35-35 (бесплатно)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Email</h3>
                  <p className="text-gray-600">info@cleanwallpro.ru</p>
                  <p className="text-gray-600">sales@cleanwallpro.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-600">Сб-Вс: выходной</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Остались вопросы?</h3>
              <p className="text-gray-700 mb-6">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Ваш вопрос"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full gradient-primary text-white border-0 hover:opacity-90">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4 text-gradient">CleanWall Pro</h3>
              <p className="text-gray-400 text-sm">Профессиональная химия для идеальной чистоты ваших стен</p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#catalog" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#wholesale" className="hover:text-white transition-colors">Оптовикам</a></li>
                <li><a href="#production" className="hover:text-white transition-colors">Производство</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#docs" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#examples" className="hover:text-white transition-colors">Примеры</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@cleanwallpro.ru</li>
                <li>г. Москва, ул. Производственная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 CleanWall Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading">{selectedProduct.name}</DialogTitle>
                <DialogDescription>{selectedProduct.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Назначение</p>
                    <p className="font-medium">{selectedProduct.purpose}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Способ нанесения</p>
                    <p className="font-medium">{selectedProduct.application}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Функция</p>
                    <p className="font-medium">{selectedProduct.function}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Цвет</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded border-2 border-gray-300" style={{ backgroundColor: selectedProduct.color.toLowerCase() }}></div>
                      <p className="font-medium">{selectedProduct.color}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Срок годности</p>
                    <p className="font-medium">{selectedProduct.shelfLife}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Цена</p>
                    <p className="text-2xl font-heading font-bold text-primary">{selectedProduct.price} ₽</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 gradient-primary text-white border-0">
                    <Icon name="ShoppingCart" size={20} />
                    Добавить в корзину
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="Mail" size={20} />
                    Запросить КП
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;