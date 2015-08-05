key = 0;
document.onkeydown = function(e) {key = e.keyCode};
document.onkeyup = function() {key = 0}

var Brainfuck = function(Input, Output) {
	this.Input = Input,
	this.Output = Output,
	this.track = [],
	this.index = 0,
	this.step = 0,
	this.cycles = [],
	this.currentCharacter = '',
	this.play = function(BrainfuckCode) {
		for (var j = 0; j < 30000; j ++) {
			this.track[j] = 0;
		}
		while (this.step < BrainfuckCode.length) {

			this.currentCharacter = String.fromCharCode(this.track[this.index]);
			
			switch (BrainfuckCode[this.step]) {
				case '>': this.index ++; this.step ++;
					break;
				case '<': this.index --; this.step ++;
					break;
				case '[': if (this.track[this.index] == 0) {
							this.step = BrainfuckCode.indexOf(this.step, ']') + 1} 
							else {this.cycles.push(this.step); this.step ++};
					break;
				case ']': if (this.track[this.index] !== 0) {
							this.step = this.cycles[this.cycles.length-1]; this.cycles.splice(-1, 1)} 
							else {this.cycles.splice(-1, 1); this.step ++}
					break;
				case '+': this.track[this.index] ++; this.step ++;
					break;
				case '-': this.track[this.index] --; this.step ++;
					break;
				case '.': document.write(this.currentCharacter); this.step ++;
					break;
				case ',': if(key !== 0) {this.track[this.index] = key; this.step ++}
					break;
			}
		}
	}
}
var bf = new Brainfuck();
bf.play('++++,.');
