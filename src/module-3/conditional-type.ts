//a type is depended on another type

type a1 = number;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;

//nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Nayim = {
  wife1: string;
  wife2: String;
};

type CheckProperty<T, K> = K extends keyof T ? true : false;

type CheckWife1 = CheckProperty<Nayim, "wife1">;

type friendsThree = "Monika" | "Mim" | "Sultana";

type RemoveFriend<T, K> = T extends K ? never : T;

type CurrentFriend = RemoveFriend<friendsThree, "Monika">;
