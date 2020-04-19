exports.func = (argc, callback) => {
  return newCollectFunc(argc, Array(argc).fill(undefined), callback);
}

function newCollectFunc(argc, argvo, callback){
  return function collectArg() {
    argv = [...argvo]
    var c = 0;
    for (var i = 0; i < argc; i++) {
      if (argv[i] === undefined) {
        argv[i] = arguments[c];
        c++;
      }
    }
    let countDefined = (c, v) => { return c + (v === undefined ? 0 : 1) }
    defined = argv.reduce(countDefined, 0); 
    if (defined === argc) return callback(...argv);
    return newCollectFunc(argc, argv, callback);
  }
}
