//AVE

var counters = [];

/*
* this function increments the counters array.
* if undefined still, make it start at 1, 
* else increment it.
*/
function countNewInstruction(opcode) {
	if (opcode in counters){
    	counters[opcode]++;
	} else {
		counters[opcode] = 1;	
	}
};



/*
* these functions and variables are used to measure
* the time that the cpu is working as well as the number
* of instructions executed by the emulator.
*/
var totalTime = 0;
var t0 = 0;
var t1 = 0;
var numberOfInstructionsMeasured = 0;

function startMeasuringTime() {
	t0 = performance.now();
}

function stopMeasuringTime() {
	t1 = performance.now();
	totalTime += (t1-t0);
}