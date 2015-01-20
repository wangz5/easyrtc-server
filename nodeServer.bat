@ECHO OFF
@SET LOG=D:/Server/EasyRTC/EasyRTCServer/logs/
@SET PID=D:/Server/EasyRTC/EasyRTCServer/pid/forever.pid
@SET APP_PATH=D:/Server/EasyRTC/EasyRTCServer/
@SET APP=server.js

forever -p $APP_PATH -l %LOG%access.log -e %LOG%error.log -o %LOG%out.log -a --pidFile %PID% start %APP%