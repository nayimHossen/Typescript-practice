//spreed operator

const friends = ["Tamanna", "Bristy", "Salma"];
const newFriends = ["Kashem", "Khirul", "Tania"];

friends.push(...newFriends);

console.log(friends);

//rest operator

const greetFriends = (...friends: string[]): void => {
  friends.forEach((fr) => console.log(`Hi ${fr}`));
};

greetFriends("Kashem", "Hashem", "Torni", "Bangla", "Shokina");
