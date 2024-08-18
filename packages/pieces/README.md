# Vercel AI SDK - Pieces Provider

The **[Pieces provider](https://sdk.vercel.ai/providers/ai-sdk-providers/pieces)** for the [Vercel AI SDK](https://sdk.vercel.ai/docs) contains language model support for the pieces chat API.

## Setup

The Pieces provider is available in the `@ai-sdk/pieces` module. You can install it with

```bash
npm i @ai-sdk/pieces
```

## Provider Instance

You can import the default provider instance `pieces` from `@ai-sdk/pieces`:

```ts
import { pieces } from '@ai-sdk/pieces';
```

## Example

```ts
import { pieces } from '@ai-sdk/pieces';
import { generateText } from 'ai';

const { text } = await generateText({
  model: pieces('pieces-large-latest'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
```

## Documentation

Please check out the **[pieces provider](https://sdk.vercel.ai/providers/ai-sdk-providers/pieces)** for more information.
