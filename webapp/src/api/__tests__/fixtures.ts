/* eslint-disable sort-keys-fix/sort-keys-fix */

export const planResponseDataFixture = {
  associatedPeople: [
    {
      authorizationPermission: {
        isCreatedBy: true,
        policyName: null,
        policyTag: 'plan_owner',
        resourceOperationList: [
          {
            operations: ['share', 'delete', 'update', 'execute', 'read'],
            policyTag: 'plan_owner',
            resourceType: 'plan',
          },
        ],
        workspaceAdmin: true,
      },
      email: 'admin@trifacta.local',
      id: 1,
      name: 'Administrator',
    },
  ],
  cpProject: null,
  createdAt: '2022-11-15T09:37:38.000Z',
  creator: {
    email: 'admin@trifacta.local',
    id: 1,
    name: 'Administrator',
  },
  description: '',
  id: 13,
  name: 'Created using tf plans',
  notificationsEnabled: true,
  originalPlan: null,
  planEdges: {
    data: [
      {
        createdAt: '2022-11-15T09:38:14.000Z',
        creator: {
          id: 1,
        },
        id: 75,
        inPlanNodeId: 55,
        outPlanNodeId: 56,
        plan: {
          id: 13,
        },
        statusRule: 'success',
        updatedAt: '2022-11-15T09:38:14.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-15T09:38:20.000Z',
        creator: {
          id: 1,
        },
        id: 76,
        inPlanNodeId: 55,
        outPlanNodeId: 57,
        plan: {
          id: 13,
        },
        statusRule: 'always',
        updatedAt: '2022-11-15T09:38:31.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-15T09:38:27.000Z',
        creator: {
          id: 1,
        },
        id: 77,
        inPlanNodeId: 55,
        outPlanNodeId: 58,
        plan: {
          id: 13,
        },
        statusRule: 'failure',
        updatedAt: '2022-11-15T09:38:30.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T09:58:37.000Z',
        creator: {
          id: 1,
        },
        id: 93,
        inPlanNodeId: 56,
        outPlanNodeId: 73,
        plan: {
          id: 13,
        },
        statusRule: 'always',
        updatedAt: '2022-11-23T09:58:37.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-15T14:14:43.000Z',
        creator: {
          id: 1,
        },
        id: 79,
        inPlanNodeId: 59,
        outPlanNodeId: 54,
        plan: {
          id: 13,
        },
        statusRule: 'always',
        updatedAt: '2022-11-15T14:14:43.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T09:58:33.000Z',
        creator: {
          id: 1,
        },
        id: 91,
        inPlanNodeId: 72,
        outPlanNodeId: 75,
        plan: {
          id: 13,
        },
        statusRule: 'failure',
        updatedAt: '2022-11-23T09:58:33.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T09:58:34.000Z',
        creator: {
          id: 1,
        },
        id: 92,
        inPlanNodeId: 73,
        outPlanNodeId: 72,
        plan: {
          id: 13,
        },
        statusRule: 'always',
        updatedAt: '2022-11-23T09:58:34.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T09:59:11.000Z',
        creator: {
          id: 1,
        },
        id: 96,
        inPlanNodeId: 74,
        outPlanNodeId: 78,
        plan: {
          id: 13,
        },
        statusRule: 'failure',
        updatedAt: '2022-11-23T09:59:11.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T09:58:32.000Z',
        creator: {
          id: 1,
        },
        id: 90,
        inPlanNodeId: 75,
        outPlanNodeId: 74,
        plan: {
          id: 13,
        },
        statusRule: 'success',
        updatedAt: '2022-11-23T09:58:32.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T10:53:47.000Z',
        creator: {
          id: 1,
        },
        id: 100,
        inPlanNodeId: 76,
        outPlanNodeId: 81,
        plan: {
          id: 13,
        },
        statusRule: 'always',
        updatedAt: '2022-11-23T10:53:47.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T09:59:06.000Z',
        creator: {
          id: 1,
        },
        id: 94,
        inPlanNodeId: 77,
        outPlanNodeId: 76,
        plan: {
          id: 13,
        },
        statusRule: 'always',
        updatedAt: '2022-11-23T09:59:06.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T09:59:08.000Z',
        creator: {
          id: 1,
        },
        id: 95,
        inPlanNodeId: 78,
        outPlanNodeId: 77,
        plan: {
          id: 13,
        },
        statusRule: 'success',
        updatedAt: '2022-11-23T09:59:08.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T10:53:37.000Z',
        creator: {
          id: 1,
        },
        id: 99,
        inPlanNodeId: 79,
        outPlanNodeId: 82,
        plan: {
          id: 13,
        },
        statusRule: 'always',
        updatedAt: '2022-11-23T10:53:37.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T10:53:35.000Z',
        creator: {
          id: 1,
        },
        id: 98,
        inPlanNodeId: 80,
        outPlanNodeId: 79,
        plan: {
          id: 13,
        },
        statusRule: 'always',
        updatedAt: '2022-11-23T10:53:35.000Z',
        updater: {
          id: 1,
        },
      },
      {
        createdAt: '2022-11-23T10:53:33.000Z',
        creator: {
          id: 1,
        },
        id: 97,
        inPlanNodeId: 81,
        outPlanNodeId: 80,
        plan: {
          id: 13,
        },
        statusRule: 'always',
        updatedAt: '2022-11-23T10:53:33.000Z',
        updater: {
          id: 1,
        },
      },
    ],
  },
  planNodes: {
    data: [
      {
        coordinates: {
          x: 150,
          y: 240,
        },
        createdAt: '2022-11-15T09:37:56.000Z',
        creator: {
          id: 1,
        },
        handle: '32',
        httpTask: {
          body: '{"channel":"#random"}',
          headers: {
            Authorization: 'Bearer pppp',
            'Content-type': 'application/json; charset=utf-8',
          },
          id: 54,
          maxRetries: 3,
          createdAt: '2022-11-15T09:37:56.000Z',
          method: 'post',
          planNode: {
            id: 54,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: false,
          sslVerification: true,
          type: 'slack',
          url: 'https://slack.com/api/chat.postMessage',
          updatedAt: '2022-11-15T09:37:56.000Z',
        },
        id: 54,
        name: 'Post a message',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-15T14:14:41.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 300,
          y: 240,
        },
        createdAt: '2022-11-15T09:38:08.000Z',
        creator: {
          id: 1,
        },
        handle: 'zj',
        httpTask: {
          body: '',
          headers: {},
          id: 55,
          maxRetries: 3,
          createdAt: '2022-11-15T09:38:08.000Z',
          method: 'post',
          planNode: {
            id: 55,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'http://localhost.com',
          updatedAt: '2022-11-15T09:38:08.000Z',
        },
        id: 55,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-15T14:14:41.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 495,
          y: 126,
        },
        createdAt: '2022-11-15T09:38:14.000Z',
        creator: {
          id: 1,
        },
        handle: '6x',
        httpTask: {
          body: '',
          headers: {},
          id: 56,
          maxRetries: 3,
          createdAt: '2022-11-15T09:38:14.000Z',
          method: 'post',
          planNode: {
            id: 56,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'http://localhost.com:3000',
          updatedAt: '2022-11-15T13:50:46.000Z',
        },
        id: 56,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:29:56.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 496,
          y: 240,
        },
        createdAt: '2022-11-15T09:38:20.000Z',
        creator: {
          id: 1,
        },
        handle: '8o',
        httpTask: {
          body: '{"channel":"dqwdwqdwqd"}',
          headers: {
            Authorization: 'Bearer adqwdqw',
            'Content-type': 'application/json; charset=utf-8',
          },
          id: 57,
          maxRetries: 3,
          createdAt: '2022-11-15T09:38:20.000Z',
          method: 'post',
          planNode: {
            id: 57,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: false,
          sslVerification: true,
          type: 'slack',
          url: 'https://slack.com/api/chat.postMessage',
          updatedAt: '2022-11-15T09:38:20.000Z',
        },
        id: 57,
        name: 'Post a message',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:46:44.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 496,
          y: 437,
        },
        createdAt: '2022-11-15T09:38:27.000Z',
        creator: {
          id: 1,
        },
        handle: '9l',
        httpTask: {
          body: '{"channel":"wqcqwc"}',
          headers: {
            Authorization: 'Bearer ascsa',
            'Content-type': 'application/json; charset=utf-8',
          },
          id: 58,
          maxRetries: 3,
          createdAt: '2022-11-15T09:38:27.000Z',
          method: 'post',
          planNode: {
            id: 58,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: false,
          sslVerification: true,
          type: 'slack',
          url: 'https://slack.com/api/chat.postMessage',
          updatedAt: '2022-11-15T09:38:27.000Z',
        },
        id: 58,
        name: 'Post a message',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:29:56.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 42,
          y: 240,
        },
        createdAt: '2022-11-15T14:14:40.000Z',
        creator: {
          id: 1,
        },
        handle: 'q5',
        httpTask: {
          body: '{"channel":"oi"}',
          headers: {
            Authorization: 'Bearer kjk',
            'Content-type': 'application/json; charset=utf-8',
          },
          id: 59,
          maxRetries: 3,
          createdAt: '2022-11-15T14:14:40.000Z',
          method: 'post',
          planNode: {
            id: 59,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: false,
          sslVerification: true,
          type: 'slack',
          url: 'https://slack.com/api/chat.postMessage',
          updatedAt: '2022-11-15T14:14:40.000Z',
        },
        id: 59,
        name: 'Post a message',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2023-01-16T09:37:25.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 664,
          y: 263,
        },
        createdAt: '2022-11-23T09:58:14.000Z',
        creator: {
          id: 1,
        },
        handle: 'wg',
        httpTask: {
          body: '',
          headers: {},
          id: 72,
          maxRetries: 3,
          createdAt: '2022-11-23T09:58:14.000Z',
          method: 'post',
          planNode: {
            id: 72,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T09:58:14.000Z',
        },
        id: 72,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:29:56.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 592,
          y: 130,
        },
        createdAt: '2022-11-23T09:58:19.000Z',
        creator: {
          id: 1,
        },
        handle: '5m',
        httpTask: {
          body: '',
          headers: {},
          id: 73,
          maxRetries: 3,
          createdAt: '2022-11-23T09:58:19.000Z',
          method: 'post',
          planNode: {
            id: 73,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T09:58:19.000Z',
        },
        id: 73,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:29:55.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 857,
          y: 263,
        },
        createdAt: '2022-11-23T09:58:23.000Z',
        creator: {
          id: 1,
        },
        handle: '79',
        httpTask: {
          body: '',
          headers: {},
          id: 74,
          maxRetries: 3,
          createdAt: '2022-11-23T09:58:23.000Z',
          method: 'post',
          planNode: {
            id: 74,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T09:58:23.000Z',
        },
        id: 74,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:29:55.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 766,
          y: 275,
        },
        createdAt: '2022-11-23T09:58:28.000Z',
        creator: {
          id: 1,
        },
        handle: 'jz',
        httpTask: {
          body: '',
          headers: {},
          id: 75,
          maxRetries: 3,
          createdAt: '2022-11-23T09:58:29.000Z',
          method: 'post',
          planNode: {
            id: 75,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T09:58:29.000Z',
        },
        id: 75,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:29:55.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 863,
          y: 726,
        },
        createdAt: '2022-11-23T09:58:56.000Z',
        creator: {
          id: 1,
        },
        handle: 'pm',
        httpTask: {
          body: '',
          headers: {},
          id: 76,
          maxRetries: 3,
          createdAt: '2022-11-23T09:58:56.000Z',
          method: 'post',
          planNode: {
            id: 76,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T09:58:56.000Z',
        },
        id: 76,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2023-01-20T10:47:30.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 945,
          y: 464,
        },
        createdAt: '2022-11-23T09:59:00.000Z',
        creator: {
          id: 1,
        },
        handle: 'd8',
        httpTask: {
          body: '',
          headers: {},
          id: 77,
          maxRetries: 3,
          createdAt: '2022-11-23T09:59:00.000Z',
          method: 'post',
          planNode: {
            id: 77,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T09:59:00.000Z',
        },
        id: 77,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:29:55.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 957,
          y: 272,
        },
        createdAt: '2022-11-23T09:59:04.000Z',
        creator: {
          id: 1,
        },
        handle: 'rx',
        httpTask: {
          body: '',
          headers: {},
          id: 78,
          maxRetries: 3,
          createdAt: '2022-11-23T09:59:04.000Z',
          method: 'post',
          planNode: {
            id: 78,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T09:59:04.000Z',
        },
        id: 78,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:29:55.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 1331,
          y: 645,
        },
        createdAt: '2022-11-23T10:53:17.000Z',
        creator: {
          id: 1,
        },
        handle: 'ln',
        httpTask: {
          body: '',
          headers: {},
          id: 79,
          maxRetries: 3,
          createdAt: '2022-11-23T10:53:17.000Z',
          method: 'post',
          planNode: {
            id: 79,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T10:53:17.000Z',
        },
        id: 79,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-23T10:53:44.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 1207,
          y: 645,
        },
        createdAt: '2022-11-23T10:53:20.000Z',
        creator: {
          id: 1,
        },
        handle: '07',
        httpTask: {
          body: '',
          headers: {},
          id: 80,
          maxRetries: 3,
          createdAt: '2022-11-23T10:53:20.000Z',
          method: 'post',
          planNode: {
            id: 80,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T10:53:20.000Z',
        },
        id: 80,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-23T10:53:44.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 1083,
          y: 674,
        },
        createdAt: '2022-11-23T10:53:26.000Z',
        creator: {
          id: 1,
        },
        handle: 'n3',
        httpTask: {
          body: '',
          headers: {},
          id: 81,
          maxRetries: 3,
          createdAt: '2022-11-23T10:53:26.000Z',
          method: 'post',
          planNode: {
            id: 81,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T10:53:26.000Z',
        },
        id: 81,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2022-11-24T08:29:41.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 1169,
          y: 239,
        },
        createdAt: '2022-11-23T10:53:30.000Z',
        creator: {
          id: 1,
        },
        handle: 'g3',
        httpTask: {
          body: '',
          headers: {},
          id: 82,
          maxRetries: 3,
          createdAt: '2022-11-23T10:53:30.000Z',
          method: 'post',
          planNode: {
            id: 82,
          },
          sampleResponseBody: '',
          sampleResponseHeaders: {},
          secretKey: '',
          shouldUpdateSampleResponse: true,
          sslVerification: true,
          type: 'basic',
          url: 'https://example.com/endpoint',
          updatedAt: '2022-11-23T10:53:30.000Z',
        },
        id: 82,
        name: 'Send HTTP request',
        plan: {
          id: 13,
        },
        taskType: 'http',
        updatedAt: '2023-01-17T22:46:53.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 280,
          y: 108,
        },
        createdAt: '2022-12-15T09:09:30.000Z',
        creator: {
          id: 1,
        },
        handle: 'o5',
        id: 100,
        name: 'Run Untitled Flow',
        plan: {
          id: 13,
        },
        task: {
          createdAt: '2022-12-15T09:09:30.000Z',
          flow: {
            defaultOutputDir: null,
            description: null,
            createdAt: '2022-10-17T11:43:16.000Z',
            fromExampleFlowHash: null,
            fromExampleFlowName: null,
            id: 1,
            associatedPeople: {
              data: [
                {
                  email: 'admin@trifacta.local',
                  name: 'Administrator',
                  authorizationPermission: {
                    policyTag: 'flow_owner',
                    policyName: null,
                    resourceOperationList: [
                      {
                        operations: ['share', 'delete', 'update', 'execute', 'read'],
                        policyTag: 'flow_owner',
                        resourceType: 'flow',
                      },
                    ],
                    workspaceAdmin: true,
                    isCreatedBy: true,
                  },
                  id: 1,
                },
              ],
            },
            settings: {
              optimize: 'default',
              optimizers: {
                columnPruning: 'enabled',
                filterPushdown: 'enabled',
                columnPruningOnSource: 'enabled',
                filterPushdownOnSource: 'enabled',
                joinPushdown: 'default',
                expressionPushdown: 'default',
                aggPushdown: 'default',
                unionPushdown: 'default',
                mergePushdown: 'default',
                profilePushdown: 'default',
                samplePushdown: 'default',
                customJsUdfPushdown: 'default',
                advancedPushdown: 'default',
                filesToBigQuery: 'default',
                filesToSnowflake: 'enabled',
                CDWToFiles: 'default',
                fullPushdown: 'default',
              },
              dbOverrides: {},
            },
            creator: {
              id: 1,
            },
            name: 'Untitled Flow',
            folder: null,
            fromTemplateId: null,
            runParameters: {
              data: [],
            },
            updatedAt: '2022-10-17T19:10:57.000Z',
            updater: {
              id: 1,
            },
            webhookFlowTasks: {
              data: [],
            },
            workspace: {
              id: 1,
            },
          },
          flowNodes: {
            data: [
              {
                createdAt: '2022-10-17T19:10:09.000Z',
                id: 2,
                outputObjects: {
                  data: [
                    {
                      execution: 'photon',
                      id: 1,
                      ignoreRecipeErrors: false,
                      isAdhoc: true,
                      description: null,
                      profiler: true,
                      createdAt: '2022-10-17T19:10:54.000Z',
                      name: null,
                      publications: {
                        data: [],
                      },
                      creator: {
                        id: 1,
                      },
                      updatedAt: '2022-10-17T19:10:54.000Z',
                      flowNode: {
                        id: 2,
                      },
                      writeSettings: {
                        data: [
                          {
                            delim: ',',
                            id: 2,
                            path: 'file:///tmp/trifacta-user-data/queryResults/admin@trifacta.local/Untitled recipe.csv',
                            action: 'create',
                            format: 'csv',
                            compression: 'none',
                            header: true,
                            asSingleFile: true,
                            prefix: null,
                            suffix: '_increment',
                            hasQuotes: true,
                            includeMismatches: true,
                            connectionId: null,
                            createdAt: '2022-10-17T19:10:54.000Z',
                            updatedAt: '2022-10-17T19:10:57.000Z',
                            runParameters: {
                              data: [],
                            },
                            creator: {
                              id: 1,
                            },
                            updater: {
                              id: 1,
                            },
                            outputObject: {
                              id: 1,
                            },
                          },
                        ],
                      },
                      dependency: null,
                      updater: {
                        id: 1,
                      },
                    },
                  ],
                },
                activeSample: {
                  id: 2,
                },
                recipe: {
                  description: null,
                  id: 2,
                  active: true,
                  name: 'Untitled recipe',
                  createdAt: '2022-10-17T19:10:09.000Z',
                  currentEdit: {
                    id: 3,
                  },
                  nextPortId: 1,
                  creator: {
                    id: 1,
                  },
                  updatedAt: '2022-10-17T19:10:47.000Z',
                  redoLeafEdit: {
                    id: 2,
                  },
                  updater: {
                    id: 1,
                  },
                },
                creator: {
                  id: 1,
                },
                sampleLoadLimit: null,
                planFlowTaskFlowNode: {
                  id: 7,
                  createdAt: '2022-12-15T09:09:30.000Z',
                  profile: true,
                  planFlowTask: {
                    id: 100,
                  },
                  publish: true,
                  flowNode: {
                    id: 2,
                  },
                  updatedAt: '2022-12-15T09:09:30.000Z',
                },
                wrangled: true,
                dependency: null,
                flow: {
                  id: 1,
                },
                updatedAt: '2022-10-17T19:10:47.000Z',
                referenceInfo: null,
                referencedFlowNode: null,
                updater: {
                  id: 1,
                },
              },
            ],
          },
          id: 100,
          planNode: {
            id: 100,
          },
          updatedAt: '2022-12-15T09:09:30.000Z',
          webhooksEnabled: false,
        },
        taskType: 'flow',
        updatedAt: '2023-01-20T10:49:31.000Z',
        updater: {
          id: 1,
        },
      },
      {
        coordinates: {
          x: 352,
          y: 692,
        },
        createdAt: '2022-12-15T09:21:25.000Z',
        creator: {
          id: 1,
        },
        handle: '2m',
        id: 101,
        name: 'Run Untitled Flow',
        plan: {
          id: 13,
        },
        task: {
          createdAt: '2022-12-15T09:21:25.000Z',
          flow: {
            defaultOutputDir: null,
            description: null,
            createdAt: '2022-10-17T11:43:16.000Z',
            fromExampleFlowHash: null,
            fromExampleFlowName: null,
            id: 1,
            associatedPeople: {
              data: [
                {
                  email: 'admin@trifacta.local',
                  name: 'Administrator',
                  authorizationPermission: {
                    policyTag: 'flow_owner',
                    policyName: null,
                    resourceOperationList: [
                      {
                        operations: ['share', 'delete', 'update', 'execute', 'read'],
                        policyTag: 'flow_owner',
                        resourceType: 'flow',
                      },
                    ],
                    workspaceAdmin: true,
                    isCreatedBy: true,
                  },
                  id: 1,
                },
              ],
            },
            settings: {
              optimize: 'default',
              optimizers: {
                columnPruning: 'enabled',
                filterPushdown: 'enabled',
                columnPruningOnSource: 'enabled',
                filterPushdownOnSource: 'enabled',
                joinPushdown: 'default',
                expressionPushdown: 'default',
                aggPushdown: 'default',
                unionPushdown: 'default',
                mergePushdown: 'default',
                profilePushdown: 'default',
                samplePushdown: 'default',
                customJsUdfPushdown: 'default',
                advancedPushdown: 'default',
                filesToBigQuery: 'default',
                filesToSnowflake: 'enabled',
                CDWToFiles: 'default',
                fullPushdown: 'default',
              },
              dbOverrides: {},
            },
            creator: {
              id: 1,
            },
            name: 'Untitled Flow',
            folder: null,
            fromTemplateId: null,
            runParameters: {
              data: [],
            },
            updatedAt: '2022-10-17T19:10:57.000Z',
            updater: {
              id: 1,
            },
            webhookFlowTasks: {
              data: [],
            },
            workspace: {
              id: 1,
            },
          },
          flowNodes: {
            data: [
              {
                createdAt: '2022-10-17T19:10:09.000Z',
                id: 2,
                outputObjects: {
                  data: [
                    {
                      execution: 'photon',
                      id: 1,
                      ignoreRecipeErrors: false,
                      isAdhoc: true,
                      description: null,
                      profiler: true,
                      createdAt: '2022-10-17T19:10:54.000Z',
                      name: null,
                      publications: {
                        data: [],
                      },
                      creator: {
                        id: 1,
                      },
                      updatedAt: '2022-10-17T19:10:54.000Z',
                      flowNode: {
                        id: 2,
                      },
                      writeSettings: {
                        data: [
                          {
                            delim: ',',
                            id: 2,
                            path: 'file:///tmp/trifacta-user-data/queryResults/admin@trifacta.local/Untitled recipe.csv',
                            action: 'create',
                            format: 'csv',
                            compression: 'none',
                            header: true,
                            asSingleFile: true,
                            prefix: null,
                            suffix: '_increment',
                            hasQuotes: true,
                            includeMismatches: true,
                            connectionId: null,
                            createdAt: '2022-10-17T19:10:54.000Z',
                            updatedAt: '2022-10-17T19:10:57.000Z',
                            runParameters: {
                              data: [],
                            },
                            creator: {
                              id: 1,
                            },
                            updater: {
                              id: 1,
                            },
                            outputObject: {
                              id: 1,
                            },
                          },
                        ],
                      },
                      dependency: null,
                      updater: {
                        id: 1,
                      },
                    },
                  ],
                },
                activeSample: {
                  id: 2,
                },
                recipe: {
                  description: null,
                  id: 2,
                  active: true,
                  name: 'Untitled recipe',
                  createdAt: '2022-10-17T19:10:09.000Z',
                  currentEdit: {
                    id: 3,
                  },
                  nextPortId: 1,
                  creator: {
                    id: 1,
                  },
                  updatedAt: '2022-10-17T19:10:47.000Z',
                  redoLeafEdit: {
                    id: 2,
                  },
                  updater: {
                    id: 1,
                  },
                },
                creator: {
                  id: 1,
                },
                sampleLoadLimit: null,
                planFlowTaskFlowNode: {
                  id: 8,
                  createdAt: '2022-12-15T09:21:25.000Z',
                  profile: true,
                  planFlowTask: {
                    id: 101,
                  },
                  publish: true,
                  flowNode: {
                    id: 2,
                  },
                  updatedAt: '2022-12-15T09:21:25.000Z',
                },
                wrangled: true,
                dependency: null,
                flow: {
                  id: 1,
                },
                updatedAt: '2022-10-17T19:10:47.000Z',
                referenceInfo: null,
                referencedFlowNode: null,
                updater: {
                  id: 1,
                },
              },
            ],
          },
          id: 101,
          planNode: {
            id: 101,
          },
          updatedAt: '2022-12-15T09:21:25.000Z',
          webhooksEnabled: false,
        },
        taskType: 'flow',
        updatedAt: '2023-01-20T10:56:16.000Z',
        updater: {
          id: 1,
        },
      },
    ],
  },
  planSnapshotRunCount: 3,
  snapshotted: false,
  updatedAt: '2022-12-02T09:17:21.000Z',
  updater: {
    id: 1,
  },
  workspace: {
    id: 1,
  },
};
