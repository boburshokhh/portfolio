# 🚀 Инструкция по деплою портфолио на Ubuntu сервер

## 📋 Требования

- Ubuntu 20.04+ сервер
- Домен me-bobur.uz с настроенными DNS записями
- SSH доступ к серверу

## 🔧 Пошаговая настройка

### 1. Подключение к серверу
```bash
ssh root@your-server-ip
```

### 2. Первоначальная настройка сервера
```bash
# Скачайте скрипт настройки
wget https://raw.githubusercontent.com/your-username/portfolio/main/server-setup.sh
chmod +x server-setup.sh
sudo ./server-setup.sh
```

### 3. Настройка DNS записей
В панели управления доменом добавьте:
```
A    me-bobur.uz    ->    YOUR_SERVER_IP
A    www.me-bobur.uz    ->    YOUR_SERVER_IP
```

### 4. Получение SSL сертификата
```bash
sudo certbot --nginx -d me-bobur.uz -d www.me-bobur.uz
```

### 5. Клонирование проекта
```bash
cd /var/www
sudo git clone https://github.com/your-username/portfolio.git
sudo chown -R deploy:deploy portfolio
```

### 6. Первый деплой
```bash
cd /var/www/portfolio
sudo -u deploy npm install
sudo -u deploy npm run build
sudo -u deploy pm2 start ecosystem.config.js
```

## 🔄 Автоматический деплой

### Настройка GitHub Actions (опционально)
Создайте `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Ubuntu Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.KEY }}
        script: |
          cd /var/www/portfolio
          git pull origin main
          npm ci --production
          npm run build
          pm2 restart portfolio
```

### Ручной деплой
```bash
cd /var/www/portfolio
./deploy.sh
```

## 📊 Мониторинг

### Проверка статуса
```bash
pm2 status
pm2 logs portfolio
```

### Перезапуск приложения
```bash
pm2 restart portfolio
```

### Просмотр логов
```bash
pm2 logs portfolio --lines 100
tail -f /var/log/portfolio/combined.log
```

## 🔒 Безопасность

### Обновление системы
```bash
sudo apt update && sudo apt upgrade -y
```

### Проверка файрвола
```bash
sudo ufw status
```

### Обновление SSL сертификатов
```bash
sudo certbot renew --dry-run
```

## 🛠️ Устранение неполадок

### Приложение не запускается
```bash
pm2 logs portfolio
systemctl status nginx
```

### Проблемы с Nginx
```bash
nginx -t
systemctl restart nginx
```

### Проверка портов
```bash
netstat -tlnp | grep :3000
netstat -tlnp | grep :80
netstat -tlnp | grep :443
```

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи: `pm2 logs portfolio`
2. Проверьте статус сервисов: `systemctl status nginx`
3. Проверьте конфигурацию: `nginx -t`

## 🔄 Обновление

Для обновления приложения:
```bash
cd /var/www/portfolio
git pull origin main
npm ci --production
npm run build
pm2 restart portfolio
```



