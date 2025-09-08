#!/bin/bash

# Скрипт первоначальной настройки Ubuntu сервера
# Выполнять с правами root или через sudo

set -e

echo "🔧 Начинаем настройку Ubuntu сервера для портфолио..."

# Обновление системы
echo "📦 Обновляем систему..."
apt update && apt upgrade -y

# Установка необходимых пакетов
echo "📥 Устанавливаем необходимые пакеты..."
apt install -y curl wget git nginx certbot python3-certbot-nginx ufw

# Установка Node.js 18
echo "📦 Устанавливаем Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Установка PM2
echo "📦 Устанавливаем PM2..."
npm install -g pm2

# Создание пользователя deploy
echo "👤 Создаем пользователя deploy..."
adduser --disabled-password --gecos "" deploy
usermod -aG sudo deploy

# Создание директории для проекта
echo "📁 Создаем директории..."
mkdir -p /var/www/portfolio
mkdir -p /var/log/portfolio
chown -R deploy:deploy /var/www/portfolio
chown -R deploy:deploy /var/log/portfolio

# Настройка UFW
echo "🔥 Настраиваем файрвол..."
ufw allow ssh
ufw allow 'Nginx Full'
ufw allow 3000
ufw --force enable

# Настройка Nginx
echo "🌐 Настраиваем Nginx..."
cat > /etc/nginx/sites-available/me-bobur.uz << 'EOF'
server {
    listen 80;
    server_name me-bobur.uz www.me-bobur.uz;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Активация сайта
ln -sf /etc/nginx/sites-available/me-bobur.uz /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
systemctl enable nginx

# Настройка автозапуска PM2
echo "🔄 Настраиваем автозапуск PM2..."
pm2 startup
pm2 save

echo "✅ Настройка сервера завершена!"
echo "📝 Следующие шаги:"
echo "1. Настройте DNS записи для домена me-bobur.uz"
echo "2. Получите SSL сертификат: sudo certbot --nginx -d me-bobur.uz"
echo "3. Склонируйте репозиторий: git clone <your-repo> /var/www/portfolio"
echo "4. Запустите деплой: ./deploy.sh"



