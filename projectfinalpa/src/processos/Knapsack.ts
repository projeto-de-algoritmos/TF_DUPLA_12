export default function knapsack(items: Array<any>, capacity: number, param: string){
    var memo:any = []; 
    for (var i = 0; i < items.length; i++) {
      var row = [];
      for (var cap = 1; cap <= capacity; cap++) {
        row.push(getSolution(i,cap, param));
      }
      memo.push(row);
    }
  
    return(getLast());
  
    function getLast(){
      var lastRow = memo[memo.length - 1];
      return lastRow[lastRow.length - 1];
    }
  
    function getSolution(row: number,cap: number, mode: string){
      const NO_SOLUTION = {maxValue:0, subset:[]};
      var col = cap - 1;
      var lastItem = items[row];
      var remaining = cap - lastItem.weight;
      var lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
      var lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;
      if(remaining < 0){
        return lastSolution;
      }
      var lastValue = lastSolution.maxValue;
      var lastSubValue = lastSubSolution.maxValue;
      var newValue;
      if(mode === 'hp'){
        newValue = lastSubValue + lastItem.stats[0].base_stat;
      }
      else if(mode === 'attack'){
        newValue = lastSubValue + lastItem.stats[1].base_stat;
      }
      else if(mode === 'defense'){
        newValue = lastSubValue + lastItem.stats[2].base_stat;
      }
      else if(mode === 'special-attack'){
        newValue = lastSubValue + lastItem.stats[3].base_stat;
      }
      else if(mode === 'special-defense'){
        newValue = lastSubValue + lastItem.stats[4].base_stat;
      }
      else if(mode === 'speed'){
        newValue = lastSubValue + lastItem.stats[5].base_stat;
      }
      if(newValue >= lastValue){
        var _lastSubSet = lastSubSolution.subset.slice();
        _lastSubSet.push(lastItem);
        return {maxValue: newValue, subset:_lastSubSet};
      }else{
        return lastSolution;
      }
    }
}