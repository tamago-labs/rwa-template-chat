import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Chat: a.conversation({
    aiModel: a.ai.model("Claude 3.5 Sonnet"),
    systemPrompt: 'You are a helpful assistant',
  })
    .authorization((allow) => allow.owner())
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool"
  },
});
