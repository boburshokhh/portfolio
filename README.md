# 🚀 Portfolio с системой аутентификации

Современное портфолио с полноценной системой регистрации и авторизации пользователей, построенное на Next.js, TypeScript, Tailwind CSS и Supabase.

## ✨ Особенности

- 🎨 **Современный дизайн** - Анимированный интерфейс с Framer Motion
- 🔐 **Система аутентификации** - Регистрация, вход, восстановление пароля
- 🗄️ **База данных** - Supabase с таблицей пользователей
- 📱 **Адаптивный дизайн** - Работает на всех устройствах
- ⚡ **Производительность** - Оптимизированный код и быстрая загрузка
- 🛡️ **Безопасность** - Хэширование паролей, RLS политики
- 🎯 **SEO оптимизация** - Мета-теги и структурированные данные

## 🏗️ Архитектура

### База данных (Supabase)
- **Таблица `users`**: Хранение профилей пользователей
- **RLS политики**: Безопасность на уровне строк
- **Автоматические триггеры**: Обновление временных меток

### Фронтенд (Next.js)
- **App Router**: Современная маршрутизация
- **Server Components**: Оптимизация производительности
- **Client Components**: Интерактивные элементы
- **Middleware**: Защита маршрутов

## 🚀 Быстрый старт

### 1. Клонирование репозитория
```bash
git clone <repository-url>
cd portfolio
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Настройка переменных окружения
Создайте файл `.env.local` в корне проекта:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://llcafwskepvthyanttup.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsY2Fmd3NrZXB2dGh5YW50dHVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2OTkzOTQsImV4cCI6MjA2OTI3NTM5NH0.ZBaSAZCIIlGvbdLTXzQCbyrSOGRy_6c8RQW7Tsjt_ao
```

### 4. Запуск сервера разработки
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📁 Структура проекта

```
portfolio/
├── src/
│   ├── app/                    # App Router страницы
│   │   ├── auth/              # Страницы аутентификации
│   │   │   ├── login/         # Страница входа
│   │   │   ├── register/      # Страница регистрации
│   │   │   ├── forgot-password/ # Восстановление пароля
│   │   │   └── callback/      # Обработка OAuth
│   │   ├── dashboard/         # Личный кабинет
│   │   └── layout.tsx         # Корневой layout
│   ├── components/            # React компоненты
│   │   ├── AuthProvider.tsx   # Провайдер аутентификации
│   │   ├── ClientHeader.tsx   # Клиентский header
│   │   ├── sections/          # Секции портфолио
│   │   └── ui/               # UI компоненты
│   ├── lib/                  # Утилиты и конфигурация
│   │   ├── supabase.ts       # Клиент Supabase
│   │   └── supabase-server.ts # Серверный клиент
│   └── hooks/                # React хуки
├── public/                   # Статические файлы
├── middleware.ts             # Next.js middleware
└── package.json
```

## 🔐 Система аутентификации

### Регистрация пользователей
1. Пользователь заполняет форму (username, email, password)
2. Данные валидируются на клиенте
3. Создается аккаунт в Supabase Auth
4. Создается профиль в таблице `users`
5. Отправляется email для подтверждения

### Вход в систему
1. Пользователь вводит email и пароль
2. Supabase проверяет учетные данные
3. Создается сессия и JWT токен
4. Загружается профиль пользователя

### Защищенные маршруты
- `/dashboard` - Требует аутентификации
- `/auth/*` - Доступно только неавторизованным пользователям

## 🗄️ База данных

### Таблица `users`
```sql
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### RLS политики
- Пользователи могут читать только свои данные
- Пользователи могут обновлять только свои данные
- Пользователи могут создавать свои профили при регистрации

## 🎨 UI/UX особенности

### Анимации
- **Framer Motion**: Плавные переходы и анимации
- **Hover эффекты**: Интерактивные элементы
- **Loading состояния**: Индикаторы загрузки

### Дизайн система
- **Tailwind CSS**: Утилитарные классы
- **Цветовая схема**: Темная тема с акцентами
- **Типографика**: Моноширинные шрифты для кода

### Адаптивность
- **Mobile-first**: Оптимизация для мобильных устройств
- **Responsive grid**: Адаптивные сетки
- **Touch-friendly**: Удобные для касания элементы

## 🛠️ Технологии

### Frontend
- **Next.js 14** - React фреймворк
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS** - CSS фреймворк
- **Framer Motion** - Анимации
- **Lucide React** - Иконки

### Backend
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - База данных
- **Row Level Security** - Безопасность данных

### Инструменты
- **ESLint** - Линтинг кода
- **Prettier** - Форматирование
- **TypeScript** - Проверка типов

## 🔧 Разработка

### Команды
```bash
npm run dev          # Запуск сервера разработки
npm run build        # Сборка для продакшена
npm run start        # Запуск продакшен сервера
npm run lint         # Проверка кода
```

### Структура компонентов
- **Server Components**: Для статического контента
- **Client Components**: Для интерактивных элементов
- **Layout Components**: Для структуры страниц

## 🚀 Деплой

### Vercel (рекомендуется)
1. Подключите репозиторий к Vercel
2. Настройте переменные окружения
3. Деплой автоматический при push

### Netlify
1. Подключите репозиторий к Netlify
2. Настройте build команды
3. Добавьте переменные окружения

## 📝 Лицензия

MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции
3. Внесите изменения
4. Создайте Pull Request

## 📞 Поддержка

Если у вас есть вопросы или проблемы:
- Создайте Issue в репозитории
- Обратитесь к документации Supabase
- Проверьте логи в консоли браузера

---

**Создано с ❤️ для демонстрации современных веб-технологий**
