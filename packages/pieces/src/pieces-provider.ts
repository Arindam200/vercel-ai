import {
    generateId,
    loadApiKey,
    withoutTrailingSlash,
  } from '@ai-sdk/provider-utils';
  import { PiecesChatLanguageModel } from './pieces-chat-language-model';
  import { PiecesChatModelId, PiecesChatSettings } from './pieces-chat-settings';

  export interface PiecesProvider {
    (
      modelId: PiecesChatModelId,
      settings?: PiecesChatSettings,
    ): PiecesChatLanguageModel;
  
    chat(
      modelId: PiecesChatModelId,
      settings?: PiecesChatSettings,
    ): PiecesChatLanguageModel;
  }
  
  export interface PiecesProviderSettings {
    baseURL?: string; // for us it will be localhost:1000 
    apiKey?: string; // for some cases we can consider 
    headers?: Record<string, string>; 
  }
  
  export function createPiecesProvider(
    options: PiecesProviderSettings = {},
  ): PiecesProvider {
    const createModel = (
      modelId: PiecesChatModelId,
      settings: PiecesChatSettings = {},
    ) =>
      new PiecesChatLanguageModel(modelId, settings, {
        provider: 'pieces.chat',
        baseURL:'http://localhost:1000',
        headers: () => ({ }),
        generateId: options.generateId ?? generateId,
      });
  
    const provider = function (
      modelId: PiecesChatModelId,
      settings?: PiecesChatSettings,
    ) {
      if (new.target) {
        throw new Error(
          'The model factory function cannot be called with the new keyword.',
        );
      }
  
      return createModel(modelId, settings);
    };
  
    pieces.chat = createModel;
  
    return provider as PiecesProvider;
  }
  

  export const pieces = createPiecesProvider();

