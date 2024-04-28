// Q#1
// var std_name = [];
// Q#2
// var std_name = [];
// OR
// var std_name = new Array();
// Q#3
// var a = ["Muhammad", "Elham", "Waheed"];
// console.log(a);
// Q#4
// var num = [1, 2, 3, 4, 5];
// console.log(num);
// Q#5
// var bool = [true, false];
// console.log(bool);
// Q#6
// var mix_arr = ["abc", 123, true];
// console.log(mix_arr);
// Q#7
// document.write("<h1>Qualification:</h1>");
// var qualification = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];
// var j;
// for (i = 0; i < qualification.length; i++) {
//   j = i + 1;
//   document.write("<h3>" + j + ") " + qualification[i] + "</h3> <br>");
// }
// Q#8
// var per;
// var std_name = ["Michael", "John", "Tony"];
// var std_score = [320, 230, 480];
// for (i = 0; i < std_name.length; i++) {
//   per = (std_score[i] / 500) * 100;
//   console.log(
//     "Score of " +
//       std_name[i] +
//       " is " +
//       std_score[i] +
//       "." +
//       " Percentage: " +
//       per +
//       "%");
// }
// Q#9
// var enter;
// console.log("<h3>Before</h3>");
// var color_name = ["red", "yellow", "green"];
// for (i = 0; i < color_name.length; i++) {
//   console.log(color_name[i]);
// }
// // a)
// // var enter = prompt("Whats color do you want to add at begining of Array:");
// color_name.unshift("voilet");
// console.log("<h3>Add Start</h3>");
// for (i = 0; i < color_name.length; i++) {
//   console.log(color_name[i]);
// }
// // b) (Add color End)
// // var enter = prompt("Whats color do you want to add at end of Array:");
// color_name.push("Lolly");
// console.log("<h3>Add End</h3>");
// for (i = 0; i < color_name.length; i++) {
//   console.log(color_name[i]);
// }
// // c) (Add 2 color Start)
// color_name.unshift("Black", "White");
// console.log("<h3>Add 2 color Start</h3>");
// for (i = 0; i < color_name.length; i++) {
//   console.log(color_name[i]);
// }
// // d) (Delete 1st color)
// color_name.shift();
// console.log("<h3>Delete 1st color</h3>");
// for (i = 0; i < color_name.length; i++) {
//   console.log(color_name[i]);
// }
// // e) (Delete Last color)
// color_name.pop();
// console.log("<h3>Delete Last color</h3>");
// for (i = 0; i < color_name.length; i++) {
//   console.log(color_name[i]);
// }
// // f) (Indexing Add color)
// color_name.splice(1,0,"moon");
// console.log("<h3>Indexing Add color</h3>");
// for (i = 0; i < color_name.length; i++) {
//   console.log(color_name[i]);
// }
// // g) (Indexing Delete color)
// color_name.splice(1,1);
// console.log("<h3>Indexing Delete color</h3>");
// for (i = 0; i < color_name.length; i++) {
//   console.log(color_name[i]);
// }

// Q#10
// var temp;
// var std_score = [320, 230, 480, 120];
// console.log(std_score);
// for (i = 1; i < std_score.length; i++) {
//   for (j = 0; j < i; j++) {
//     if (std_score[j] > std_score[i]) {
//       temp = std_score[i];
//       std_score[i] = std_score[j];
//       std_score[j] = temp;
//     }
//   }
// }
// console.log(std_score);

// Q#11
// var city_name = ["Karachi", "Islamabad", "Lahore", "Peshaware", "Quetta"];
// console.log("Cities List:");
// console.log(city_name);
// console.log("Selected Cities List:");
// var copy = city_name.slice(3);
// console.log(copy);

// Q#12
// var arr = ["This", "is", "my", "cat"];
// console.log("Array:-");
// console.log(arr);
// console.log("String:-");
// // var str = arr.toString().replace(/,/g, " ");
// var str = arr.join(" ");
// console.log(str);

// Q#13
// var alpha = ["A", "B", "C", "D", "E"];
// var queue = [];
// var show;
// console.log("First In:-");
// for (var i = 0; i < alpha.length; i++) {
//   queue.push(alpha[i]);
// }
// console.log("Queue = " + queue);
// console.log("First Out:-");
// while (queue.length > 0) {
//   show = queue.shift();
//   console.log(show);
// }

// Q#14
// var arr = ["A", "B", "C", "D", "E"];
// console.log("Array = " + arr);
// var queue = [];
// var show;
// console.log("First In:-");

// for (i = 0; i < arr.length; i++) {
//   queue.push(arr[i]);
// }
// console.log("Queue = " + queue);

// console.log("Last Out:-");
// for (i = 0; i < arr.length; i++) {
//   show = queue.pop();
//   console.log(show);
// }

// Q#15
// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// for (i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }
