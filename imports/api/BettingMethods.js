import { check } from "meteor/check";
import { BettingCollection } from "./BettingCollection";

Meteor.methods({
  "bets.insert"(text) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    BettingCollection.insert({
      text,
      createdAt: new Date(),
      userId: this.userId,
    });
  },

  "bets.remove"(betId) {
    check(betId, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    BettingCollection.remove(betId);
  },

  "bets.setIsChecked"(betId, number) {
    check(betId, String);
    check(number, Boolean);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    BettingCollection.update(betId, {
      $set: {
        number: number,
      },
    });
  },
});
