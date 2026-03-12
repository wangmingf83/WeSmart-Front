// src/types/clipboard.d.ts
import ClipboardJS from 'clipboard';

declare module 'clipboard' {
  interface ClipboardJS {
    e: {
      success: Array<{ fn: () => void }>;
      error: Array<{ fn: () => void }>;
    };
  }
}
