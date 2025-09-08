#!/bin/bash

# Скрипт деплоя для Ubuntu сервера
# Использование: ./deploy.sh

set -e

echo "🚀 Начинаем деплой портфолио..."

# Остановка текущего процесса
echo "⏹️ Останавливаем текущий процесс..."
pm2 stop portfolio 2>/dev/null || true

# Обновление кода
echo "📥 Обновляем код..."
git pull origin main

# Установка зависимостей
echo "📦 Устанавливаем зависимости..."
npm ci --production

# Сборка проекта
echo "🔨 Собираем проект..."
npm run build

# Запуск с PM2
echo "▶️ Запускаем приложение..."
pm2 start npm --name portfolio -- start

# Сохранение конфигурации PM2
echo "💾 Сохраняем конфигурацию PM2..."
pm2 save

# Проверка статуса
echo "✅ Проверяем статус..."
pm2 status

echo "🎉 Деплой завершен! Приложение доступно на https://me-bobur.uz"

