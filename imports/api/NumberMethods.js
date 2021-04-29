import { check } from "meteor/check";
import { NumberCollection } from "./NumberCollection";

Meteor.methods({
  "numbers.insert"() {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }
    const randomNumber = Math.random();
    const number = NumberCollection.find({ userId: this.userId }).fetch();
    if (!number) {
      NumberCollection.insert({
        number: randomNumber,
        createdAt: new Date(),
        userId: this.userId,
      });
    }
    console.log("Heyaaa");
    console.log("this is the number ", randomNumber);

    return randomNumber;
  },
  "numbers.getMyNumber"() {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }
    const number = NumberCollection.find({ userId: this.userId }).fetch();
    console.log("This is the number!", number);
    return number;
  },

  "numbers.remove"(numberId) {
    check(numberId, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    NumberCollection.remove(numberId);
  },
});
