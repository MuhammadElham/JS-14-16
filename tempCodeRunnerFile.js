var temp;
var std_score = [320, 230, 480, 120];
console.log(std_score);
for (i = 1; i < std_score.length; i++) {
  for (j = 0; j < i; j++) {
    if (std_score[j] > std_score[i]) {
      temp = std_score[i];
      std_score[i] = std_score[j];
      std_score[j] = temp;
    }
  }
}
console.log(std_score);
