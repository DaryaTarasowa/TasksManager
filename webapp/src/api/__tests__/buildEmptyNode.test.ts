import { buildEmptyNode } from '@plans/api/utils';
import { TaskType } from '@plans/constants';

const commonData = {
  coordinates: { x: 10, y: 10 },
  name: 'Task name',
  planId: 1,
};

const workflowTask = { ...commonData, taskType: TaskType.TaskWorkflow };
const slackTask = { ...commonData, taskType: TaskType.TaskSlack };
const httpTask = { ...commonData, taskType: TaskType.TaskHttp };

describe('buildEmptyNode()', () => {
  it('slack', () => {
    expect(buildEmptyNode(slackTask)).toEqual({ ...commonData, task: { type: 'slack' }, taskType: 'http' });
  });

  it('http', () => {
    expect(buildEmptyNode(httpTask)).toEqual({ ...httpTask, task: { type: 'basic' } });
  });

  it('workflow', () => {
    expect(buildEmptyNode(workflowTask)).toEqual({
      ...workflowTask,
      task: { workflowId: '' },
    });
  });
});
