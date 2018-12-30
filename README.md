# computer_chess
The initial goal is to make a computer chess program that will beat me in a best of 5 game series.


Sample usage:

1. Make a call to create API that will generate a UUID and associate that with a new chess game.

2. Copy the UUID returned by the API in a post call to move API with the actual move.

Request: 
curl -H "Content-Type: application/json" -d '{"game_id":"c387bc60-0b51-11e9-be73-f5335ff138c4","move_value":"Nc3"}' http://localhost:3000/move/

Response:

Computer played e6

 Board layout    +------------------------+
 8 | r  n  b  q  k  b  n  r |
 7 | .  p  .  p  .  p  p  p |
 6 | .  .  p  .  p  .  .  . |
 5 | .  .  .  .  .  .  .  . |
 4 | p  .  P  P  .  .  .  . |
 3 | P  .  N  .  .  .  .  . |
 2 | .  P  .  .  P  P  P  P |
 1 | R  .  B  Q  K  B  N  R |
   +------------------------+
     a  b  c  d  e  f  g  h
