import { DownloadImageService } from "./DownloadImageService";
import { GetImagesUrlsService } from "./GetImagesUrlsService";
import { RegisterImageUrlService } from "./RegisterImageUrlService";
import { UploadImageService } from "./UpdloadImageService";

export const downloadImageService = new DownloadImageService();
export const getImagesUrlsService = new GetImagesUrlsService();
export const registerImageUrlService = new RegisterImageUrlService();
export const uploadImageService = new UploadImageService();
