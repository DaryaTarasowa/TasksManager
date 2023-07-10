import { planResponseDataFixture } from '@plans/api/__tests__/fixtures';
import { deserializePlansResponseData } from '@plans/api/utils';

describe('deserializePlanResponseData', () => {
  it('should transform the response into IPlan structure', () => {
    expect(planResponseDataFixture.planEdges).toHaveProperty('data');
    const deserialized = deserializePlansResponseData(planResponseDataFixture);
    expect(deserialized.planNodes).not.toHaveProperty('data');
    expect(deserialized.planNodes).toHaveLength(19);
    expect(deserialized.planEdges).toHaveLength(15);
  });
});
