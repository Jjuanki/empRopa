@echo off
echo ===================================================
echo   INICIANDO SERVIDOR LOCAL - VOID WEB
echo ===================================================
echo Abriendo en http://localhost:3000 ...
echo Presiona Ctrl + C en esta ventana para detenerlo.
echo.

start http://localhost:3000
npx serve . -l 3000
