import { z } from "zod";
import { DATA_SOURCE_IDS } from "./config.js";

const zodEncryptedData = z.object({
  encryptedData: z.string(),
  iv: z.string(),
  authTag: z.string(),
});

export const importDataToRedisSchema = z.object({
  redisConUrl: z.string().optional(),
  redisConUrlEncrypted: zodEncryptedData.optional(),

  socketId: z.string().optional(),
  idField: z.string().optional(),
  keyPrefix: z.string().optional(),
  isStopOnError: z.boolean().optional(),
  jsFunctionString: z.string().optional(),

  uploadType: z.string().optional(),
  uploadPath: z.string(),
});

export const resumeImportDataToRedisSchema = z.object({
  socketId: z.string(),
  isStopOnError: z.boolean().optional(),

  uploadType: z.string().optional(),
  uploadPath: z.string(),
});

export const pgLoadDataSourceInRedisSchema = z.object({
  ids: z.array(z.nativeEnum(DATA_SOURCE_IDS)),
  isAll: z.boolean().optional(),
});

//--- types ---

interface IImportStats {
  totalFiles: number;
  processed: number;
  failed: number;
  totalTimeInMs: number;
}

export type { IImportStats };