const uuidv1 = require('uuid/v1');
var dict = {};
var Chess = require('./node_modules/chess.js').Chess;
var port = 3000;


const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(port);

app.post("/move/", function(req, res) {
    var game_id = req.body.game_id;
    var move_value = req.body.move_value;
    if (dict[game_id] == null) {
        throw new Error("ID " + game_id + "not found");
    } else {
        var curr_game = dict[game_id];
        var user_move = curr_game.move(move_value);
        var computer_move = "";
        if(user_move == null) {
            res.end("Invalid move made by the user " + move_value);
        } else {
            if(!curr_game.game_over()){
                var moves = curr_game.moves();
                var move = moves[Math.floor(Math.random() * moves.length)];
                computer_move = move;
                curr_game.move(move);
            }
            res.end("Computer played " + computer_move + "\n Board layout " + curr_game.ascii());
        }

    }
});

app.get("/create", function(req, res){
    var id = uuidv1();
    dict[id] = new Chess();
   res.end(id);
});



