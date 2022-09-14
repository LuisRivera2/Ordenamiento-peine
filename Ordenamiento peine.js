let vector = [54,8,12,7,13,10,45,24];

function comb_sort(vector){
    let gap = 20;
    let permutación = true;
    let actual;
    while ((permutación) || (gap>1)) {
        permutación = false;
        gap = gap / 1.3;
        if (gap<1) gap=1;
        for (actual=0; actual< 20-gap; actual++) {
            if (vector[actual]>vector[actual+gap]){
                permutación = true;
                // Intercambiamos los dos elementos
                let temp = vector[actual];
                vector[actual] = vector[actual+gap];
                vector[actual+gap] = temp;
            }
        }
    }
  return vector;
}

console.log(comb_sort(vector));