import { Trick, TrickCategory, TrickError, TRICK_CATEGORIES } from "../models";
import { CategoriesClient } from "../clients";
/**
 * This Test Suite directly calls the tricking api.
 * ToDo: should mock it with hardcoded data
 */
describe ('Test Categories Client', () => {
  let client: CategoriesClient;

  beforeAll(() => {
    client = new CategoriesClient();
  });

  // Tricks by Category
  it('check if it returns a Trick[] by passing a Category name', async () => {
    const data = await client.getCategoryByName(TrickCategory.VERT_KICK)
                             .then((response: Trick[]) => response)
                             .catch((response: TrickError) => response);

    if (data) {
      try {
        const tricks = data as Trick[];
        if (tricks) {
          expect(tricks.length).toBeGreaterThan(0);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error('Error in API request during unit tests');
    }
  });

  // List of Categories
  it('check if it returns a list of Categories', async () => {
    const data = await client.getAllCategories()
                             .then((response: TrickCategory[]) => response)
                             .catch((response: string) => response);

    if (data) {
      try {
        const categories = data as TrickCategory[];
        if (categories) {
          expect(categories.length).toBeGreaterThan(0);
          expect(new Set(categories)).toMatchObject(TRICK_CATEGORIES);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error('Error in API request during unit tests');
    }
  });
});