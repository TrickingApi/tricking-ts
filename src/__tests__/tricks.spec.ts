import { Trick, TrickCategory, TrickError } from '../models';
import { TricksClient } from '../clients';
/**
 * This Test Suite directly calls the tricking api...tbh should mock it with hardcoded data..will create issue
 */
describe ('Test Tricks Client', () => {
  let client: TricksClient;

  beforeAll(() => {
    client = new TricksClient();
    
  });

  // Tricks
  it('check if it returns a Trick passing an id', async () => {
    const data = await client.getTrickByName('pop360')
                             .then((response: Trick) => response)
                             .catch((response: TrickError) => response);

    if (data) {
      try {
        const trick = data as Trick;
        if (trick) {
          expect(trick.id).toBe('pop360');
          expect(trick.name).toBe('Pop 360');
          expect(trick.categories).toHaveLength(1);
          expect(trick.categories[0]).toBe(TrickCategory.VERT_KICK);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error('Error in API request during unit tests');
    }
  });

  it('check if it returns a TrickError passing an id that can not be found', async () => {
    const data = await client.getTrickByName('quintFullSnapu')
                                                        .then((response: Trick) => response)
                                                        .catch((response: TrickError) => response);
    expect((data as TrickError).success).toBeFalsy();
  })
});