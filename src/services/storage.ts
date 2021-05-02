import { storage } from 'config/firebase';
import { handleError } from 'utils/errors';

export type ISaveFileResponse = {
    fileError: string;
    url: string;
}

export class StorageProvider {
    public async saveFile(file: File, collection: string, validation?: string[]): Promise<ISaveFileResponse> {
        try {
            const timestamp = Date.now();
            const fileName = `${file.name}_-_${timestamp}`;
            const path = `${collection}/${fileName}`;
            await storage.ref(path).put(file);
            const url = await storage.ref(path).getDownloadURL();
            return { url, fileError: '' };
        } catch (error) {
            const errorMessage = handleError.generateMessage(error);
            return { url: '', fileError: errorMessage }
        }
    }
}

export const storageProvider = new StorageProvider();