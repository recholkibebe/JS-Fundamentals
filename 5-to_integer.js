const x = parseInt(process.argv[2]);

if (isNaN(x)) {
	  console.log("Missing number of occurrences");
} else {
	  let result = "";
	  for (let i = 0; i < x; i++) {
		      result += "C is fun\n";
		    }
	  console.log(result.trim());
}

