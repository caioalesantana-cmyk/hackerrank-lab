const values = [false, 0, "", null, undefined, NaN, "0", [], {}, "false", -1];

for (const v of values) {
  console.log(String(v).padEnd(10), "->", Boolean(v));
}
