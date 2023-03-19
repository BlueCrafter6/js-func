@echo off
title __Commit__ / Deploy
:ask
set INPUT=
set /P INPUT=Are you sure you want to proceed? (Y/N) %=%
If /I "%INPUT%"=="y" goto yes 
If /I "%INPUT%"=="n" goto no
cls & echo Error & goto ask
:yes
cls
echo [1/2] Committing Files
set INPUT1=
set /P INPUT1=Enter commit message (msg): %=%
git add .
git commit -m "%INPUT1%"
echo === Committed Files, Pushing to repo
git push origin main
echo === Pushed Files
echo.
title Commit / __Deploy__
echo [2/2] Deploying to Firebase
firebase deploy
echo === Deployed
goto exit
:no
cls
goto exit
:exit
cls
pause
EXIT /B 0
pause