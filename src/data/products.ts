export interface Product {
  id: number;
  name: string;
  description: string;
  purpose: string;
  application: string;
  function: string;
  color: string;
  shelfLife: string;
  image: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "CleanPro Универсал",
    description: "Высокоэффективное средство для ежедневной уборки любых поверхностей",
    purpose: "Для стен, потолков, пола",
    application: "Нанести губкой или распылителем",
    function: "Удаление загрязнений, дезинфекция",
    color: "Прозрачный голубой",
    shelfLife: "24 месяца",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=400&fit=crop",
    price: 450
  },
  {
    id: 2,
    name: "WallMaster Интенсив",
    description: "Концентрированная формула для удаления сложных пятен со стен",
    purpose: "Для окрашенных и обойных стен",
    application: "Разбавить водой 1:5, нанести тряпкой",
    function: "Глубокая очистка, устранение пятен",
    color: "Зеленый",
    shelfLife: "36 месяцев",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=400&fit=crop",
    price: 680
  },
  {
    id: 3,
    name: "EcoClean Био",
    description: "Экологичное средство на основе натуральных компонентов",
    purpose: "Для всех типов стен",
    application: "Распылить, протереть микрофиброй",
    function: "Безопасная очистка, антистатик",
    color: "Светло-желтый",
    shelfLife: "18 месяцев",
    image: "https://images.unsplash.com/photo-1603341547423-4a0e91fb96cc?w=400&h=400&fit=crop",
    price: 590
  },
  {
    id: 4,
    name: "PowerWash Турбо",
    description: "Мощное средство для промышленной очистки стен",
    purpose: "Для производственных помещений",
    application: "Нанести под давлением",
    function: "Удаление жира, масла, копоти",
    color: "Оранжевый",
    shelfLife: "48 месяцев",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop",
    price: 890
  },
  {
    id: 5,
    name: "SoftTouch Деликат",
    description: "Бережная формула для чувствительных покрытий",
    purpose: "Для декоративных и тканевых покрытий",
    application: "Нанести мягкой губкой",
    function: "Щадящая очистка, защита цвета",
    color: "Розовый",
    shelfLife: "24 месяца",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&h=400&fit=crop",
    price: 520
  },
  {
    id: 6,
    name: "BrightWall Сияние",
    description: "Придает стенам свежий блеск и защитный слой",
    purpose: "Для глянцевых и полуглянцевых поверхностей",
    application: "Распылить и отполировать",
    function: "Полировка, защита от загрязнений",
    color: "Фиолетовый",
    shelfLife: "30 месяцев",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",
    price: 750
  },
  {
    id: 7,
    name: "AntiBac Защита",
    description: "Антибактериальное средство с длительным эффектом",
    purpose: "Для кухонь, ванных комнат, медучреждений",
    application: "Нанести распылителем, оставить на 5 минут",
    function: "Дезинфекция, антибактериальная защита",
    color: "Белый",
    shelfLife: "24 месяца",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&h=400&fit=crop",
    price: 620
  },
  {
    id: 8,
    name: "FastDry Экспресс",
    description: "Быстросохнущая формула для срочной уборки",
    purpose: "Для офисов и коммерческих помещений",
    application: "Нанести, протереть, высыхает за 30 сек",
    function: "Экспресс-очистка, быстрое высыхание",
    color: "Синий",
    shelfLife: "24 месяца",
    image: "https://images.unsplash.com/photo-1569108564705-9e93d7bf7fa5?w=400&h=400&fit=crop",
    price: 550
  },
  {
    id: 9,
    name: "DeepClean Профи",
    description: "Профессиональная формула для клининговых компаний",
    purpose: "Для всех типов стен и потолков",
    application: "Разбавить 1:10, нанести щеткой",
    function: "Глубокая очистка, удаление плесени",
    color: "Темно-зеленый",
    shelfLife: "36 месяцев",
    image: "https://images.unsplash.com/photo-1584622781867-b753d8ec14c9?w=400&h=400&fit=crop",
    price: 920
  },
  {
    id: 10,
    name: "FreshAir Аромат",
    description: "Очищающее средство с приятным освежающим ароматом",
    purpose: "Для жилых помещений",
    application: "Распылить на поверхность",
    function: "Очистка, ароматизация помещения",
    color: "Лавандовый",
    shelfLife: "18 месяцев",
    image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=400&h=400&fit=crop",
    price: 490
  },
  {
    id: 11,
    name: "NoStreak Идеал",
    description: "Средство без разводов для идеально чистых стен",
    purpose: "Для гладких окрашенных поверхностей",
    application: "Нанести, протереть до полного высыхания",
    function: "Очистка без разводов",
    color: "Прозрачный",
    shelfLife: "24 месяца",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop",
    price: 580
  },
  {
    id: 12,
    name: "HeavyDuty Индустриал",
    description: "Сверхмощное средство для тяжелых загрязнений",
    purpose: "Для промышленных и складских помещений",
    application: "Нанести, оставить на 10 минут, смыть",
    function: "Удаление застарелых пятен",
    color: "Красный",
    shelfLife: "48 месяцев",
    image: "https://images.unsplash.com/photo-1580256269728-e0728d136110?w=400&h=400&fit=crop",
    price: 1050
  },
  {
    id: 13,
    name: "SafeKids Безопасный",
    description: "Гипоаллергенное средство для детских учреждений",
    purpose: "Для детских комнат и садов",
    application: "Распылить, протереть влажной тряпкой",
    function: "Безопасная очистка, без химикатов",
    color: "Светло-зеленый",
    shelfLife: "12 месяцев",
    image: "https://images.unsplash.com/photo-1580256339966-20d64cb6a270?w=400&h=400&fit=crop",
    price: 530
  },
  {
    id: 14,
    name: "MultiSurface Универсал Pro",
    description: "Усиленная формула для многоцелевой уборки",
    purpose: "Для стен, дверей, мебели",
    application: "Нанести губкой или тряпкой",
    function: "Универсальная очистка, защита",
    color: "Желтый",
    shelfLife: "30 месяцев",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop",
    price: 640
  },
  {
    id: 15,
    name: "WaterProof Защита",
    description: "Создает водоотталкивающий слой на поверхности",
    purpose: "Для ванных комнат и влажных помещений",
    application: "Распылить, оставить до высыхания",
    function: "Защита от влаги и плесени",
    color: "Голубой",
    shelfLife: "36 месяцев",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=400&fit=crop",
    price: 780
  },
  {
    id: 16,
    name: "QuickClean Экспресс Plus",
    description: "Усиленная версия для быстрой уборки больших площадей",
    purpose: "Для торговых центров и офисов",
    application: "Нанести мопом или распылителем",
    function: "Быстрая очистка, долгий эффект",
    color: "Морская волна",
    shelfLife: "24 месяца",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=400&fit=crop",
    price: 720
  },
  {
    id: 17,
    name: "PerfectWhite Отбеливатель",
    description: "Восстанавливает белизну стен и потолков",
    purpose: "Для побелки и белых поверхностей",
    application: "Нанести кистью или валиком",
    function: "Отбеливание, удаление желтизны",
    color: "Белый с голубым оттенком",
    shelfLife: "24 месяца",
    image: "https://images.unsplash.com/photo-1603341547423-4a0e91fb96cc?w=400&h=400&fit=crop",
    price: 560
  },
  {
    id: 18,
    name: "AromaFresh Цитрус",
    description: "Очищающее средство с натуральным цитрусовым ароматом",
    purpose: "Для жилых и офисных помещений",
    application: "Распылить, протереть салфеткой",
    function: "Очистка, дезодорирование",
    color: "Оранжево-желтый",
    shelfLife: "18 месяцев",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&h=400&fit=crop",
    price: 510
  },
  {
    id: 19,
    name: "UltraShield Максимум",
    description: "Создает защитный барьер от загрязнений на длительный срок",
    purpose: "Для всех типов стен",
    application: "Нанести после очистки, дать высохнуть",
    function: "Долгосрочная защита, антистатик",
    color: "Серебристый",
    shelfLife: "48 месяцев",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",
    price: 980
  },
  {
    id: 20,
    name: "ProClean Концентрат",
    description: "Экономичный концентрат для профессионального использования",
    purpose: "Для любых поверхностей",
    application: "Разбавить водой 1:20",
    function: "Эффективная очистка, экономия",
    color: "Темно-синий",
    shelfLife: "60 месяцев",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&h=400&fit=crop",
    price: 1200
  }
];
