"use strict";

function waitTask(name, time) {
  setTimeout(() => {
    console.log(`Task ${name} completed.`);
  }, time);
}

async function runAll() {
  waitTask("A", 1500);
  waitTask("B", 500);
  waitTask("C", 300);
}

runAll();
