import { faker } from "@faker-js/faker";

import { Review, ReviewedBook, addReview } from "../challenge";

describe("🌶️🌶️🌶️ Challenge", () => {
  let book: ReviewedBook;
  let newReview: Review;

  beforeEach(() => {
    book = {
      title: faker.book.title(),
      author: faker.book.author(),
      publishedYear: faker.date.past().getFullYear(),
      genre: faker.book.genre(),
    };
    newReview = {
      reviewer: faker.person.fullName(),
      comment: faker.lorem.sentence(),
    };
  });

  describe("addReview", () => {
    it("should add a review to an exist array of reviews", () => {
      book.reviews = [
        {
          reviewer: faker.person.fullName(),
          comment: faker.lorem.sentence(),
        },
      ];
      const { reviewer, comment } = newReview;
      const updatedBook = addReview(book, reviewer, comment);
      expect(updatedBook.reviews).toContainEqual(newReview);
      expect(updatedBook?.reviews?.length).toBe(2);
    });

    it("should create a review array if one didn't already exist", () => {
      const { reviewer, comment } = newReview;
      const updatedBook = addReview(book, reviewer, comment);
      expect(updatedBook.reviews).toContainEqual(newReview);
    });
  });
});
