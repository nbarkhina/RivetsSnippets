rivets.formatters.ev = function (value,arg) { return eval(value + arg); }
rivets.formatters.ev_string = function (value, arg) { let eval_string = "'" + value + "'" + arg; return eval(eval_string); }
