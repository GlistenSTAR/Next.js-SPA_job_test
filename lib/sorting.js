function sortJsonArrayByProperty(objArray, prop, direction){
  if (arguments.length<2) throw new Error("sortJsonArrayByProp requires 2 arguments");
  var direct = arguments.length>2 ? direction : 1; //Default to ascending

    var propPath = (prop.constructor===Array) ? prop : prop.split(".");

    return objArray.sort(function(a,b){
        
        for (var p in propPath){
            if (a[propPath[p]] && b[propPath[p]]){
                a = a[propPath[p]];
                b = b[propPath[p]];
            }
        }
        // convert numeric strings to integers
        // a = a.match(/^\d+$/) ? +a : a;
        // b = b.match(/^\d+$/) ? +b : b;
        return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
    });
}

export default sortJsonArrayByProperty;