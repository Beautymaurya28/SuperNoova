@echo off
cd /d "d:\SuperNoova"
git add .
git commit -m "Auto update %date% %time%"
git push origin main
