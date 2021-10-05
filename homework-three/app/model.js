var MODEL = (function () {
  var _getMyVariable = function (pageID, callback) {
    let newName = "_" + pageID + "PageInfo";

    // $("#app").html(eval(newName));
    if (callback) {
      callback(newName);
    }
  };
  return {
    getMyVariable: _getMyVariable,
  };
})();
